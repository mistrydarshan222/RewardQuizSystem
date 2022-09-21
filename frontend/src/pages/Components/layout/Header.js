import React from 'react'

const Header = () => {
  return (
    <div className='header flex item-center items-center justify-between mb-10 w-full mt-3 mx-2'>

        <div className='logo'>
            <img src="/quizlogo.png" className='w-[100px] h-[30px] flex item-center' />
        </div>

        <div className='rightheader flex items-center ml-10'>

            <div className='dailyreward flex item-center w-full'>
                <img src="/reward.gif" className='w-[25px]' />
                <div className="flex items-center text-white text-[12px]">Daily Reward</div>
            </div>

            <div className='coinbalance flex item-center'>
                <div className="flex gap-1 items-center bg-[#1a2f77] px-4 py-1 rounded-md mx-5">
                        <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.8 10C26.8 15.5228 22.3228 20 16.8 20C11.2772 20 6.8 15.5228 6.8 10C6.8 4.47715 11.2772 0 16.8 0C22.3228 0 26.8 4.47715 26.8 10ZM9.3 10C9.3 14.1421 12.6579 17.5 16.8 17.5C20.9421 17.5 24.3 14.1421 24.3 10C24.3 5.85786 20.9421 2.5 16.8 2.5C12.6579 2.5 9.3 5.85786 9.3 10Z" fill="#ff9933"/>
                        <path d="M10 0C7.34783 -3.16267e-08 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 2.3186e-07 7.34783 0 10C-2.3186e-07 12.6522 1.05357 15.1957 2.92893 17.0711C4.80429 18.9464 7.34783 20 10 20V17.5C8.01087 17.5 6.10322 16.7098 4.6967 15.3033C3.29018 13.8968 2.5 11.9891 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5V0Z" fill="#ff9933"/>
                        </svg>
                        <div className="flex gap-1 text-xs">
                            <div className="font-bold text-[12px] text-white"> 100 </div>
                            <div className="text-[10px] text-white">COINS</div>
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header