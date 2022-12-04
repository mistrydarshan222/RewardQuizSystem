import React from 'react'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import Backendurl from '../Helper/Backendurl'
import { useNavigate } from "react-router-dom";
import { FetchsettingApi } from '../Components/FetchApi'
import MarkdownPreview from '@uiw/react-markdown-preview';
import jwt_decode from "jwt-decode";



const Signup = () => {

    
    
    const [ isLogged, setisLogged ] = useState(false);
    const [myData, setmyData] = useState();
    
    const [instruction, setinstruction] = useState("");
    const [logo, setlogo] = useState("");
    const SettingData = useQuery('SettingData', FetchsettingApi); 
    const [path, setPath] = useState();
    const [clientid, setClientid] = useState();

    let navigate = useNavigate();    
    
    useEffect(()=>{
        const isLoggedIn = localStorage.getItem('isLoggedIn');  
        if(isLoggedIn){
            setisLogged(isLoggedIn); 
        }

    },[])

  

    useEffect(()=>{
        const { data, error, isError, isLoading } = SettingData;    
        if(!isLoading){
            setinstruction(data.data[0].Firstpageinstructions);
            setlogo(data.data[0].logo);       
         }        
    },[SettingData]);

    const dataBackendurl = useQuery('posts', Backendurl, {
        // enabled: false,
        staleTime: Infinity,
        cacheTime:Infinity
    }
    );   

    useEffect(()=>{
        async function localPath() {
            const { data, error, isError, isLoading } = dataBackendurl
            if(data){                
                setPath(data.backend_url); 
                setClientid(data.client_id);
            }
          }
          localPath();
      },[dataBackendurl, path]);

    useEffect(()=>{
    async function refetchMydata(){
    
        if(myData){
                const Addedcoins =  localStorage.getItem("coins"); 
                const url = await Backendurl();  
                const data  = await fetch(`${url.backend_url}/api/player/save`,
                {
                    method: 'POST',                    
                    mode: 'cors',
                    body: JSON.stringify({
                    "name":myData.name,
                    "email":myData.email,
                    "profile_pic":myData.profilepic,
                    "coins":Addedcoins,                    
                    })
                } );
                const content = await data.json();                
                localStorage.setItem("profileData",  JSON.stringify(content.data));
                const playerinfo = await JSON.parse(localStorage.getItem("profileData"));
                const player_id = await playerinfo.id; 
                const LoggedPlayedQuiz = await fetch(`${url.backend_url}/api/playedQuiz/${player_id}`);
                const res = await LoggedPlayedQuiz.json();                
                localStorage.setItem('playedquiz', JSON.stringify(res.toString()));
                navigate('/home'); 
                return data
            }
        }
      refetchMydata();
    },[myData])

    function handleCallbackResponce(response){        
        const res = jwt_decode(response.credential);             
        localStorage.setItem('isLoggedIn', true);   
        setisLogged(true);         
        const name =  res.name;
        const email =   res.email;
        const profilepic =  res.picture;      
        setisLogged(true);
        setmyData({name,email,profilepic});   
         
    }   

  
    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: clientid,
            callback: handleCallbackResponce
        })

        google.accounts.id.renderButton(
            document.getElementById("signin"),
            { theme: "outline", size: "large"}
        )

        google.accounts.id.prompt();
    },[clientid, isLogged])

    // const onSuccess = async (res) => {
    //     const isLoggedIn = localStorage.getItem('isLoggedIn');        
    //     localStorage.setItem('isLoggedIn', true);   
    //     setlogCheck(isLoggedIn);           
    //     const PorjectData = await res.profileObj;       
    //     const name = await PorjectData.name;
    //     const email =  await PorjectData.email;
    //     const profilepic = await PorjectData.imageUrl;       
        
    //     setisLogged(true);
    //     setmyData({name,email,profilepic});    
                              
    // }

    // useEffect(()=>{
    //     if(isLogged === true){
            
    //     }
    // },[isLogged])

 

    return (
    <>     
    <div className="md:flex">     
    <div className='left-cotaniner 
    bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
    md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>   
        
            <div className="singleheader mt-3 mx-2 w-full flex flex-start gap-2 mb-5"> 
                <div className="backbtn">
                    <Link to="/Home" className='backbutton'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="white" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" 
                        className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Link>                    
                </div>

                <Link to={"/home"} className='logo'>
                {(SettingData)?     
                    <img src={path+"/images/"+ logo} 
                    className='w-[100px] h-[30px] flex item-center' alt="logo"/>
                    :""
                }
                </Link>
            </div>
   
       

        <div className="loginsection mt-[100px]">
            
            <div className="text-center font-bold text-white text-[18px]">
                Join QuizTwiz now!👋
            </div>         
            <div className="mt-2 text-[12px] text-[#8789c3] text-center">
                Play Quizzes and Win Coins
            </div> 
            
            <div className="mt-8 w-[60%] m-auto rounded-full border-2 
            border-solid border-white ">
                <input className="w-full bg-[#1f2937] text-white rounded-full bg-primary py-3 text-center px-4" 
                placeholder="Enter phone number" type="tel" autoComplete="tel" />
            </div> 

            <div className="m-auto mt-8 w-[60%] ">
                <div className="text-sm font-black 
                text-white rounded-full px-16 py-3 border-white 
                border-solid border-2 mt-4 text-center bg-[#1a2f77]">
                GET CODE
                </div>
            </div> 

            <>
            {(isLogged == false || isLogged == "false" )   ?      
              <div className='signin my-5 flex justify-center' id="signin"></div>    
                    :
            ""}


            </> 
            
            
            {/* <div className='googlelogin mt-10 
            border-b border-[#1a2f77] flex
            border-solid pb-10 w-[100%] justify-center'>                
                <br />
                <br />
                {(!logCheck && clientid) ?
                <GoogleLogin
                clientId={clientid}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                // onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}                
                redirectUri='postmessage'
                />
               :""
               }            
            </div> */}
        </div>

       
        <div className="rules pt-[40px] pb-[150px] w-full px-5">            
            {(instruction) ? 
                <>
                    <div className="instruction">
                    <MarkdownPreview source={instruction} />
                    </div>
                </>
                :""}
        </div>
    <Footer />
    </div>
    <Sideposter />
    </div>
    </>
  )
}

export default Signup