import React, {useEffect, useState} from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import {FetchQuiz} from './FetchApi'
import { useSearchParams } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import {useParams} from "react-router-dom";
import useCoins from '../../hooks/useCoins'
 
    const Joinnow = () => {
        let navigate = useNavigate(); 
        const [loggedin, setLoggedin] = useState();
    
        useEffect(()=>{
     
            setLoggedin(localStorage.getItem('isLoggedIn'));  
            console.log(typeof loggedin);

        },[loggedin])


        const { name } = useParams();
        const [QuizData, setQuizData] = useState({});
        const QueryName = name.replaceAll("-"," ");
        const { data, error, isError, isLoading } = useQuery(['data',QueryName ], () => FetchQuiz(QueryName));
        
        if(error){
            console.log(error);
        }

        useEffect(()=>{
            if(!isLoading){
                setQuizData(data.data[0]);     
            }
        
            
          },[data, isLoading])

        
        
        function PlayNow(){
        const ManageCoin = ()=>{
                useCoins("MINUS", QuizData.charges);
        }
        ManageCoin();
            navigate('/Quiz/'+name);
        }
    
    return (
    <>
    <div className='md:flex'>
    <div className='left-cotaniner 
    bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
    md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>                 
        <Header /> 
                <div className='leftcontent w-full'>
                    <div className='ads md:mt-[2rem] mt-[10px] flex justify-center'>
                        <img src="/ad440.png" alt="ad"/>
                    </div> 
                    <div className="my-5 md:mx-5 mx-3 mb-[250px] md:mb-[0px] 
                    flex flex-col gap-6 md:gap-2 border-2 border-[#404554] rounded-[30px] py-5">
                        <div className="flex gap-2 items-center px-5 ">
                        <img className="w-[60px] object-cover sm:w-[58px] rounded-full" src="/quiz1.png" alt="category" />
                        <div>
                        
                        </div>
                        
                        <div>
                            {(QuizData) ?  
                            <div className="text-[15px] font-bold sm:text-[13px] text-[#6063af]">
                               {QuizData.name}
                            </div>
                            : ""}
                            <div className="flex gap-1 text-[18px] font-black sm:text-[14px] text-white">
                                Play &amp; Win 
                                <img className="w-[20px] object-contain" src="/coin.svg" alt="Coin" /> 
                                10000
                                </div>
                            </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-around m-5">
                            
                        <div  onClick={PlayNow} className="md:w-[100%]  border-1 rounded-md">
                            <button className="py-2 bg-[#3957ea] md:py-2 px-14 md:px-7 
                            md:w-full text-sm text-white rounded-full border-[1px] border-solid border-[#3957ea]">
                                Play Now
                            </button>
                        </div>

                        {(loggedin === "true") ? 
                              ""        
                        :
                         <>
                        <div className="text-[20px] text-white mx-5 my-3">or</div>
                        
                        <div className=" self-center text-white 
                            border-text border-[1px] 
                            md:w-full text-center 
                            rounded-full font-bold text-sm py-2 md:px-4 px-10 cursor-pointer">
                            PLAY AS GUEST                           
                        </div> 
                        </>    }
                        
                        
                        
                    </div>
                        <div>
                        {(QuizData.instruction)?
                        
                       <div>


                        {/* <div className='text-white p-5' dangerouslySetInnerHTML={{__html: QuizData.instruction}}></div> */}
                       
                        <MarkdownPreview source={ QuizData.instruction}/>
                       </div>
                        :""}
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

export default Joinnow