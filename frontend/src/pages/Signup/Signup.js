import React from 'react'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { Link } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import { AddPlayer } from './FetchApi'


const Signup = () => {
    const [ isLogged, setisLogged ] = useState(false);
    const [myData, setmyData] = useState();
 
    // const { data, error, isError, isLoading, refetch } = useQuery(['data'], () => AddPlayer(myData), {
    //     enabled : false,
    // } );


   
useEffect(()=>{
    async function refetchMydata(){
    
        if(myData){
                const Addedcoins =  localStorage.getItem("coins");   
                const  data  = await fetch(`http://127.0.0.1:8000/api/player/save`,
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
                console.log(content.data);
                localStorage.setItem("profileData",  JSON.stringify(content.data));
                return data
            }
        }
      refetchMydata();
},[isLogged])
    


    

 

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const clientId = '824447639674-csj63i8iq4s81c7080pt44aksjsnursi.apps.googleusercontent.com';

    useEffect(() => {
    const initClient = () => {
            gapi.client.init({
            clientId: clientId,
            scope: ''
        });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = async (res) => {
        // console.log(res.profileObj);
        localStorage.setItem('isLoggedIn', true);   

        const PorjectData = await res.profileObj;        
        console.log("got rest");
        const name = await PorjectData.name;
        const email =  await PorjectData.email;
        const profilepic = await PorjectData.imageUrl;        
        console.log("Set Before");
        setisLogged(true);
        setmyData({name,email,profilepic})
    
            
      
        
    }

  return (
    <>
      
    <div className="md:flex">
     
    <div className='left-cotaniner py-3 px-2 items-center 
    max-w-[500px] bg-[#111827] 
    overflow-x-hidden h-screen w-full  
    relative scroll-smooth'>   
        
            <div className="singleheader w-full flex flex-start gap-2 mb-5"> 
                <div className="backbtn">
                    <Link to="/Home" className='backbutton'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="white" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" 
                        className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Link>                    
                </div>

                
                <div className='logo'>
                    <img src="/quizlogo.png" className='w-[100px] h-[30px]' alt="logo"/>
                </div>
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
                text-white rounded-full px-24 py-3 border-white 
                border-solid border-2 mt-4 text-center bg-[#1a2f77]">
                GET CODE
                </div>
            </div> 

            <div className='googlelogin border-b border-[#1a2f77] border-solid pb-10 w-[80%] justify-center'>
                <h2 className='text-white'>React Google Login</h2>
                <br />
                <br />
                {(!isLoggedIn) ?
                <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                // onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
                :
                <h2 className='text-white'>already logged in</h2>         
                }            
            </div>

          

        </div>

       
        <div className="rules mt-[80px] w-full pl-5">
            <div className="w-full font-bold text-lg text-white">
                Play Quiz and Win Coins!
            </div>
            <ul className="text-[#8789c3] text-[14px] list-disc my-3 px-4">
                <li className="mb-2 text-[#8789c3]"> Play Quizzes in 25+ categories like GK, Sports, Bollywood, Business, Cricket &amp; more! </li>
                <li className="mb-2 text-[#8789c3]"> Compete with lakhs of other players! </li>
                <li className="mb-2 text-[#8789c3]"> Win coins for every game </li>
                <li className="mb-2 text-[#8789c3]"> Trusted by millions of other quiz enthusiasts like YOU! </li>
            </ul>
        </div>

        
        

        
        

    <Footer />
    </div>
    <Sideposter />
    </div>
    </>
  )
}

export default Signup