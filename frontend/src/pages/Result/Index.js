import React from 'react'
import Sideposter from '../Components/layout/Sideposter'
import { useNavigate } from "react-router-dom";
import { useQuery } from 'react-query'
import { FetchApi } from './FetchApi'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Backendurl from '../Helper/Backendurl'
import { FetchsettingApi } from '../Components/FetchApi'
import AdSense from 'react-adsense';
import { Helmet } from 'react-helmet'

const Result = ({score}) => {

    const { data, error, isError, isLoading } = useQuery('Quizdata', FetchApi);    
    const [suggestedquiz,  setSuggestedquiz] = useState();    
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const finalcoins = JSON.parse( localStorage.getItem('profileData'));
    const guestcoins = localStorage.getItem('coins');
    
    useEffect(()=>{
        if(!isLoading){
            setSuggestedquiz(data.data);
        }      
    },[isLoading])

    const [path, setPath] = useState();

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
          }
        }
        localPath();
    },[dataBackendurl, path]);
    
    const SettingData = useQuery('SettingData', FetchsettingApi);
    const [pubid, setPubid] = useState(""); 
    useEffect(()=>{
        const { data, error, isError, isLoading } = SettingData;    
        if(!isLoading){            
            setPubid(data.data[0].publisherid);       
        }        
    },[SettingData]);
  


  let navigate = useNavigate();
  return (
    <>
    <Helmet>
        <script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        data-ad-client={pubid}
        data-ad-channel="test"
        data-ad-frequency-hint="30s"
    >
    </script>          
    </Helmet>
    
    <div className="md:flex">
     
    <div className='left-cotaniner    
    bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
    md:max-w-[500px] min-w-[360px] w-full xs:w-ful  
    relative scroll-smooth'>                           
    
          <div className='displayAds mt-[12%]'>
              {(pubid) ? 
              <AdSense.Google
                  client={pubid}
                  slot='4974853520'
                  channel='9452659743'
                  style={{ display: 'block' }}
                  format='auto'
                  responsive='true'                      
              />
              :""}
          </div>

          <div className="m-auto mt-2 flex justify-center items-center relative w-[200px]">
              <img src="/winning.gif"
              className='h-[200px] absolute top-[-10px]' 
              alt="logo"/>
            <h1 className="text-white text-4xl">Well Played</h1>
          </div>

          <div className="flex justify-evenly mt-20 mb-5 gap-2 w-full">
            <div className="flex flex-col gap-2 bg-[#0E1344] border rounded-full py-2 cursor-pointer w-48">
              <div className="text-white text-center flex flex-col ">
                <span>{parseInt(score)} </span>
                <span>Your Score</span>
                </div>
              </div>
            <div className="flex flex-col gap-2 bg-[#0E1344] border rounded-full py-2 cursor-pointer w-48">
              <div className="text-white text-center flex flex-col ">
              {(isLoggedIn === 'false') ?
                <span>{guestcoins}</span>
                :
                <span>{finalcoins.coins}</span>
             }
                <span>Coins Earned</span>
                </div>
              </div>
          </div>

          <Link to="/home">
            <button className="text-white m-auto 
            flex gap-2 rounded-full px-7 py-2 border-2 border-[#1a2f77]">
              Double Your winnings
              <img src="/coin.svg" alt="coin" />
            </button>
          </Link>          

          <div className='mt-5 separator'>
          </div>

          <div className="mt-5 flex justify-center">
            <button 
            onClick={()=>(navigate('/home'))}
            className="text-white flex 
            gap-2 rounded-full px-7 py-2 border-2 border-[#1a2f77] bg-[#1a2f77]">
                 Home
            </button>
          </div>

          <div className="mt-4 flex justify-center">
              <span className='text-lg text-white'>Play More Quizzes</span>
          </div>

          {(isLoading)?
                <h2 className='text-white text-xl mt-2 m-3'>Loading Please Wait...</h2>
            :""}               
          {(isError)?  "Error... " :""}  
          
          <div className='relatedquiz pb-[50px] '>            
          { (suggestedquiz) ?  suggestedquiz.slice(0,2).map((ele,index)=>(
                <div key={index} className='quizlist flex justify-center align-end'>
                   <Link to={"/play/"+ele.name.replaceAll(" ","-")}>                     
                    <div className='mt-5 flex flex-col  bg-primary border border-border rounded-full py-2 cursor-pointer w-[300px]'>
                        <div className='flex gap-2 items-center px-2 justify-between'>                        
                            <div className='quizthumb w-[20%]'>
                                <img src={path+"/images/"+ele.image}  
                                className='rounded-[50px] bg-black' alt="quiz1"/>
                            </div>                       

                            <div className='flex flex-col justify-start'>
                                <div className="flex flex-col items-end font-bold bg-[#007aff] bg-opacity-20">
                                    <div className="px-2 rounded-[5px] text-[#007aff] max-h-[20px] py-[2px] flex items-center text-[10px] md:text-[8px] sm:text-[12px] p-1">
                                    {ele.name}                                  
                                    </div>
                                </div>

                                <div className="flex items-end flex-col mt-[5px]">
                                    <div className="text-[15px] text-white sm:text-[10px] font-bold flex">
                                        Play &amp; Win&nbsp;&nbsp;
                                        <img className="w-[20px] object-contain" src="/coin.svg" alt="Coins" />  
                                        {ele.coins}                                     
                                    </div>
                                </div>

                                <div className="flex items-end flex-col mt-[5px]">
                                    <span className="text-[15px] flex gap-1 
                                    sm:text-[10px]  bg-opacity-20 text-[#30d158] px-2 rounded-[5px]">
                                      Entry Fee  
                                    <img className="w-[14px] object-contain" src="/coin.svg" alt="coin"/>
                                    {ele.charges} 
                                    </span>
                                </div>
                            </div>

                            <div className='playbtn w-[20%]'>
                                <img src="/play.svg" className='rounded-[50px]' alt="play"/>
                            </div>                      
                        </div>
                    </div>
                    </Link>                                
                </div>   
                )): ""}            
          </div>

    
    </div>
    <Sideposter />  
    </div>
    </>
  )
}

export default Result