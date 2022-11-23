import React, { useState, useEffect } from 'react'
import Sideposter from '../Components/layout/Sideposter'
import {FetchfeaturedQue} from './FetchApi'
import { useNavigate } from "react-router-dom";
import useCoins from '../../hooks/useCoins'
import { Link } from 'react-router-dom'
import { FetchsettingApi } from '../Components/FetchApi'
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useQuery } from 'react-query'
import Backendurl from '../Helper/Backendurl'

const Firstquestion = () => {

    
    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
            end = dc.length;
            }
        }
        // because unescape has been deprecated, replaced with decodeURI
        //return unescape(dc.substring(begin + prefix.length, end));
        return decodeURI(dc.substring(begin + prefix.length, end));
    } 
    
    useEffect(()=>{
        localStorage.setItem('Reload',0);
    },[])
  


    let navigate = useNavigate(); 
    const { data, error, isError, isLoading } = useQuery('data', FetchfeaturedQue);



    
    const [featuredque, setFeaturedque] =useState("");
    const [alldata, setAlldata] =useState();
    const [currentPOS, setcurrentPOS] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [instruction, setinstruction] = useState("");


    useEffect(()=>{
      
        const myCookie = getCookie("quizinit")
        

        if (myCookie !== null) {
            navigate('/home');

        }
    

    },[])


    const SettingData = useQuery('SettingData', FetchsettingApi);

    
    
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

    // {(pubid) ? 
    //     <div className='displayAds mt-[6%]'>
    //         <ins
    //             className="adsbygoogle"
    //             style={{ display: "block" }}
    //             data-ad-client={pubid}
    //             data-ad-slot={adslot}
    //             data-ad-channel={adchannel}
    //             data-ad-format="auto"
    //             data-full-width-responsive="true"
    //         />

    //     </div>
    //     : ""}
    
    useEffect(()=>{        
        const { data, error, isError, isLoading } = SettingData;    
        if(!isLoading){
            setinstruction(data.data[0].Firstpageinstructions); 
                   
        }        
    },[SettingData]);

    useEffect(()=>{ 
        
        if(!isLoading){
            const QueData = data.data; 
            setAlldata(QueData); 
            if(QueData.length  > 1 ){ 
                setFeaturedque(QueData[currentPOS])
            }   
        }
        },[data, currentPOS]);
        

    function NextQuiz(option){        
        const QueData = data.data;
        const AllBTN =  document.querySelectorAll(`.optionBtn`);
        const correct =  QueData[currentPOS].correct;
        const QUeLen = QueData.length;

         document.querySelector(`#${correct}`).style.backgroundColor = "green";   
        if( option !== correct){
            document.querySelector(`#${option}`).style.backgroundColor = "red";  
        }
        var delayInMilliseconds = 1000; //1 second
        setTimeout(function() {
            if(currentPOS < (QUeLen-1) ){
                    AllBTN.forEach(element => {
                        element.style.backgroundColor = "transparent";
                    });
                  
                    setcurrentPOS(currentPOS+1);
            }else{
                setIsCompleted(true);
                
            }
            }, delayInMilliseconds); 
    }

    const [loggedin, setLoggedin] = useState(false);

    useEffect(() => {
        setLoggedin(localStorage.getItem('isLoggedIn'));  
    }, [loggedin])
   
    useEffect(()=>{
        if(isCompleted){
            const ManageCoin = async ()=>{             
            useCoins("ADD", 100);
            }    
            document.cookie = `quizinit=1;max-age=86400;domain=${window.location.hostname}` 
            ManageCoin();        
            navigate('/Start-quiz');
        }
    },[isCompleted]);
    
    useEffect(()=>{
        try {
            window.adsbygoogle = window.adsbygoogle || []
            window.adsbygoogle.push({})
          }
          catch(err) {
           console.log(err.message);
          }       
    },[pubid])

    // if(isLoading){       
    //         return "Loading Please Wait...";
    // }
    

return (
    
    <>
    
        <div className="md:flex">     
        <div className='left-cotaniner 
        bg-[#111827] overflow-x-hidden h-screen 
        md:max-w-[500px] md:w-[500px] min-w-[360px] w-full  xs:w-full 
        relative overflow-y-auto pb-[100px]'>
            
                
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

                <div className='letsbegin my-3  mt-4 flex flex-col items-center font-bold text-[18px] text-white'>
                    Let's begin!
                    <div className="flex text-[12px] text-[#8789c3]">
                        Answer 3 questions and win 💰 150 free!
                    </div>
                </div>

               

                {(featuredque) ? 
                <>
                <div className="questionlist mt-4 my-1 text-white font-bold flex items-center justify-center">
                    Question 1
                    {(alldata) ? <span className="text-[13px]">/{ alldata.length }</span> :"" } 
                </div>

                <div className="questions my-2 text-white text-lg font-bold px-10 text-center">
                    {featuredque.que}
                </div>

                <div className="options my-4 grid grid-cols-2 gap-3 px-3 min-w-full ">
                    <div onClick={()=>(NextQuiz("A"))} id="A" className="optionBtn text-white flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                        {featuredque.option1}
                    </div>
                    
                    <div onClick={()=>(NextQuiz("B"))} id="B" className="optionBtn text-white flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                        {featuredque.option2}
                    </div>
                    
                    <div onClick={()=>(NextQuiz("C"))} id="C" className="optionBtn text-white flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                        {featuredque.option3}
                    </div>
                    
                    <div onClick={()=>(NextQuiz("D"))} id="D" className="optionBtn text-white flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                    {featuredque.option4}
                    </div>
                </div>
                </>
                : "" }

                <Link to="/login" className='signup-login mt-8 my-4'>
                    <div className="text-[#ffcc5b] font-bold text-center">Sign-Up - Login</div>
                </Link>

                <div className='notice mt-6'>
                    <div className="px-5">
                        {(instruction) ? 
                        <>
                            <div className="instruction">
                            <MarkdownPreview source={instruction} />
                            </div>
                        </>
                        :""}
                    </div>
                </div>

                
        </div>
        <Sideposter />
        </div>    
    </>
  )
}

export default Firstquestion;