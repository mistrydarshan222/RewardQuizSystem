import React from 'react'

const Sideposter = () => {
  return (
    <>    
        <div className='hidden w-full  max-h-screen md:flex flex-col justify-center items-center gap-6 text-white border-[#e0e0e0] 
        bg-gradient-to-r from-[#111827] to-teal-900  
        object-cover bg-no-repeat bg-center h-screen'>
            <div className='hidden max-h-screen md:flex flex-col 
            justify-end items-center bg-center gap-6 text-white border-[#e0e0e0] 
             object-cover bg-no-repeat h-screen'>
                <img src='/sidebarposter.png' className='w-[80%] h-[80%] mr-[100px]' alt="sidebarposter"/>
                <div className="text-[30px] flex mb-10 text-white"> 
                    Play Quiz,  
                    <h1 className="text-[30px] font-bold text-white"> 
                     Win Coins! 
                    </h1> 
                </div>
            </div> 
            
        </div>
           
    </>  
  )
}

export default Sideposter;