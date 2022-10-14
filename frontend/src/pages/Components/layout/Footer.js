import React from 'react'
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import {Helmet} from "react-helmet";
import { FetchsettingApi } from '../FetchApi'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

const Footer = () => {

  const location = useLocation(); 
  const [pubid, setPubid] = useState("");
  const SettingData = useQuery('SettingData', FetchsettingApi);
  useEffect(()=>{
    const { data, error, isError, isLoading } = SettingData;    
    if(!isLoading){
        setPubid(data.data[0].publisherid);
    }        
    },[SettingData]);

  return (
    <>
    {(pubid) ? 
    <Helmet>
    <script
      async=""
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubid}`}
      crossorigin="anonymous"
    >      
    </script>
    <script>
      {`window.adsbygoogle = window.adsbygoogle || [];
      var adBreak = (adConfig = function (o) {
        adsbygoogle.push(o);
      });`}
    </script>
    <script
      async=""
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubid}`}
      crossorigin="anonymous"
    ></script>
    <script
      async=""
      data-adbreak-test="on"
      data-ad-frequency-hint="30s"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubid}`}
      crossorigin="anonymous"
    ></script>
    <script>
    {`window.adsbygoogle = window.adsbygoogle || [];
      var adBreak = (adConfig = function (o) {
        adsbygoogle.push(o);
      });`}
    </script>
    <script
      async=""
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubid}`}
      crossorigin="anonymous"
    ></script>
    <script>
      {`window.adsbygoogle = window.adsbygoogle || [];
      var adBreak = (adConfig = function (o) {
        adsbygoogle.push(o);
      });
      adConfig({ preloadAdBreaks: "on" });`}
    </script>
    </Helmet>
    : ""}
    <div className="footer bg-[#0f172a] flex 
    md:px-2 py-2 items-center justify-center fixed 
    bottom-0 md:max-w-[500px] md:w-[500px] min-w-[360px] w-full  xs:w-full" >        
        
        <Link to="/category" className={(location.pathname === "/category")? "bg-[#1a2f77] flex flex-col px-10 py-2 rounded-full items-center hover:bg-[#1a2f77]" : "flex flex-col px-10 py-2 rounded-full items-center hover:bg-[#1a2f77]"  }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <p className="mt-1 text-white">Category</p>            
        </Link>

        <Link to="/home" className={(location.pathname === "/home")? "bg-[#1a2f77] flex flex-col px-10 py-2 rounded-full items-center hover:bg-[#1a2f77]" : "flex flex-col px-10 py-2 rounded-full items-center hover:bg-[#1a2f77]"  }>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <p className="mt-1 text-white">Home</p>
        </Link>
        
        <Link to="/profile" className={(location.pathname === "/profile")? "bg-[#1a2f77] flex flex-col px-10 py-2 rounded-full items-center hover:bg-[#1a2f77]" : "flex flex-col px-10 py-2 rounded-full items-center hover:bg-[#1a2f77]"  }>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="mt-1 text-white">Profile</p>
        </Link>
    </div>

    </>
  )
}

export default Footer;