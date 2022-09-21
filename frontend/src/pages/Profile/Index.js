import React from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'

const Profile = () => {
  return (
    <>
    <div className='md:flex'>

    <div className='left-cotaniner max-w-[500px] bg-[#111827] overflow-x-hidden h-screen w-full  relative overflow-y-auto'>
        <Header /> 

        <div className='profilecontainer pt-10 pb-20 w-full flex justify-center items-center flex-col gap-7'>

            <div className='usericon'>
                <div className="flex justify-center w-full gap-10">
                    <div className="w-32 h-32 bg-[#1F2937] rounded-full flex justify-center items-center">
                        <img className="h-30 border-1 border-white border-solid" src="/user.png" alt="Usericon" />
                    </div>
                    <div className="flex gap-1 flex-col items-center justify-center">
                        <div className="text-3xl text-white">User X</div>
                        <div className="text-sm text-white">Number not updated</div>
                        <div className="text-sm text-white">Email not updated</div>
                    </div>
                </div>
            </div>

            <div className='btns flex gap-10'>
                <div className="coinsbtn w-[150px]
                py-2 px-4 rounded-full
                flex justify-between items-center bg-orange-500 border-2">
                    <div className="text-sm text-white">Coins</div>
                    <div className="text-lg text-white">-175</div>
                </div>

                <div className="quizplydbtn w-[150px]
                py-2 px-4 rounded-full
                flex justify-between items-center bg-black border-2">
                    <div className="text-sm text-white">Quiz Played</div>
                    <div className="text-lg text-white">95</div>
                </div>
            </div>   

            <div className='joinnowbtn'>
                <div className="quizplydbtn w-[150px]
                    py-2 px-4 rounded-full
                    flex justify-between items-center bg-[#3957ea] border-2">
                    <div className="text-xl text-white m-auto">Join Now</div>                        
                </div>
            </div>        

            

            <div className='ads mt-[20px]'>
                <img src="/ad440.png" className='w-[100%] m-auto text-center' />
            </div>



        </div>                      
    
        

    <Footer />
    </div>

    <Sideposter />  
    </div>
    </>
  )
}

export default Profile