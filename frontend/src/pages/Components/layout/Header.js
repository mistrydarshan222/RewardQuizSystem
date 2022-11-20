import React,{useContext,useEffect, useState} from 'react'
import { CoinsContext } from '../../../context/CoinsContext'
import {Helmet} from "react-helmet";
import { useQuery } from 'react-query'
import { FetchsettingApi } from '../FetchApi'
import Backendurl from '../../Helper/Backendurl'
import { useGoogleLogout } from 'react-google-login'
import { Link , useNavigate} from 'react-router-dom'
import useProfileData from "../../../hooks/useProfileData";

const Header = () => {    
    let navigate = useNavigate(); 
    const result  = useContext(CoinsContext);
    const [path, setPath] = useState();
    
    
    const dataBackendurl = useQuery('posts', Backendurl, {
         // enabled: false,
         staleTime: Infinity,
         cacheTime:Infinity
    }
    );  
    
    const [pubid, setPubid] = useState("");
    const SettingData = useQuery('SettingData', FetchsettingApi);   
    useEffect(()=>{
        const { data, error, isError, isLoading } = SettingData;    
        if(!isLoading){        
            setPubid(data.data[0].publisherid);
        }        
    },[SettingData]);

    useEffect(()=>{
        async function localPath() {            
            const { data, error, isError, isLoading } = dataBackendurl
            if(data){
                setPath(data.backend_url);  
            }
          }
          localPath();
      },[dataBackendurl]);


    const { data, error, isError, isLoading } = useQuery('setting', FetchsettingApi); 
   

    const [settingData, setSettingData] = useState();
    const [loggedin, setLoggedin] = useState(false);
    const [profileData, setprofileData] = useState({});     
    const prodata = useProfileData();
    
    var finalcoins = result;
    const updateddata = JSON.parse( localStorage.getItem('profileData'));
    const localcoins = JSON.parse( localStorage.getItem('coins'));

    if(localcoins){
        finalcoins = localcoins || result;
    }

    useEffect(()=>{       
        if(data){
            setSettingData(data.data[0]);
        }
    },[isLoading, data])

    if(updateddata){
        const updatedCoins = updateddata.coins;
        finalcoins = updatedCoins || result;       
    }   

    useEffect(() => {
        setLoggedin(localStorage.getItem('isLoggedIn')); 
    }, [loggedin])
    
    const mobileOpener = ()=>{
        const menulist = document.querySelector('.menulist');
        const mobilemenu_container =  document.querySelector('.mobilemenu_container');
        mobilemenu_container.classList.toggle('opacity-0');        
        menulist.classList.toggle('translate3d_show');
        
    }

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


    return (
        
    <div className='header px-2 w-full flex item-center justify-around py-2 items-center mb-10 md:w-[500px] bg-[#26284c] z-[99]'>
        <div className='mobilemenu_container translate3d_hide opacity-0'>
            <div className='menulist min-h-screen bg-[#111827] fixed top-0 left-0  block md:max-w-[500px] md:w-[500px] min-w-[360px] w-full '>
                <div className='menucontent'>

                    <div onClick={mobileOpener} className='backbtn flex items-center my-5 ml-5 cursor-pointer'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" class="fill-current text-white dark:text-CBBBDDD"><path fillRule="evenodd" clipRule="evenodd" d="M6.11977 11.9416L12.4675 5.59392C12.6081 5.45327 12.6871 5.2625 12.6871 5.06359C12.6871 4.86468 12.6081 4.67391 12.4675 4.53326C12.3268 4.39261 12.136 4.31359 11.9371 4.31359C11.7382 4.31359 11.5475 4.39261 11.4068 4.53326L4.52948 11.4106C4.38926 11.5512 4.31052 11.7416 4.31052 11.9402C4.31052 12.1388 4.38926 12.3292 4.52948 12.4698L11.4068 19.3471C11.5475 19.4878 11.7382 19.5668 11.9371 19.5668C12.136 19.5668 12.3268 19.4878 12.4675 19.3471C12.6081 19.2065 12.6871 19.0157 12.6871 18.8168C12.6871 18.6179 12.6081 18.4271 12.4675 18.2865L6.11977 11.9416Z"></path>
                        </svg>
                        <div className='text-xl text-white'>
                            Menu
                        </div>
                    </div>

                    <div className="content_menu flex flex-wrap my-10 justify-start">

                        <Link to="/Category" className='singlemenu flex flex-col w-[33%]'>
                            <div className='menuicon my-4 m-auto'>                            
                               <img src='/wheel.svg' alt='wheel'/>
                            </div>
                            <div className='text-sm text-white text-center'>
                            Quiz Categories
                            </div>
                        </Link>

                        <Link to="/reward" className='singlemenu flex flex-col w-[33%]'>
                            <div className='menuicon my-4 m-auto'>                            
                               <img src='/reward.svg' />
                            </div>
                            <div className='text-sm text-white text-center'>
                            Rewards
                            </div>
                        </Link> 

                        <Link to="/quizrules" className='singlemenu flex flex-col w-[33%]'>
                            <div className='menuicon my-4 m-auto'>                            
                               <img src='/rules.svg' />
                            </div>
                            <div className='text-sm text-white text-center'>
                            Quiz contest rules
                            </div>
                        </Link>

                        <Link to="/contactus" className='singlemenu flex flex-col w-[33%]'>
                            <div className='menuicon my-4 m-auto'>                            
                               <img src='/contact.svg' />
                            </div>
                            <div className='text-sm text-white text-center'>
                            Contact us
                            </div>
                        </Link>

                        <Link to="/privacy" className='singlemenu flex flex-col w-[33%]'>
                            <div className='menuicon my-4 m-auto'>                            
                               <img src='/privacy.svg' />
                            </div>
                            <div className='text-sm text-white text-center'>
                            Privacy policies
                            </div>
                        </Link>
                                              
                    </div>

                    <div className='loginsection flex justify-center'>
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
                   
                </div>                
            </div>
        </div>
    {(settingData)?
    <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={settingData.metadescription} />
            <title>{settingData.title}</title> 
            <meta name="keywords" content={settingData.metakeywords}/>
            <meta property="og:description" content={settingData.metaogdescription}></meta>  
            <meta http-equiv="X-UA-Compatible" content={settingData.meta_httpequiv}></meta>   
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />              
            <link id="favicon" rel="icon" href={path+"/images/"+ settingData.favicon}  type="image/x-icon"/>            
            <script>{settingData.headerScript}</script>          
                 
    </Helmet>
    :""    
    }

<div className='left_container flex w-[40%] items-center'>
    <button onClick={mobileOpener} className='mobilemenu block'>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" class=" text-C676767 dark:text-CBBBDDD"><path d="M4.707 7.414H19.793C19.9805 7.414 20.1603 7.33951 20.2929 7.20692C20.4255 7.07434 20.5 6.89451 20.5 6.707C20.5 6.51949 20.4255 6.33967 20.2929 6.20708C20.1603 6.07449 19.9805 6 19.793 6H4.707C4.51949 6 4.33966 6.07449 4.20708 6.20708C4.07449 6.33967 4 6.51949 4 6.707C4 6.89451 4.07449 7.07434 4.20708 7.20692C4.33966 7.33951 4.51949 7.414 4.707 7.414V7.414Z"></path><path d="M4.57903 12.723H16.921C17.084 12.6904 17.2306 12.6023 17.3359 12.4738C17.4413 12.3452 17.4988 12.1842 17.4988 12.018C17.4988 11.8518 17.4413 11.6908 17.3359 11.5622C17.2306 11.4337 17.084 11.3456 16.921 11.313H4.57903C4.41608 11.3456 4.26947 11.4337 4.16413 11.5622C4.05879 11.6908 4.00122 11.8518 4.00122 12.018C4.00122 12.1842 4.05879 12.3452 4.16413 12.4738C4.26947 12.6023 4.41608 12.6904 4.57903 12.723V12.723Z"></path><path d="M4.45 18.0361H14.05C14.298 18.0361 14.5 17.7191 14.5 17.3311C14.5 16.9431 14.3 16.6311 14.05 16.6311H4.45C4.203 16.6311 4 16.9481 4 17.3311C4 17.7141 4.2 18.0361 4.45 18.0361Z"></path></svg>
    </button>

    <Link to={"/home"} className='logo mx-2'>
    {(settingData)?     
        <img src={path+"/images/"+ settingData.logo} 
        className='w-[100px] h-[30px] flex item-center' alt="logo"/>
        :""
    }
    </Link>
</div>

<div className='rightheader flex items-center w-[60%]'>
    <Link to="/reward" className='dailyreward flex item-center justify-end mx-2 w-full cursor-pointer'>
            <img src="/reward.gif" className='w-[25px]' alt="reward"/>
            <div className="flex items-center text-white text-[12px]">Daily Reward</div>
        </Link>

    <div className='coinbalance flex item-center mx-2 '>
        <div className="flex gap-1 items-center bg-[#1a2f77] px-4 py-1 rounded-md mx-2 cursor-pointer">
                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.8 10C26.8 15.5228 22.3228 20 16.8 20C11.2772 20 6.8 15.5228 6.8 10C6.8 4.47715 11.2772 0 16.8 0C22.3228 0 26.8 4.47715 26.8 10ZM9.3 10C9.3 14.1421 12.6579 17.5 16.8 17.5C20.9421 17.5 24.3 14.1421 24.3 10C24.3 5.85786 20.9421 2.5 16.8 2.5C12.6579 2.5 9.3 5.85786 9.3 10Z" fill="#ff9933"/>
                <path d="M10 0C7.34783 -3.16267e-08 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 2.3186e-07 7.34783 0 10C-2.3186e-07 12.6522 1.05357 15.1957 2.92893 17.0711C4.80429 18.9464 7.34783 20 10 20V17.5C8.01087 17.5 6.10322 16.7098 4.6967 15.3033C3.29018 13.8968 2.5 11.9891 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5V0Z" fill="#ff9933"/>
                </svg>
                <div className="flex gap-1 text-xs text-white">
                {finalcoins}
                    <div className="text-[10px] text-white">COINS</div>
                </div>
        </div>
    </div>

  
</div>

    </div>
  )
}

export default Header