import React from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import {FetchQuiz} from './FetchApi'
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom'

function Index() {

    const { name } = useParams();
    const QueryName = name.replaceAll("-"," ");
  
    const { data, error, isError, isLoading } = useQuery(['data', QueryName ], () => FetchQuiz(QueryName));   
    
    const [path, setPath] = useState();

    useEffect(()=>{
      async function localPath() {
            const data = await fetch('/settings.json');
            const res =  await data.json();
            setPath(res.backend_url);            
        }
        localPath();
    },[]);
    

  return (
    <>
    <div className='md:flex'>
        <div className='left-cotaniner 
        bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
        md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>
            <Header /> 
                <div className='leftcontent w-full'>                    
                    <div className='quizlists pb-[150px]'>
                        <div className='quizlist m-auto w-[90%]'> 
                            {/* <Link to={"/play/"+el.name.replaceAll(" ","-")}>                 */}
                            {(isLoading)?
                                <h2 className='text-white text-xl mt-2 m-3'>Loading Please Wait...</h2>
                            :""}                
                            {(isError)?  "Error... " :""}                                                        
                            {(!isLoading) ? 
                                
                            data.data.map((el,index)=>( 
                            <Link to={"/play/"+el.name.replaceAll(" ","-")}>
                            <div key={index} className='mt-5 flex flex-col gap-2 w-full bg-primary border border-border rounded-full py-2 cursor-pointer'>
                                <div className='flex gap-2 items-center px-2 justify-between'>                        
                                    <div className='quizthumb w-[20%]'>
                                        <img src={path+"/images/"+el.image} 
                                        className='rounded-[50px] bg-black' alt="quiz1"/>
                                    </div>                       

                                    <div className='flex flex-col justify-start'>
                                        <div className="flex flex-col items-end font-bold bg-[#007aff] bg-opacity-20">
                                            <div className="px-2 rounded-[5px] text-[#007aff] max-h-[20px] py-[2px] flex 
                                            items-center text-[9px] md:text-[12px] p-1">
                                                {el.name}
                                            </div>
                                        </div>

                                        <div className="flex  items-end flex-col mt-[5px]">
                                            <div className="text-[12px] text-white sm:text-[15px] font-bold flex">
                                                Play &amp; Win&nbsp;&nbsp;
                                                <img className="w-[20px] object-contain" src="/coin.svg" alt="Coins" />
                                                &nbsp;10000
                                            </div>
                                        </div>

                                        <div className="flex items-end flex-col mt-[5px]">
                                            <span className="text-[12px] flex gap-1 sm:text-[15px] bg-[#30d158] bg-opacity-20 text-[#30d158] px-2 rounded-[5px]">Entry Fee &nbsp;
                                            <img className="w-[14px] object-contain" src="/coin.svg" alt="coin" />&nbsp;100
                                            </span>
                                        </div>
                                    </div>

                                    <div className='playbtn w-[20%]'>
                                        <img src="/play.svg" className='rounded-[50px]' alt="play"/>
                                    </div>                      
                                </div>
                                
                            </div>
                            </Link>
                              ))
                              : ""
                          }
                            {/* </Link>   */}
                        </div>                  
                    </div>               
            <Footer/>
            </div>
        </div>
    <Sideposter />   
    </div>
    </>
  )
}

export default Index