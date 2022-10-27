import React,{useContext,useEffect, useState} from 'react'
import { CoinsContext } from '../../../context/CoinsContext'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { useQuery } from 'react-query'
import { FetchsettingApi } from '../FetchApi'
import Backendurl from '../../Helper/Backendurl'
import AdSense from 'react-adsense';

const Header = () => {    
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
    
  
    return (
        
    <div className='header flex item-center py-2 items-center justify-between mb-10 w-full mx-2'>
    {(settingData)?
    <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={settingData.metadescription} />
            <title>{settingData.title}</title>          
            <link id="favicon" rel="icon" href={path+"/images/"+ settingData.favicon}  type="image/x-icon"/>
            <script>{settingData.headerScript}</script>
             <script>
             {` 
             var script = document.createElement('script');
                script.onload = function() {console.log("Script loaded and ready");};
                script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
                script.setAttribute ("data-ad-client","${pubid}");
                script.setAttribute  ("data-ad-channel","test");
                
                script.setAttribute ("data-ad-frequency-hint","30s");
                script.onerror = function() {console.log('adblock true');};
                script.onload = function() {console.log('adblock false');};   
                document.getElementsByTagName('head')[0].appendChild(script);
                
                window.adsbygoogle = window.adsbygoogle || [];
                var adBreak = adConfig = function(o) {adsbygoogle.push(o);}
                adConfig({preloadAdBreaks: 'on'});
                
                
                function initBreak(a, url){
                switch (a) {
                case "preroll":
                console.log("start adbreak preroll");     
                adBreak({
                type: 'preroll',  // ad shows at start of next level
                name: 'preroll',   // resume the game flow.
                adBreakDone: () => {console.log("close adbreak preroll");}     
                });
                break;
                case "start":
                console.log("start adbreak start");    
                adBreak({
                type: 'start',  
                name: 'start',
                adBreakDone: () => {console.log("close adbreak start");}    
                });
                break;
                case "pause": 
                console.log("start adbreak pause"); 
                adBreak({
                type: 'pause', 
                name: 'pause',
                adBreakDone: () => {console.log("close adbreak pause");}    
                });
                break;
                case "next": 
                console.log("start adbreak next"); 
                adBreak({
                type: 'next', 
                name: 'next',
                adBreakDone: () => {console.log("close adbreak next");}   
                });
                
                break;
                case "browse":     
                console.log("start adbreak browse"); 
                adBreak({
                type: 'browse',  
                name: 'browse',
                adBreakDone: () => {console.log("close adbreak browse");}    
                });
                break;
                case "reward": 
                console.log("start adbreak reward"); 
                adBreak({
                type: 'reward',  
                name: 'reward',
                adBreakDone: () => {console.log("close adbreak reward");}       
                });
                break;
                }
                  
                } 
                `}
                </script> 
                <script>                
                {`
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2839576897921974" crossorigin="anonymous"></script>
                <script>window.adsbygoogle = window.adsbygoogle || []; var adBreak = adConfig = function(o) {adsbygoogle.push(o);} </script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2839576897921974" crossorigin="anonymous"></script>
                     <script async
                                  data-adbreak-test="on"
                                data-ad-frequency-hint="30s"
                       src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2839576897921974"
                       crossorigin="anonymous">
                   </script>
                   <script>
                      window.adsbygoogle = window.adsbygoogle || [];
                      var adBreak = adConfig = function(o) {adsbygoogle.push(o);}
                   </script>
                   <script async
                      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2839576897921974"
                      crossorigin="anonymous">
                </script>
                <script>
                   window.adsbygoogle = window.adsbygoogle || [];
                   var adBreak = adConfig = function(o) {adsbygoogle.push(o);}
                   adConfig({preloadAdBreaks: 'on'});
                </script> 
                `}
                </script>       
    </Helmet>
    :""
    }


        <Link to={"/home"} className='logo'>
        {(settingData)?     
            <img src={path+"/images/"+ settingData.logo} 
            className='w-[100px] h-[30px] flex item-center' alt="logo"/>
            :""
        }
        </Link>

        <div className='rightheader flex items-center ml-10'>

        {(loggedin === 'true') ? 
            <Link to="/reward" className='dailyreward flex item-center w-full curson-pointer'>
                <img src="/reward.gif" className='w-[25px]' alt="reward"/>
                <div className="flex items-center text-white text-[12px]">Daily Reward</div>
            </Link>

        : 
            <Link to="/home" className='dailyreward flex item-center w-full curson-pointer'>
            <img src="/reward.gif" className='w-[25px]' alt="reward"/>
            <div className="flex items-center text-white text-[12px]">Daily Reward</div>
            </Link>
        }

            <div className='coinbalance flex item-center'>
                <div className="flex gap-1 items-center bg-[#1a2f77] px-4 py-1 rounded-md mx-2">
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