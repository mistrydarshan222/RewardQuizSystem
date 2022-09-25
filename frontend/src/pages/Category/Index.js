import React from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import { useQuery } from 'react-query'
import Footer from '../Components/layout/Footer'
import FetchApi from './FetchApi'
import env from "react-dotenv";
import { Link } from 'react-router-dom'

const Category = () => {


    const { data, error, isError, isLoading } = useQuery('data', FetchApi);



// if (isLoading) {
//         return <div>Loading...</div>
//     }
    // if (isError) {
    //     return <div>Error! {error.message}</div>
    // }
 

  return (

    <>
    <div className='md:flex'>

        <div className='left-cotaniner  bg-[#111827] overflow-x-hidden h-screen max-w-[500px] w-full overflow-y-auto'>            
        <Header />

        <div className='Catcontainer w-[100%] px-3'>

                <div className='ads md:mt-[2rem] mt-[10px] flex justify-center'>
                    <img src="/ad440.png" />
                </div>

                <div className='categoryseach mt-4 flex'>
                    <span className='text-white text-xl m-auto'>
                    Select the Quiz category that you want to play
                    </span>
                </div>

                <div className='mt-4'>
                <div className="border-2 border-white rounded-full px-4 py-3 flex gap-2">
                        <img src="/Search.svg" alt="search" />
                        <input className="bg-transparent text-lg outline-none w-full text-white" type="text" placeholder="Search Quiz Category" />
                    </div>
                </div>

                <div className='mt-4 grid grid-cols-2 gap-3'>
                    {(isLoading)?"Loading...":""}               
                    {(isError)?  "Error... " :""}               

                    { (!isLoading) ? 
                        data.data.map((el,index)=>(
                        <div  key={index} >
                       {(el.name) ? 
                        <Link to={"/quizzes/" + el.name.replace(" ", "-")}>
                            <div
                            className="flex gap-1 items-center border-[1px] border-white rounded-full p-2 cursor-pointer">
                                <img className="w-[50px] h-[50px] rounded-full" src={process.env.REACT_APP_BACKEND_URL+"/images/"+el.image} alt="category" />
                                <span className="w-full text-center text-sm text-white">{el.name} </span>
                            </div>
                        </Link>
                        : ""}
                    </div>
                    

                        ))
                        : ""
                    }
              
                    
                    

                </div>
        </div>


        <Footer />
    </div>
    
    <Sideposter />
    </div>
    </>
  )
}

export default Category