import React from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import { useQuery } from 'react-query'
import { useState, useEffect } from 'react'
import Footer from '../Components/layout/Footer'
import FetchApi from './FetchApi'
import { Link } from 'react-router-dom'
import Backendurl from '../Helper/Backendurl'
import { FetchsettingApi } from '../Components/FetchApi'

import { Helmet } from 'react-helmet'

const Category = () => {

    const { data, error, isError, isLoading } = useQuery('data', FetchApi);
    const [path, setPath] = useState();

    const dataBackendurl = useQuery('posts', Backendurl, {
        // enabled: false,
        staleTime: Infinity,
        cacheTime:Infinity
    }
    );   

    const SettingData = useQuery('SettingData', FetchsettingApi);
    const [pubid, setPubid] = useState(""); 
    useEffect(()=>{
        const { data, error, isError, isLoading } = SettingData;    
        if(!isLoading){            
            setPubid(data.data[0].publisherid);       
        }        
    },[SettingData]);

    useEffect(()=>{
        async function localPath() {            
            const { data, error, isError, isLoading } = dataBackendurl
            if(data){                
                setPath(data.backend_url);  
            }
          }
          localPath();
      },[dataBackendurl, path]);

    useEffect(()=>{
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    },[])



// if (isLoading) {
//         return <div>Loading...</div>
//     }
    // if (isError) {
    //     return <div>Error! {error.message}</div>
    // }
 

  return (

    
    <>
    <div className='md:flex'>

        <div className='left-cotaniner 
        bg-[#111827] overflow-x-hidden h-screen overflow-y-auto md:max-w-[500px] 
        md:w-[500px] min-w-[360px] w-full xs:w-full'>            
        <Header />

        <div className='leftcontent mt-[10%] Catcontainer w-[100%] px-3 pb-[150px]'>

                <div className='displayAds mt-[12%]'>
                    <ins
                        className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-2839576897921974"
                        data-ad-slot="4974853520"
                        data-ad-channel="9452659743"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />

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
                    {(isLoading)?
                    <h2 className='text-white text-xl mt-2 m-3'>Loading Please Wait...</h2>
                    :""}               
                    {(isError)?  "Error... " :""}               

                    { (!isLoading) ? 
                        data.data.map((el,index)=>(
                        <div key={index} >
                       {(el.name) ? 
                        <Link to={"/quizzes/" + el.name.replace(" ", "-")}>
                            <div
                            className="flex gap-1 items-center border-[1px] border-white rounded-full p-2 cursor-pointer">
                                <img className="w-[50px] h-[50px] rounded-full" 
                                src={path+"/images/"+el.image} alt="category" />
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