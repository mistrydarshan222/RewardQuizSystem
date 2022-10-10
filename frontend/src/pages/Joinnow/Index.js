import React, { useEffect, useState } from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { FetchQuiz } from './FetchApi'
import { playedquiz } from './FetchApi'
// import { useSearchParams } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useParams } from "react-router-dom";
import useCoins from '../../hooks/useCoins';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Joinnow = () => {
    let navigate = useNavigate();
    const [loggedin, setLoggedin] = useState(false);
    useEffect(() => {
        setLoggedin(localStorage.getItem('isLoggedIn'));    
    }, [loggedin])


    const { name } = useParams();
    const [QuizData, setQuizData] = useState({});
    const QueryName = name.replaceAll("-", " ");
    const { data, error, isError, isLoading } = useQuery(['data', QueryName], () => FetchQuiz(QueryName));
 
    
    if (isError) {
    }



    const getids = async () => { 

    const playerinfo = await JSON.parse(localStorage.getItem("profileData"));
    const player_id = await playerinfo.id;        
    const quiz_id = await data.data[0].id;
           
        const  res  = await fetch(`http://127.0.0.1:8000/api/playedquiz`,    
        {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(
            {
                "player_id":player_id, 
                "quiz_id":quiz_id
            }
            )
        } 
        );
        const content = await res.json();       
        return content.data.status
    }


    useEffect(() => {
      if (!isLoading) {
            setQuizData(data.data[0]);
        }
    }, [data, isLoading, QuizData])
    
    async function PlayNow() {    
        if(loggedin === "true"){
            const CheckPlayer = await getids();
            if(CheckPlayer === "EXIT"){
                toast.warn('Cannot Play Same Quiz Again', {
                    position: "top-right",
                    theme: "dark",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            else{
                const playerinfo = await JSON.parse(localStorage.getItem("profileData"));
                const player_id = await playerinfo.id;      
                const LoggedPlayedQuiz = await fetch(`http://127.0.0.1:8000/api/playedQuiz/${player_id}`);
                const res = await LoggedPlayedQuiz.json();
                localStorage.setItem('playedquiz', res.toString());
                const ManageCoin = () => {
                useCoins("MINUS", QuizData.charges);
                }
                ManageCoin();
                navigate('/Quiz/' + name); 
            }
        }      
    }
 async  function Playasguest(){
        const quiz_id = data.data[0].id;
        if(!localStorage.getItem('playedquiz')){
            localStorage.setItem('playedquiz', JSON.stringify([]));
        }
        const playedquiz = localStorage.getItem('playedquiz');     
        const prevPlayedQuiz = await JSON.parse(playedquiz);
        let exists = Object.values(prevPlayedQuiz).includes(quiz_id);
        if(exists){
            toast.warn('Cannot Play Same Quiz Again', {
                position: "top-right",
                theme: "dark",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });               
        }
        else{    
            prevPlayedQuiz.push(quiz_id);
            localStorage.setItem('playedquiz', JSON.stringify(prevPlayedQuiz));
            navigate('/Quiz/' + name);
        }        
    }

    return (
        <>
            <div className='md:flex'>
                <div className='left-cotaniner 
                bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
                md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>
                    <Header />
                    <div className='leftcontent w-full pb-[150px]'>
                        <div className='ads md:mt-[2rem] mt-[10px] flex justify-center'>
                            <img src="/ad440.png" alt="ad" />
                        </div>
                <div className="my-5 md:mx-5 mx-3 mb-[250px] md:mb-[0px] 
                    flex flex-col gap-6 md:gap-2 border-2 border-[#404554] rounded-[30px] py-5">
                    <div className="flex gap-2 items-center px-5 ">
                                <img className="w-[60px] object-cover sm:w-[58px] rounded-full" src="/quiz1.png" alt="category" />
                                <div>

                                </div>
                                

                                <div>
                                    {(QuizData) ?
                                        <div className="text-[15px] font-bold sm:text-[13px] text-[#6063af]">
                                            {QuizData.name}
                                        </div>
                                        : ""}
                                    <div className="flex gap-1 text-[18px] font-black sm:text-[14px] text-white">
                                        Play &amp; Win
                                        <img className="w-[20px] object-contain" src="/coin.svg" alt="Coin" />
                                        10000
                                    </div>
                                </div>
                        </div>
                    <div className="flex flex-col md:flex-row items-center justify-around m-5">

                        <div onClick={PlayNow}  className="md:w-[100%]  border-1 rounded-md">
                                <button id="plybtn" className="py-2 bg-[#3957ea] md:py-2 px-14 md:px-7 
                                    md:w-full text-sm text-white rounded-full border-[1px] border-solid border-[#3957ea]">
                                        Play Now
                                </button>
                        </div>

                                {(loggedin === "true") ?
                                    ""
                                    :
                                    <>
                                    <div className="text-[20px] text-white mx-5 my-3">or</div>

                                        <div onClick={Playasguest} className=" self-center text-white 
                                        border-text border-[1px] 
                                        md:w-full text-center 
                                        rounded-full font-bold text-sm py-2 md:px-4 px-10 cursor-pointer">
                                            PLAY AS GUEST
                                        </div>
                                    </>}



                            </div>
                            <div>
                            {(QuizData) ? 
                                    (QuizData.instruction) ?
                                        <div>
                                            <MarkdownPreview source={QuizData.instruction} />
                                        </div>
                                        : ""
                                
                                :""    
                            }
                        </div>
                        </div>

                        <Footer />
                    </div>
                </div>
                <Sideposter />
            </div>
        </>
    )
}

export default Joinnow