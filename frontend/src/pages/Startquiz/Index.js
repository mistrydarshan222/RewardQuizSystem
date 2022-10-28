import React, { useState, useEffect } from 'react'
import Sideposter from '../Components/layout/Sideposter'
import { FetchsettingApi } from '../Components/FetchApi'
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

function Index() {

    const [instruction, setinstruction] = useState("");
    const [pubid, setPubid] = useState(""); 

    const SettingData = useQuery('SettingData', FetchsettingApi); 
    useEffect(()=>{
        const { data, error, isError, isLoading } = SettingData;    
        if(!isLoading)
        {
            setinstruction(data.data[0].Firstpageinstructions);   
            setPubid(data.data[0].publisherid);      
        }        
        },[SettingData]);

        useEffect(()=>{
            window.adsbygoogle = window.adsbygoogle || []
            window.adsbygoogle.push({})
        },[])


  return (
    <>   
   
    <div className="md:flex">     
        <div className='left-cotaniner 
        bg-[#111827] overflow-x-hidden h-screen 
        md:max-w-[500px] md:w-[500px] min-w-[360px] w-full  xs:w-full 
        relative overflow-y-auto pb-[80px]'>

            <div className='1stblock py-10'>
                <img src="/treasure.svg" className="w-[87px] h-[89px] m-auto" alt="treasure"/>   

                <div className="text-center mt-6 text-[18px] font-bold text-white">
                    <span className="m-1">You have won</span>
                    <span className="m-1">
                        <img alt="coin" src="/coin.png" className='w-[16px] h-[14px] inline-block' /> 
                    </span>
                    <span className="m-1">100 coins! 👏</span> 
                </div>

                <div className="border-b border-[#1a2f77] 
                        border-solid pb-4 w-[70%] m-auto">
                </div>


                <div className="pt-4 text-center text-[16px] text-[#8789c3]">
                    Play more quizzes and win more coins
                </div>

                <Link to="/home">
                    <div className="mx-8 rounded-xl mt-10 text-center uppercase font-bold text-[16px] py-3 text-white rounded-5 bg-[#3a5ad5]  border-[#feca66] 
                    border-solid border-b-4	">LET'S START
                    </div>
                </Link>

                <div className='displayAds mt-[12%]'>                  
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


                <div className='notice mt-6'>
                    <div className="px-5">
                        {(instruction) ? 
                        <>
                            <div className="instruction">
                            <MarkdownPreview source={instruction} />
                            </div>
                        </>
                        :""}
                    </div>
                </div> 

            </div>
            
        </div>
        <Sideposter /> 
    </div>
    </>
  )
}

export default Index