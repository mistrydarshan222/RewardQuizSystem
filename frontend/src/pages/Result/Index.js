import React from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'

const Result = () => {
  return (
    <>
    
    <div className="md:flex">
     
    <div className='left-cotaniner py-3 px-2 items-center 
    max-w-[500px] bg-[#111827] 
    overflow-x-hidden h-screen w-full  
    relative scroll-smooth'>   

                         
    
          <div className='ads mt-[40px]'>
            <img src="/ad440.png" className='w-[50%] m-auto' />
          </div>

          <div className="m-auto mt-2 flex justify-center items-center relative w-[200px]">
              <img src="/winning.gif"
              className='h-[200px] absolute top-[-10px]' 
              alt="logo"/>
            <h1 className="text-white text-4xl">Well Played</h1>
          </div>

          <div className="flex justify-evenly mt-20 gap-2 w-full">
            <div className="flex flex-col gap-2 bg-[#0E1344] border rounded-full py-2 cursor-pointer w-48">
              <div className="text-white text-center flex flex-col ">
                <span>75</span>
                <span>Your Score</span>
                </div>
              </div>
            <div className="flex flex-col gap-2 bg-[#0E1344] border rounded-full py-2 cursor-pointer w-48">
              <div className="text-white text-center flex flex-col ">
                <span>500</span>
                <span> Coins Earned</span>
                </div>
              </div>
          </div>

          <div className="mt-4">
            <button className="text-white m-auto flex gap-2 rounded-full px-7 py-2 border-2 border-[#1a2f77]">
              Double Your winnings
              <img src="/coin.svg" alt="coin" />
            </button>
          </div>          

          <div className='mt-5 separator'>
          </div>

          <div className="mt-5 flex justify-center">
            <button className="text-white flex 
            gap-2 rounded-full px-7 py-2 border-2 border-[#1a2f77] bg-[#1a2f77]">
                 Home
            </button>
          </div>

          <div className="mt-4 flex justify-center">
              <span className='text-lg text-white'>Play More Quizzes</span>
          </div>

          <div className='relatedquiz pb-[50px] '>
                <div className='quizlist flex justify-center'>                    
                    <div className='mt-5 flex flex-col  bg-primary border border-border rounded-full py-2 cursor-pointer w-[300px]'>
                        <div className='flex gap-2 items-center px-2 justify-between'>                        
                            <div className='quizthumb w-[20%]'>
                                <img src="/quiz1.png" className='rounded-[50px]'/>
                            </div>                       

                            <div className='flex flex-col justify-start'>
                                <div className="flex flex-col items-end font-bold bg-[#007aff] bg-opacity-20">
                                    <div className="px-2 rounded-[5px] text-[#007aff] max-h-[20px] py-[2px] flex items-center text-[10px] md:text-[8px] sm:text-[12px] p-1">
                                    Food Brands
                                    </div>
                                </div>

                                <div className="flex items-end flex-col mt-[5px]">
                                    <div className="text-[15px] text-white sm:text-[10px] font-bold flex">
                                        Play &amp; Win&nbsp;&nbsp;
                                        <img className="w-[20px] object-contain" src="/coin.svg" alt="Coins" />                                        
                                    </div>
                                </div>

                                <div className="flex items-end flex-col mt-[5px]">
                                    <span className="text-[15px] flex gap-1 
                                    sm:text-[10px]  bg-opacity-20 text-[#30d158] px-2 rounded-[5px]">Entry Fee
                                    <img className="w-[14px] object-contain" src="/coin.svg" />
                                    </span>
                                </div>
                            </div>

                            <div className='playbtn w-[20%]'>
                                <img src="/play.svg" className='rounded-[50px]'/>
                            </div>                      
                        </div>
                    </div>

                                
                </div> 
                <div className='quizlist flex justify-center'>                    
                    <div className='mt-5 flex flex-col  bg-primary border border-border rounded-full py-2 cursor-pointer w-[300px]'>
                        <div className='flex gap-2 items-center px-2 justify-between'>                        
                            <div className='quizthumb w-[20%]'>
                                <img src="/quiz1.png" className='rounded-[50px]'/>
                            </div>                       

                            <div className='flex flex-col justify-start'>
                                <div className="flex flex-col items-end font-bold bg-[#007aff] bg-opacity-20">
                                    <div className="px-2 rounded-[5px] text-[#007aff] max-h-[20px] py-[2px] flex items-center text-[10px] md:text-[8px] sm:text-[12px] p-1">
                                    Food Brands
                                    </div>
                                </div>

                                <div className="flex items-end flex-col mt-[5px]">
                                    <div className="text-[15px] text-white sm:text-[10px] font-bold flex">
                                        Play &amp; Win&nbsp;&nbsp;
                                        <img className="w-[20px] object-contain" src="/coin.svg" alt="Coins" />                                        
                                    </div>
                                </div>

                                <div className="flex items-end flex-col mt-[5px]">
                                    <span className="text-[15px] flex gap-1 
                                    sm:text-[10px]  bg-opacity-20 text-[#30d158] px-2 rounded-[5px]">Entry Fee
                                    <img className="w-[14px] object-contain" src="/coin.svg" />
                                    </span>
                                </div>
                            </div>

                            <div className='playbtn w-[20%]'>
                                <img src="/play.svg" className='rounded-[50px]'/>
                            </div>                      
                        </div>
                    </div>

                                
                </div>                  
          </div>

    
    </div>
    <Sideposter />  
    </div>
    </>
  )
}

export default Result