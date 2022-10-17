import React, { useState, useEffect } from 'react'
import Sideposter from '../Components/layout/Sideposter'
import {FetchfeaturedQue} from './FetchApi'
import { useQuery } from 'react-query'
import { useNavigate } from "react-router-dom";
import useCoins from '../../hooks/useCoins'
import { Link } from 'react-router-dom'
import { FetchsettingApi } from '../Components/FetchApi'
import MarkdownPreview from '@uiw/react-markdown-preview';

const Firstquestion = () => {

    let navigate = useNavigate(); 
    const { data, error, isError, isLoading } = useQuery('data', FetchfeaturedQue);
    const [featuredque, setFeaturedque] =useState("");
    const [alldata, setAlldata] =useState();
    const [currentPOS, setcurrentPOS] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [instruction, setinstruction] = useState("");

    const SettingData = useQuery('SettingData', FetchsettingApi); 
    useEffect(()=>{
        const { data, error, isError, isLoading } = SettingData;    
        if(!isLoading){
            setinstruction(data.data[0].Firstpageinstructions);        }        
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

         document.querySelector(`#${correct}`).style.backgroundColor = "Black";   
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
        ManageCoin();        
        navigate('/home');
    }
    },[isCompleted]);
    
    
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
            
                <div className='ads my-5 md:mt-[2rem] mt-4 flex justify-center'>
                    <img src="/ad440.png" alt="ad"/>
                </div>

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