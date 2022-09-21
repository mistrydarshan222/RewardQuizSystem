import React from 'react'
import Sideposter from '../Components/layout/Sideposter'


const Firstquestion = () => {
  return (
    <>   
        <div className="md:flex">     
        <div className='left-cotaniner py-3  px-3 items-center 
        max-w-[500px] bg-[#111827] 
        overflow-x-hidden h-screen w-full  
        relative overflow-y-auto'>    

                    <div className='ads my-5 md:mt-[2rem] mt-4 flex justify-center'>
                        <img src="/ad440.png" />
                    </div>

                    <div className='letsbegin my-3  mt-4 flex flex-col items-center font-bold text-[18px] text-white'>
                        Let's begin!
                        <div className="flex text-[12px] text-[#8789c3]">
                            Answer 3 questions and win 💰 150 free!
                        </div>
                    </div>

                    <div className="questionlist mt-4 my-1 text-white font-bold flex items-center justify-center">
                        Question 1
                        <span className="text-[13px]">/3</span>
                    </div>

                    <div className="questions my-2 text-white text-lg font-bold px-10 text-center">
                        Hitler party which came into power in 1933 is known as?
                    </div>

                    <div className="options my-4 grid grid-cols-2 gap-3 px-3 min-w-full ">
                        <div className="text-white flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                            Labour Party
                        </div>
                        
                        <div className="text-white flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                            Nazi Party
                        </div>
                        
                        <div className="text-white flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                            Ku-Klux-Klan
                        </div>
                        
                        <div className="text-white flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                            German Congress
                        </div>
                    </div>

                    <div className='signup-login mt-8 my-4'>
                        <div className="text-[#ffcc5b] font-bold text-center">Sign-Up - Login</div>
                    </div>

                    <div className='notice mt-6'>
                        <div className="pl-5">
                            <div className="font-bold text-lg text-white">Play Quiz and Win Coins!</div>
                            <ul className="text-[#8789c3] text-[14px] list-disc my-3 px-4">
                                <li className="mb-2"> 
                                    Play Quizzes in 25+ categories like GK, Sports, Bollywood, Business, Cricket &amp; more! 
                                </li>
                                <li className="mb-2"> Compete with lakhs of other players!</li>
                                <li className="mb-2"> Win coins for every game </li>
                                <li className="mb-2"> Trusted by millions of other quiz enthusiasts like YOU! </li>
                            </ul>
                        </div>
                    </div>

                
        </div>
        <Sideposter />
        </div>    
    </>
  )
}

export default Firstquestion