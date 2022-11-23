import React, { useState, useEffect } from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import {FetchApi, FetchCatApi} from './FetchApi'
import env from "react-dotenv";
import useCoins from '../../hooks/useCoins'
import { Helmet } from 'react-helmet'
import Backendurl from '../Helper/Backendurl'
import { FetchsettingApi } from '../Components/FetchApi'


const Home = () => {   
   
    const [selectedCat, setSelectedCat] = useState("ALL");    
    const [quizData,  setQuizData] = useState();
    const [categoryData,  setcategoryData] = useState();    
    const { data, error, isError, isLoading } = useQuery('Quizdata', FetchApi);    
    const SettingData = useQuery('SettingData', FetchsettingApi);    
    const catData = useQuery('Catdata', FetchCatApi).data;
    const CatLoading = useQuery('Catdata', FetchCatApi).isLoading;  
    
    useEffect(()=>{
        localStorage.setItem('Reload',0);
    },[])

    const [PlayedData,  setPlayedData]  = useState([]);
    useEffect(()=>{
        const LocalPlayedQuizData = localStorage.getItem('LocalPlayedQuizData')
    if(LocalPlayedQuizData){
        const currentTime = new Date().toLocaleString();

        const data = JSON.parse(LocalPlayedQuizData);
        const eleName = [];
        data.forEach(element => {
            const then = new Date(element.date);
            const now = new Date();
            const msBetweenDates = Math.abs(then.getTime() - now.getTime());
            const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
            if (hoursBetweenDates < 24) {                
                eleName.push(element.name);               
            }
            setPlayedData(eleName);         
        });
    }
    
},[])



    const [path, setPath] = useState();    
    const dataBackendurl = useQuery('posts', Backendurl, {
        // enabled: false,
        staleTime: Infinity,
        cacheTime:Infinity
    }
    );  
    
   

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
    if(!isLoading){
        const beforefilter = data.data;
        const loggedin = localStorage.getItem('isLoggedIn');
        if(loggedin==="false")
        {            
            // const playedIds = JSON.parse(localStorage.getItem('playedquiz'));
            const playedIds = [];
            if(playedIds){
                const afterfilter = beforefilter.filter(function(item) {     
                    return !playedIds.includes(item.id);          
                });
                setQuizData(afterfilter); 
            }
            else{
                const afterfilter= beforefilter;
                setQuizData(afterfilter); 
            }                       
        }
        else{
            const afterfilter= beforefilter;
            setQuizData(afterfilter); 
        }                
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

      useEffect(()=>{
        if(document.querySelector('.quizBox404')){
        if(!document.querySelector('.quizlists .quizlist')){
            document.querySelector('.quizBox404').style.display="block";
        }else{
            
            document.querySelector('.quizBox404').style.display="none";

        }
    }
      },[selectedCat, isLoading, quizData]);


    const LocalSettingData = useQuery('LocalSettingData', Backendurl);
    const [pubid, setPubid] = useState(""); 
    const [adslot, setadslot] = useState(""); 
    const [adchannel, setadchannel] = useState(""); 
  
      useEffect(()=>{
          const { data, error, isError, isLoading } = LocalSettingData;   
          
          if(!isLoading){
          const settingjson =  data;      
          setPubid(settingjson.adclient);
          setadslot(settingjson.adslot);
          setadchannel(settingjson.adchannel); 
  
          }
            
      },[LocalSettingData]);

    useEffect(()=>{
        try {
            window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
          }
          catch(err) {
            console.log(err.message);
          }
    },[pubid])
   

  return (
    <>


    <div className='md:flex'>
        <div className='left-cotaniner 
        bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
        md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>
                
            <Header />

                <div className='leftcontent mt-[10%] w-full'> 
                
                    {(pubid) ? 
                        <div className='displayAds mt-[6%]'>
                            <ins
                                className="adsbygoogle"
                                style={{ display: "block" }}
                                data-ad-client={pubid}
                                data-ad-slot={adslot}
                                data-ad-channel={adchannel}
                                data-ad-format="auto"
                                data-full-width-responsive="true"
                            />

                        </div>
                    : ""}
              


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
                                        
                        {(CatLoading)?
                        <h2 className='text-white text-sm mt-2 m-3'>Loading Please Wait...</h2>
                        :""}  
                            <div className="flex">
                                <div onClick={singleCat} id="ALL" className="singleCat flex hover:bg-[#1a2f77] bg-[#1a2f77]  justify-center border-2 border-border rounded-full mx-2 px-2">
                                    <div className="flex-none px-2 mx-4 py-2 text-white">All</div>
                                </div>
                            </div>           
                        { (categoryData) ?
                            categoryData.map((el,index)=>(    
                                                             
                                <div key={index}  className="flex">                                
                                    <div  onClick={singleCat} id={el.name} 
                                    className="singleCat flex hover:bg-[#1a2f77]  justify-center border-2 border-border rounded-full mx-2 px-2">
                                        <div className="flex-none px-2 mx-4 py-2 text-white">{el.name}</div>
                                    </div>
                                </div>                                                
                            )):
                            ""
                            }
                        </div>                
                    </div>    
                    
                    <div className='quizlists pb-[100px]'>
                             
                        
                    {(isError) ?  "Error... " : "" }

                    {(isLoading)? 
                    <h2 className='text-white text-xl mt-2 m-3'>Loading Please Wait...</h2>
                    :

                        <div className='allquiz' >
                            {(quizData) ? quizData.map((el,index)=>(
                                     
                                (el.category===selectedCat || selectedCat==="ALL" && (!PlayedData.includes(el.name))) ? 
                                    <div id={"data-"+el.category.replaceAll(' ', '')} 
                                    data-for={el.category} 
                                    key={index} className='quizlist m-auto w-[90%]'> 
                                        <Link to={"/play/"+el.name.replaceAll(" ","-")}>                
                                            <div className='mt-5 flex flex-col 
                                            gap-2 w-full bg-primary border 
                                            border-border rounded-full py-2 cursor-pointer'>
                                                <div className='flex gap-2 items-center px-2 justify-between'>                        
                                                    <div className='quizthumb w-[20%]'>
                                                        {(path) ? 
                                                        <img src={path+"/images/"+el.image} 
                                                        className='rounded-[50px] 
                                                        md:w-[86px] md:h-[86px] w-[68px] h-[68px] object-contain bg-black' alt="quiz1"/>
                                                        : ""}
                                                        </div>                       
                    
                                                    <div className='flex flex-col justify-start w-[50%]'>
                                                        <div className="flex flex-col items-end  font-bold ">
                                                            <div className="px-2 rounded-[5px] text-[#007aff] max-h-[20px] py-[2px] flex bg-[#007aff] bg-opacity-20
                                                            items-center text-[9px] md:text-[12px] p-1">
                                                                {el.name}
                                                            </div>
                                                        </div>
                    
                                                        <div className="flex items-end flex-col  mt-[5px]">
                                                            <div className="text-[12px] text-white sm:text-[15px] font-bold flex">
                                                                Play &amp; Win&nbsp;&nbsp;
                                                                <img className="w-[20px] object-contain" src="/coin.svg" alt="Coins" />
                                                                &nbsp;{el.coins}
                                                            </div>
                                                        </div>
                    
                                                        <div className="flex items-end flex-col  mt-[5px]">
                                                            <span className="text-[12px] flex gap-1 sm:text-[15px] bg-[#30d158] bg-opacity-20 text-[#30d158] px-2 rounded-[5px]">Entry Fee &nbsp;
                                                            <img className="w-[14px] object-contain" src="/coin.svg" alt="coin" />&nbsp;
                                                            {el.charges}
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
                            <div className="quizBox404 my-5">
                                <img src="/404.png" className='w-[80%] m-auto' alt="404"/>
                                <h1 className='text-white text-xl mt-2 m-3 text-center'>Questions coming soon..</h1>
                            </div>
                        </div>   
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