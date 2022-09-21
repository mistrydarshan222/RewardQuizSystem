import React, { useEffect, useState } from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { useQuery } from 'react-query'
import {FetchQue, FetchQuiz} from './FetchApi'
import { useParams} from "react-router-dom";



const Questions = () => {
    
    const { name } = useParams();
    const QueryName = name.replaceAll("-"," ");
    const [currentData, setCurrentData] = useState("");
    const [currentPOS, setcurrentPOS] = useState(0);
    const [currentScore, setcurrentScore] = useState(0);
    const { data, error, isError, isLoading } = useQuery(['data', QueryName], () => FetchQue(QueryName));
    const  Quizdata = useQuery(['Quizdata', QueryName], () => FetchQuiz(QueryName)).data;
    const  QuizisLoading = useQuery(['Quizdata', QueryName], () => FetchQuiz(QueryName)).isLoading;

   
    useEffect(()=>{ 
        if(!isLoading){
            const QueData = data.data;
            
            if(QueData.length  > 1 ){
                console.log(QueData[currentPOS])
                setCurrentData(QueData[currentPOS]);
            }
          }
        },[currentPOS, isLoading])



    if(isLoading){
       
        return "demo";
      }

      if(error){
        console.log(error);
    }

    
    
   
    // setCurrentData(QueData);


function NextQuiz(option){
        console.log(option);
        const QueData = data.data;     

    // check ANS

    const AllBTN =  document.querySelectorAll(`.optionBtn`);
    const correct =  QueData[currentPOS].correct
    const QUeLen = QueData.length;
        const TotalCoins = Quizdata.data[0].coins;

        const CoinsPerQue = (TotalCoins/QUeLen);

        console.log(CoinsPerQue);
   



    document.querySelector(`#${correct}`).style.backgroundColor = "Black";
        if( option !== correct){
            document.querySelector(`#${option}`).style.backgroundColor = "red";  
            setcurrentScore(currentScore-CoinsPerQue);
        }
        else{
            setcurrentScore(currentScore+CoinsPerQue);
        }  
            var delayInMilliseconds = 1000; //1 second
            setTimeout(function() {

        if(currentPOS < (QUeLen-1) ){
                AllBTN.forEach(element => {
                    element.style.backgroundColor = "transparent";
                });
                //your code to be executed after 1 second
                setcurrentPOS(currentPOS+1);
        }
        }, delayInMilliseconds);      
    }



  return (
    <>
    <div className="md:flex">
     
    <div className='left-cotaniner py-3 px-2 items-center 
    max-w-[500px] bg-[#111827] 
    overflow-x-hidden h-screen w-full  
    relative scroll-smooth'>                 
    <Header /> 
        
        
        <div className="leftcontent w-full">
            <div className='px-5 pt-12 py-5'>
                <div className="gap-2 flex items-center px-5">
                    <img className="w-[60px] object-cover sm:w-[58px] rounded-lg" src="/quiz1.png" alt="active" />
                <div>
                <div className="text-[12px] text-[#6063af] text-text_hd font-black sm:text-[12px]">
                    Noun-Pronoun 
                </div>
                <div className="flex gap-1 text-[18px] font-black sm:text-[14px] text-white">Play &amp; Win 
                    <img className="w-[20px] object-contain" src="/coin.svg" alt="Play" /> 10000 </div>
                </div>
                </div>

                <div className=" text-[#bac8ff] font-bold">
                    Question 1 
                    <span className="text-[13px] text-[#bac8ff]">/15</span>
                </div>
                
                <div className="flex gap-2 items-center w-full">
                    <div id="timer">
                        <div id="mytimer"/>
                    </div>

                    <div className="flex flex-col gap-1 items-center justify-center text-[10px] 
                    w-20 font-bold text-white">                        
                        <span className="text-lg text-white">115</span>
                        <div> SEC LEFT </div>
                    </div>
                </div>


            <div className='queContainer ' id="queContainer">

            {(currentData) ? 
               <>
                <div className="mt-4 text-lg font-bold px-10 text-center text-white">
                    
                   
                    <h2 id="que">{currentData.que}</h2>                
                </div>
                <div className="grid grid-cols-2 gap-3 px-3 min-w-full my-4">
                <div onClick={()=>(NextQuiz("A"))} id="A" className="optionBtn flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                    <div className=" flex justify-center items-center text-center shrink-0 w-full" style={{display: 'block'}}>
                    <div className="p-2 text-sm w-full">
                        <div className="flex justify-center gap-2 text-white">
                        <h1>A. </h1> {currentData.option1}
                        </div>
                    </div>
                    </div>
                </div>
                <div onClick={()=>(NextQuiz("B"))} id="B" className="optionBtn flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                    <div className=" flex justify-center items-center text-center shrink-0 w-full" style={{display: 'block'}}>
                    <div className="p-2 text-sm w-full">
                        <div className="flex justify-center gap-2 text-white">
                        <h1>B. </h1> {currentData.option2}
                        </div>
                    </div>
                    </div>
                </div>
                <div onClick={()=>(NextQuiz("C"))} id="C" className="optionBtn flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                    <div className=" flex justify-center items-center text-center shrink-0 w-full" style={{display: 'block'}}>
                    <div className="p-2 text-sm w-full">
                        <div className="flex justify-center gap-2 text-white">
                        <h1>C. </h1> {currentData.option3}
                        </div>
                    </div>
                    </div>
                </div>
                <div onClick={()=>(NextQuiz("D"))} id="D" className="optionBtn flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                    <div className=" flex justify-center items-center text-center shrink-0 w-full" style={{display: 'block'}}>
                    <div className="p-2 text-sm w-full">
                        <div className="flex justify-center gap-2 text-white">
                        <h1>D. </h1> {currentData.option4}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </>
              
              :
             ""
          }

               </div>
                               
                
                
                <div className="flex text-white pb-[55px] justify-center items-center gap-1 text-lg font-bold mb-[10rem]">
                    Your Score : <span className="text-[#ffcc5b]"> {currentScore} </span>
                </div>                
            </div>
            
           

          

     
        <div className='bg-[#191A32] border-t-2 border-white border-solid mt-4 left-0
            h-[160px] bottom-[7%] 
            fixed w-[100%] gap-8 md:gap-10 
            max-w-[500px] md:w-[35%] p-2 md:p-5 pb-10 pt-8'>

        <div className="absolute bottom-[90%] w-[100px] left-0 right-0 m-auto  border-border 
            border-[1px] rounded-full px-3 py-2 flex gap-2  
                bg-[#191A32] 
            text-sm cursor-pointer">
            <svg className="h-[1em] w-[1em]" 
            focusable="false" fill="blue" aria-hidden="true" viewBox="0 0 24 24" 
            data-testid="FavoriteIcon">
            <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 
            3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
            </path>
            </svg>
            <span className='text-white'> Lifelines </span>
        </div>

        <div className='flex justify-around'>

                <div className="flex flex-col gap-1 justify-center items-center">
                    <div className="h-[60px] w-[60px] border-solid 
                    border-[1px] border-white text-[#ffcc5b]
                    rounded-[100px] flex justify-center items-center ">
                        50:50
                    </div>
                    <div className='text-[10px] md:text-[15px] text-white'>50:50</div>
                </div>

                <div className="flex flex-col gap-1 justify-center items-center">
                    <div className="h-[60px] w-[60px] border-solid
                    border-[1px] border-white text-white 
                    rounded-[100px] flex justify-center items-center ">
                        <img src="/audience.svg" alt="audience poll" />
                    </div>
                    <div className='text-[10px] md:text-[15px] text-white'>Audience poll</div>
                </div>

                <div className="flex flex-col gap-1 justify-center items-center">
                    <div className="h-[60px] w-[60px] border-solid
                    border-[1px] border-white text-white  
                    rounded-[100px] flex justify-center items-center ">
                        <img src="/time.svg" alt="time" />
                    </div>
                    <div className='text-[10px] md:text-[15px] text-white'>Freeze Timer</div>
                </div>

                <div className="flex flex-col gap-1 justify-center items-center">
                    <div className="h-[60px] w-[60px] 
                    border-[1px] border-white text-white border-solid
                    rounded-[100px] flex justify-center items-center ">
                        <img src="/flip.svg" alt="flip" />
                    </div>
                    <div className='text-[10px] md:text-[15px] text-white'>Flip Question</div>
                </div>
    </div>

            </div>
        </div>


    <Footer/>
    </div>
    <Sideposter /> 
    </div>
    </>
  )
}

export default Questions