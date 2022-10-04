import React, {useContext,useEffect, useState} from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import useProfileData from "../../hooks/useProfileData";
import useShowCoins from "../../hooks/useShowCoins";
import { CoinsContext } from '../../context/CoinsContext';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useGoogleLogout } from 'react-google-login'
import { Link , useNavigate} from 'react-router-dom'


const Profile =  () => {
    let navigate = useNavigate();  
    const result  = String(useContext(CoinsContext));
   
    

   
const [profileData, setprofileData] = useState({});

const prodata = useProfileData(); 

useEffect(()=>{
    
    console.warn(prodata);
    if(prodata){
        setprofileData(prodata);
       
        
    }

},[prodata, profileData])

    const clientId = '824447639674-csj63i8iq4s81c7080pt44aksjsnursi.apps.googleusercontent.com';


    const { signOut, loaded } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
     
      })
      function onLogoutSuccess(){
        localStorage.setItem('isLoggedIn', false);   
        localStorage.removeItem("profileData");
        localStorage.removeItem("coins");
        console.log("onLogoutSuccess");
        navigate('/');
        
  


      }
      function onFailure(){
        console.log("onFailure");
      }
      
      const logout = () => {
        signOut();
    }

    


  return (
    <>
    <div className='md:flex'>

    <div className='left-cotaniner 
    bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
    md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>
        <Header /> 

        <div className='profilecontainer pt-10 pb-20 w-full flex justify-center items-center flex-col gap-7'>

            <div className='usericon'>
                <div className="flex justify-center w-full gap-10">
                 
                        <img 
                        className="w-32 h-32 bg-[#1F2937] rounded-full flex justify-center items-center  border-1 border-white border-solid"
                         src={
(profileData.hasOwnProperty('profile_pic'))  ?
profileData.profile_pic
:  "user.png" } 
referrerPolicy="no-referrer"
alt="Usericon" />
                   
                    <div className="flex gap-1 flex-col items-center justify-center">
                        <div className="text-3xl text-white">
                            {   
                                (profileData.hasOwnProperty('name'))  ?
                                profileData.name
                               :  "USER X"
                            }

                        </div>
                        <div className="text-sm text-white">Number not updated</div>
                        <div className="text-sm text-white">Email not updated</div>
                    </div>
                </div>
            </div>

            <div className='btns flex gap-10'>
                <div className="coinsbtn w-[150px]
                py-2 px-4 rounded-full
                flex justify-between items-center bg-orange-500 border-2">
                    <div className="text-sm text-white">Coins</div>
                   {(result) ? 
                   
                   <div className="text-lg text-white">{result}</div>
                :"00"
                }
                
                </div>

                <div className="quizplydbtn w-[150px]
                py-2 px-4 rounded-full
                flex justify-between items-center bg-black border-2">
                    <div className="text-sm text-white">Quiz Played</div>
                    <div className="text-lg text-white">95</div>
                </div>
            </div>   

            {(profileData.hasOwnProperty('email')) ? 
<>
            
        <div className='logoutbtn' onClick={logout}>
      
             <div className="quizplydbtn border-2 border-red-500 hover:bg-red-500 
             focus:outline-none focus:ring-4 focus:ring-red-300 font-medium
              rounded-full hover:text-white text-red-500 
             text-sm px-5 py-2.5 w-48 
             text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700  dark:focus:ring-red-900">
                 <div className="m-auto">Log Out</div>                        
             </div>
         </div>   
         </> 
         :
         <Link to="/login" >
        <div className='joinnowbtn'>
                <div className="quizplydbtn w-[150px]
                    py-2 px-4 rounded-full
                    flex justify-between items-center bg-[#3957ea] border-2">
                    <div className="text-xl text-white m-auto">Join Now</div>                        
                </div>
            </div>  
        </Link>
        }
           

                  

            

            <div className='ads mt-[20px]'>
                <img src="/ad440.png" className='w-[100%] m-auto text-center' alt="ad"/>
            </div>



        </div>                      
    
        

    <Footer />
    </div>

    <Sideposter />  
    </div>
    </>
  )
    }
    

    

export default Profile