import React from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'





const Reward = () => {




  
    return (
    <div className="md:flex">
     
        <div className='left-cotaniner 
        bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
        md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>      
            <Header /> 
               
            <div class="products mt-10 p-4 m-auto max-w-sm bg-white 
            flex flex-wrap rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">  
                <img class="m-auto w-[50%] h-[50%] rounded-t-lg" src="/ad440.png" alt="k" /> 
                
                <h5 class="m-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   Amazon 5$ Coupen</h5>
                <p class="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order
                    </p>
                <div class="m-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#111827] rounded-lg focus:ring-4 focus:outline-none focus:bg-[rgb(4,59,58)] dark:bg-[#134544] dark:hover:bg-[#134544]">
                    Buy Now
                    {/* <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </div>
            </div>  
                  


            <Footer />
        </div>
        <Sideposter />
    </div>
  )
}

export default Reward
