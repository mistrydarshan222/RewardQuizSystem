import React, { useState, useEffect } from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import {FetchApi, FetchCatApi} from './FetchApi'
import env from "react-dotenv";
import useCoins from '../../hooks/useCoins'

const Home = () => {
    
    // useEffect(()=>{
    //     const SetCoin = ()=>{
    // const  tempvar = useCoins("ADD", 100);
    // console.log(tempvar);
    //     }
    //     SetCoin();
    // },[])

   
    const [selectedCat, setSelectedCat] = useState("ALL");
    const [quizData,  setQuizData] = useState();
    const [categoryData,  setcategoryData] = useState();
    
    const { data, error, isError, isLoading } = useQuery('Quizdata', FetchApi);  

    const catData = useQuery('Catdata', FetchCatApi).data;
    const CatLoading = useQuery('Catdata', FetchCatApi).isLoading;
    

    
  useEffect(()=>{
    if(!isLoading){
        setQuizData(data.data);         
    }
    if(!CatLoading){
        setcategoryData(catData.data);
    }
    
  },[data, catData])


    function catSliderLeft(){
        const left = document.querySelector(".catslider");
        left.scrollBy(-300, 0);
    }
    function catSliderRight() {
        const right = document.querySelector(".catslider");
        right.scrollBy(300, 0);
      }

      function singleCat(e){
        const singleCatDOM  = document.querySelectorAll('.singleCat');
        
        singleCatDOM.forEach(element => {
            element.classList.remove('bg-[#1a2f77]');
        });
        e.currentTarget.classList.add('bg-[#1a2f77]');
        setSelectedCat(e.currentTarget.id);
      }
  return (
    <>
    <div className='md:flex'>

    <div className='left-cotaniner max-w-[500px] bg-[#111827] overflow-x-hidden h-screen w-full  relative overflow-y-auto'>
            
        <Header /> 

            <div className='leftcontent w-full'> 
                <div className='ads md:mt-[2rem] mt-[10px] flex justify-center'>
                    <img src="/ad440.png" alt="ad" />
                </div> 

                <div className='slidercat mx-8'>
                    
                    <div className='sliderbtn flex justify-between'>
                        <button className='leftbtn relative top-[70px] left-[-25px]'  onClick={catSliderLeft} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" 
                                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button className='rightbtn relative top-[70px] right-[-35px]'  onClick={catSliderRight} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="White" 
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className='catslider mt-10 flex justify-between text-xs pb-5 
                    w-full overflow-x-auto scroll-smooth scrollhide 
                    border-b border-white border-solid'>   
                                      
                    {(CatLoading)?"Loading...":""}  
                            <div className="flex">
                            <div onClick={singleCat} id="ALL" className="singleCat flex hover:bg-[#1a2f77] bg-[#1a2f77]  justify-center border-2 border-border rounded-full mx-2 px-2">
                                <div className="flex-none px-2 mx-4 py-2 text-white">All</div>
                            </div>
                            </div>           
                     { (categoryData) ?  

                    categoryData.map((el,index)=>( 

                            
                            <div className="flex">                                
                                <div key={index} onClick={singleCat} id={el.name} className="singleCat flex hover:bg-[#1a2f77]  justify-center border-2 border-border rounded-full mx-2 px-2">
                                    <div className="flex-none px-2 mx-4 py-2 text-white">{el.name}</div>
                                </div>
                            </div>                                                
                        )):""}
                    </div>                
                </div>    
                
                <div className='quizlists pb-[100px]'>

                {(isLoading)?"Loading...":""}               
                    {(isError)?  "Error... " :""}               

                    { (quizData) ? 
                        quizData.map((el,index)=>( 

                            (el.category===selectedCat || selectedCat==="ALL" ) ? 

                            <div  key={index} className='quizlist m-auto w-[90%]'> 
                            <Link to={"/play/"+el.name.replaceAll(" ","-")}>                
                            <div className='mt-5 flex flex-col gap-2 w-full bg-primary border border-border rounded-full py-2 cursor-pointer'>
                                <div className='flex gap-2 items-center px-2 justify-between'>                        
                                    <div className='quizthumb w-[20%]'>
                                        <img src="/quiz1.png" className='rounded-[50px]' alt="quiz1"/>
                                    </div>                       
    
                                    <div className='flex flex-col justify-start'>
                                        <div className="flex flex-col items-end font-bold bg-[#007aff] bg-opacity-20">
                                            <div className="px-2 rounded-[5px] text-[#007aff] max-h-[20px] py-[2px] flex 
                                            items-center text-[9px] md:text-[12px] p-1">
                                                {el.name}
                                            </div>
                                        </div>
    
                                        <div className="flex  items-end flex-col mt-[5px]">
                                            <div className="text-[12px] text-white sm:text-[15px] font-bold flex">
                                                Play &amp; Win&nbsp;&nbsp;
                                                <img className="w-[20px] object-contain" src="/coin.svg" alt="Coins" />
                                                &nbsp;10000
                                            </div>
                                        </div>
    
                                        <div className="flex items-end flex-col mt-[5px]">
                                            <span className="text-[12px] flex gap-1 sm:text-[15px] bg-[#30d158] bg-opacity-20 text-[#30d158] px-2 rounded-[5px]">Entry Fee &nbsp;
                                            <img className="w-[14px] object-contain" src="/coin.svg" alt="coin" />&nbsp;100
                                            </span>
                                        </div>
                                    </div>
    
                                    <div className='playbtn w-[20%]'>
                                        <img src="/play.svg" className='rounded-[50px]' alt="play"/>
                                    </div>                      
                                </div>
                            </div>
                            </Link>  
                        </div>
                      :""


                        )) :""
                        }

                   
                </div>               
        <Footer/>
        </div>
    </div>

    <Sideposter />   
    </div>
    </>
    
  )
}

export default Home