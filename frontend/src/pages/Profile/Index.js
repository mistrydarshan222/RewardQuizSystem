import React, {useContext,useEffect, useState} from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import useProfileData from "../../hooks/useProfileData";
import useShowCoins from "../../hooks/useShowCoins";
import { CoinsContext } from '../../context/CoinsContext';
import { useGoogleLogout } from 'react-google-login'
import { Link , useNavigate} from 'react-router-dom'
import { FetchsettingApi } from '../Components/FetchApi'

import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'


const Profile =  () => {
    let navigate = useNavigate();  
    const result  = String(useContext(CoinsContext));
    const coins = localStorage.getItem('coins');
    const [profileData, setprofileData] = useState({});    
    const [quizplayed,setquizplayed ] = useState([]);  
    const prodata = useProfileData();    
    const [loggedin, setLoggedin] = useState(false);
    const { data, error, isError, isLoading } = useQuery('data', FetchsettingApi);
    const [pubid, setPubid] = useState("");

    useEffect(()=>{           
        if(!isLoading){             
            setPubid(data.data[0].publisherid);       
        }        
    },[data]);





    if(!localStorage.getItem("playedquiz")){
        localStorage.setItem('playedquiz',JSON.stringify([]));   
    }
    
    useEffect(() => {   
        setLoggedin(localStorage.getItem('isLoggedIn'));        
        const PlayedQuizLocal = JSON.parse(localStorage.getItem('playedquiz'));
       
        if(PlayedQuizLocal){            
            if(loggedin === "true"){                
                setquizplayed(PlayedQuizLocal); 
            }
            else{                
                setquizplayed(PlayedQuizLocal.length);  
            }
        }
        
    }, [loggedin])

    useEffect(()=>{   
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
        localStorage.removeItem("playedquiz");           
        navigate('/');       
        }
      function onFailure(){
        console.log("onFailure");
      }
      
      const logout = () => {
        signOut();
    }
    useEffect(()=>{
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    },[])


  return (
    
    <>    
    
   
    
    <div className='md:flex'>

    <div className='left-cotaniner 
    bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
    md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>
        <Header /> 

        <div className='profilecontainer leftcontent mt-[10%] pt-10 pb-[100px] w-full flex justify-center items-center flex-col gap-7'>

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
                        {   
                        (profileData.hasOwnProperty('phone_number'))  ?
                        <div className="text-sm text-white">{profileData.phone_number}</div>
                        :  
                        <div className="text-sm text-white">Number not updated</div>
                        }
                        {   
                        (profileData.hasOwnProperty('email'))  ?
                        <div className="text-sm text-white">{profileData.email}</div>
                        :  
                        <div className="text-sm text-white">Email not updated</div>
                        }
                    </div>
                </div>
            </div>

            <div className='btns flex gap-10'>
                <div className="coinsbtn w-[150px]
                py-2 px-4 rounded-full
                flex justify-between items-center bg-orange-500 border-2">
                    <div className="text-sm text-white">Coins</div>
                {(profileData.hasOwnProperty('coins'))  ?                                  
                <div className="text-lg text-white">{profileData.coins}</div>                
                :
                <div className="text-lg text-white">{coins}</div>
                }
                
                </div>
                
                {(quizplayed) ? 
                <div className="quizplydbtn w-[150px]
                py-2 px-4 rounded-full
                flex justify-between items-center bg-black border-2">
                    <div className="text-sm text-white">Quiz Played</div>
                    <div className="text-lg text-white">{quizplayed}</div>
                </div>
                :
                <div className="quizplydbtn w-[150px]
                py-2 px-4 rounded-full
                flex justify-between items-center bg-black border-2">
                    <div className="text-sm text-white">Quiz Played</div>
                    <div className="text-lg text-white">0</div>
                </div>
            }
            </div>   

            {(profileData.hasOwnProperty('email')) ? 
<>
            
        <div className='logoutbtn' onClick={logout}>
      
             <div className="quizplydbtn border-2 border-red-500 hover:bg-red-500 
             focus:outline-none focus:ring-4 focus:ring-red-300 font-medium
              rounded-full hover:text-white text-red-500 
             text-sm px-5 py-2.5 w-48 cursor-pointer
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
           
      

    </div>                      
    <div className='displayAds'>                  
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2839576897921974"
            data-ad-slot="4974853520"
            data-ad-channel="9452659743"
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    </div>
        

    <Footer />
    </div>

    <Sideposter />  
    </div>
    </>
  )
    }
    

    

export default Profile