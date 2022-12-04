import React, { useEffect, useState } from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { useQuery } from 'react-query'
import {FetchQue, FetchQuiz} from './FetchApi'
import { useParams} from "react-router-dom";
import Result from "../Result/Index";
import { useNavigate  } from "react-router-dom";
import useCoins from '../../hooks/useCoins'
import { useTimer } from "reactjs-countdown-hook";
import Backendurl from '../Helper/Backendurl'
import { Helmet } from 'react-helmet'
import { FetchsettingApi } from '../Components/FetchApi'

const Questions = () => {

    useEffect(()=>{
        localStorage.setItem('Reload',0);
    },[])
    


    const {
        isActive,
        counter,
        seconds,
        minutes,
        hours,
        days,
        pause,
        resume,
        reset,
      } = useTimer(120, handleTimerFinish);
     

    let navigate = useNavigate();   

    const { name } = useParams();
    const [pubid, setPubid] = useState("");
    const QueryName = name.replaceAll("-"," ");
    const [currentScore, setcurrentScore] = useState(0);
    const [currentData, setCurrentData] = useState("");
    const [currentPOS, setcurrentPOS] = useState(0);
    const [currentque, setcurrentque] = useState(1);  
    const [isCompleted, setIsCompleted] = useState(false);
    const [isupdate, setIsupdate] = useState(false);
    const [is5050Used, setis5050Used] = useState(false);
    const [ispollUsed, setispollUsed] = useState(false);
    const [isLLtimeUsed, setisLLtimeUsed] = useState(false);
    const [isLLFlipque, setisLLFlipque] = useState(false);        
    const [isAdsViewd, setisAdsViewd] = useState(false);        
    const [Quizdata, setQuizdata] = useState('');




      useEffect(()=>{
        setcurrentScore(0);
        setCurrentData("");
        setcurrentPOS(0);
        setcurrentque(1);
        setIsCompleted(false);
        setIsupdate(false);
        setis5050Used(false);
        setisLLtimeUsed(false);
        setispollUsed(false);
        setisLLFlipque(false);


        // e.target.style.borderColor = "white";
        // document.styleSheets[0].Rem('.lifeline.LLicon4:before', 'opacity:1');
       
        // document.querySelector('.LLicon4').style.pointerEvents = "none";       
        // document.querySelector('.LLicon4').style.pointerEvents = "none";       
        // document.querySelector('.LLicon4').styleSheets[0].addRule('.LLicon1.LLicon:before', 'opacity:0');

      },[])

      


    const { data, error, isError, isLoading } = useQuery(['data', QueryName], () => FetchQue(QueryName));
    const DummyQuizdata = useQuery(['Quizdata', QueryName], () => FetchQuiz(QueryName));
    const SettingData = useQuery('SettingData', FetchsettingApi); 
      
    useEffect(()=>{
        const { data, error, isError, isLoading } = SettingData;    
        if(!isLoading){            
            setPubid(data.data[0].publisherid);
        }        
        },[SettingData]);

    // const {Quizdata} = useQuery(['Quizdata', QueryName], () => FetchQuiz(QueryName));
    // const QuizisLoading = useQuery(['Quizdata', QueryName], () => FetchQuiz(QueryName)).isLoading;

    const[quelength,setquelength] = useState([]);
    useEffect(()=>{
        if(isLoading === false){            
            const questionlength = data.data;
            setquelength(parseInt(questionlength.length - 1));  
            document.styleSheets[0].addRule('.LLicon1.LLicon:before', 'opacity:0');
            document.styleSheets[0].addRule('.LLicon2.LLicon:before', 'opacity:0');
            document.styleSheets[0].addRule('.LLicon3.LLicon:before', 'opacity:0');
            document.styleSheets[0].addRule('.LLicon4.LLicon:before', 'opacity:0');                 
        }        
    },[data, isLoading])  
  
    
    
    
    const [quizcoins, setquizcoins] = useState(''); 
    const [quizimage, setquizimage] = useState('');    

    useEffect(()=>{        
        if(DummyQuizdata.isLoading===false){        
            const { data, error, isError, isLoading } =  DummyQuizdata
            setQuizdata(data);            
            setquizimage(data.data[0].image);
            setquizcoins(data.data[0].coins);     
        }
    },[DummyQuizdata])
    
    

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
    
    function handleTimerFinish() {
        setIsCompleted(true);            
    }
    
    useEffect(()=>{ 
        if(!isLoading){            
            const QueData = data.data;              
            if(QueData.length  > 1 ){              
                setCurrentData(QueData[currentPOS]);
            }
          }
    },[currentPOS, isLoading, data])


    useEffect(()=>{ 
        function isElement(element) {
            return element instanceof Element || element instanceof HTMLDocument;  
        }
        const LLicon1_DOM = document.querySelector('.LLicon1');
        if(LLicon1_DOM){
            if(!is5050Used){
                LLicon1_DOM.disabled = false;
                LLicon1_DOM.style.pointerEvents = "auto";     
                LLicon1_DOM.classList.remove('before_opacity');
                LLicon1_DOM.classList.add('no_before_opacity');

            }
        }

        const LLicon2_DOM = document.querySelector('.LLicon2');
        if(LLicon2_DOM){
            if(!ispollUsed){
                LLicon2_DOM.disabled = false;
                LLicon2_DOM.style.pointerEvents = "auto";     
                LLicon2_DOM.classList.remove('before_opacity');
                LLicon2_DOM.classList.add('no_before_opacity');

            }
        }

        const LLicon3_DOM = document.querySelector('.LLicon3');
        if(LLicon3_DOM){
            if(!isLLtimeUsed){
                LLicon3_DOM.disabled = false;
                LLicon3_DOM.style.pointerEvents = "auto";     
                LLicon3_DOM.classList.remove('before_opacity');
                LLicon3_DOM.classList.add('no_before_opacity');
            }
        }

        const LLicon4_DOM = document.querySelector('.LLicon4');
        if(LLicon4_DOM){
            if(!isLLFlipque){
                LLicon4_DOM.disabled = false;
                LLicon4_DOM.style.pointerEvents = "auto";     
                LLicon4_DOM.classList.remove('before_opacity');
                LLicon4_DOM.classList.add('no_before_opacity');
            }
        }
    


    },[currentData])
 


 
      
    if(error){
        console.log(error);
    }      
    // setCurrentData(QueData);
    function NextQuiz(option){        
        const QueData = data.data;               
        // check ANS
        const AllBTN =  document.querySelectorAll(`.optionBtn`);
        const correct =  QueData[currentPOS].correct
        const QUeLen = QueData.length;
        const TotalCoins = Quizdata.data[0].coins;        
        const CoinsPerQue = (TotalCoins/QUeLen);
        
    
    document.querySelector(`#${correct}`).style.backgroundColor = "green";   
    if( option !== correct){
        document.querySelector(`#${option}`).style.backgroundColor = "red";  
        // setcurrentScore(currentScore-CoinsPerQue);
    }
    else{
        setcurrentScore(currentScore+CoinsPerQue);
    }  
    var delayInMilliseconds = 1000; //1 second
    setTimeout(function() {
        
        if(isLLFlipque){
            var lastval = (QUeLen-1);
        }else{
            var lastval = (QUeLen-2);
        }
        if(currentPOS < lastval ){
                AllBTN.forEach(element => {
                    // reset 50-50 lifeline
                    const hiddenele = element.querySelector('.optionText')
                    if(hiddenele.classList.contains('hidden')){
                        hiddenele.classList.remove('hidden');
                    }
                    element.style.backgroundColor = "transparent";
                });

                // reset audience Poll
              
                const lifelinecontainer = document.querySelector('#lifelinecontainer')
                const pollcontainer = document.querySelector('#pollcontainer')
                if(lifelinecontainer.classList.contains('hidden')){
                    lifelinecontainer.classList.remove('hidden');
                }
                if(!pollcontainer.classList.contains('hidden')){
                    pollcontainer.classList.add('hidden');
                }

                // reset freeze question
                if(isLLtimeUsed){                    
                    resume();
                }
                //your code to be executed after 1 second
                setcurrentPOS(currentPOS+1);
                setcurrentque(currentque+1);
        }else{
            setIsCompleted(true);            
        }
        }, delayInMilliseconds);      
    }


    
    if(isCompleted){
        const ManageCoin = ()=>{           
                useCoins("ADD", parseInt(currentScore));
                setIsupdate(true);           
        }
        if(!isupdate){
            ManageCoin();
        }
        
        return (<Result score={currentScore} QueryName={QueryName}  />)
    }


    const LL5050 = (e) =>{     
        if(!is5050Used){
            window.adsbygoogle = window.adsbygoogle || [];
            window.adbreak = (window.adConfig = function (o) {
            window.adsbygoogle.push(o);
            });
            window.adConfig({
            sound: 'on',
            preloadAdBreaks: 'on',
            });
            var adloaded = false;
            var adbreak  = window.adbreak;            
            adbreak({
            type: 'reward', // The type of this placement
            name: 'reward', // A descriptive name for this placement
            beforeAd: () => { console.log("***** beforeAd *****"); }, // Prepare for the ad. Mute and pause the game flow
            afterAd: () => { console.log("***** afterAd *****"); }, // Resume the game and re-enable sound
            beforeReward: (showAdFn) => { 
            console.log("***** beforeReward *****"); 
            adloaded = true;
            // Show reward prompt
            showAdFn();

            //showAdFn();
            }, // Show reward prompt (call showAdFn() if clicked)
            adDismissed: () => {         
                console.log("***** adDismissed *****");      
            }, // Player dismissed the ad before it finished.
            adViewed: () => {         
                const QueData = data.data;   
                const ABCD = ['A','B','C','D'];
                const correctedAns = QueData[currentPOS].correct;
                const arr = ABCD.filter(e => e !== correctedAns);
                const hide1 = arr[(Math.floor(Math.random() * 2))];
                const hide2 = arr[2];
                document.querySelector(`#que${currentPOS} .optionBtn#${hide1} .optionText`).classList.add("hidden");
                document.querySelector(`#que${currentPOS} .optionBtn#${hide2} .optionText`).classList.add("hidden");
                e.target.style.borderColor = "white";
                const LLicon1_DOM_INNER = document.querySelector('.LLicon1');
                LLicon1_DOM_INNER.disabled = true;
                LLicon1_DOM_INNER.style.pointerEvents = "none";  
                LLicon1_DOM_INNER.classList.add('before_opacity');
                LLicon1_DOM_INNER.classList.remove('no_before_opacity');                    
                setis5050Used(true);
                console.log("***** adViewed *****");       
                }, // Player watched the adâ€“give them the reward.
            });
            if (adloaded == false) {     
                console.log('No ad is loaded.');              
            }       
        }
        
    }

    const LLPoll = (e) =>{
        if(!ispollUsed){
            window.adsbygoogle = window.adsbygoogle || [];
            window.adbreak = (window.adConfig = function (o) {
            window.adsbygoogle.push(o);
            });
            window.adConfig({
            sound: 'on',
            preloadAdBreaks: 'on',
            });

            var adloaded = false;
            var adbreak  = window.adbreak;
            console.log(adbreak);
            adbreak({
            type: 'reward', // The type of this placement
            name: 'reward', // A descriptive name for this placement
            beforeAd: () => { console.log("***** beforeAd *****"); }, // Prepare for the ad. Mute and pause the game flow
            afterAd: () => { console.log("***** afterAd *****"); }, // Resume the game and re-enable sound
            beforeReward: (showAdFn) => { 
            console.log("***** beforeReward *****"); 
            adloaded = true;
            // Show reward prompt
            showAdFn();

            //showAdFn();
            }, // Show reward prompt (call showAdFn() if clicked)
            adDismissed: () => {         
                console.log("***** adDismissed *****");      
            }, // Player dismissed the ad before it finished.
            adViewed: () => {         
                const QueData = data.data;   
                const ABCD = ['A','B','C','D'];
                const correctedAns = QueData[currentPOS].correct;
                const arr = ABCD.filter(e => e !== correctedAns);
                const correctedValue = parseInt((Math.random() * (50 - 45) + 50));
                const Ans1Value = parseInt((Math.random() * (20 - 15) + 20));
                const Ans2Value = parseInt((Math.random() * (10 - 5) + 10));
                const Ans3Value = (100 - (correctedValue+ Ans1Value + Ans2Value));
                document.querySelector(`#pollcontainer #${correctedAns}_Poll`).innerText = correctedValue;
                document.querySelector(`#pollcontainer #${arr[0]}_Poll`).innerText = Ans1Value;
                document.querySelector(`#pollcontainer #${arr[1]}_Poll`).innerText = Ans2Value;
                document.querySelector(`#pollcontainer #${arr[2]}_Poll`).innerText = Ans3Value;
                document.querySelector('#lifelinecontainer').classList.add('hidden');
                document.querySelector('#pollcontainer').classList.remove('hidden');
                e.target.style.borderColor = "white";
                const LLicon2_DOM_INNER = document.querySelector('.LLicon2');
                LLicon2_DOM_INNER.disabled = true;
                LLicon2_DOM_INNER.style.pointerEvents = "none";  
                LLicon2_DOM_INNER.classList.add('before_opacity');
                LLicon2_DOM_INNER.classList.remove('no_before_opacity');       
                setispollUsed(true);
                console.log("***** adViewed *****");       
                }, // Player watched the adâ€“give them the reward.
            });
            if (adloaded == false) {    
                console.log('No ad is loaded.');             
            }       
        }
    }



// timer
    const LLtime = (e) =>{
        if(!isLLtimeUsed){
            window.adsbygoogle = window.adsbygoogle || [];
            window.adbreak = (window.adConfig = function (o) {
            window.adsbygoogle.push(o);
            });
            window.adConfig({
            sound: 'on',
            preloadAdBreaks: 'on',
            });

            var adloaded = false;

       
            var adbreak  = window.adbreak;
            console.log(adbreak);
            adbreak({
            type: 'reward', // The type of this placement
            name: 'reward', // A descriptive name for this placement
            beforeAd: () => { console.log("***** beforeAd *****"); }, // Prepare for the ad. Mute and pause the game flow
            afterAd: () => { console.log("***** afterAd *****"); }, // Resume the game and re-enable sound
            beforeReward: (showAdFn) => { 
            console.log("***** beforeReward *****"); 
          
            // Show reward prompt
            showAdFn();

            //showAdFn();
            }, // Show reward prompt (call showAdFn() if clicked)
            adDismissed: () => {         
                console.log("***** adDismissed *****");      
            }, // Player dismissed the ad before it finished.
            adViewed: () => {         
                const LLicon3_DOM_INNER = document.querySelector('.LLicon3');
                e.target.style.borderColor = "white";
                LLicon3_DOM_INNER.disabled = true;
                LLicon3_DOM_INNER.style.pointerEvents = "none";     
                LLicon3_DOM_INNER.classList.add('before_opacity');
                LLicon3_DOM_INNER.classList.remove('no_before_opacity');
                pause();
                setisLLtimeUsed(true);                      
                },
            });
            if (adloaded == false) {   
                console.log('No ad is loaded.'); 
            }
                  
        }
    }

   
    
    const LLFlipque = async (e) =>{
        if(!isLLFlipque){            
            window.adsbygoogle = window.adsbygoogle || [];
            window.adbreak = (window.adConfig = function (o) {
            window.adsbygoogle.push(o);
            });
            window.adConfig({
            sound: 'on',
            preloadAdBreaks: 'on',
            });

            var adloaded = false;
            var adbreak  = window.adbreak;
            console.log(adbreak);
            adbreak({
            type: 'reward', // The type of this placement
            name: 'reward', // A descriptive name for this placement
            beforeAd: () => { console.log("***** beforeAd *****"); }, // Prepare for the ad. Mute and pause the game flow
            afterAd: () => { console.log("***** afterAd *****"); }, // Resume the game and re-enable sound
            beforeReward: (showAdFn) => { 
            console.log("***** beforeReward *****"); 
            adloaded = true;
            // Show reward prompt
            showAdFn();

            //showAdFn();
            }, // Show reward prompt (call showAdFn() if clicked)
            adDismissed: () => {         
                console.log("***** adDismissed *****");      
            }, // Player dismissed the ad before it finished.
            adViewed: () => {         
                setcurrentPOS(currentPOS+1);
                setisLLFlipque(true);
                const LLicon4_DOM_INNER = document.querySelector('.LLicon4');
                e.target.style.borderColor = "white";
                LLicon4_DOM_INNER.disabled = true;
                LLicon4_DOM_INNER.style.pointerEvents = "none";     
                LLicon4_DOM_INNER.classList.add('before_opacity');
                LLicon4_DOM_INNER.classList.remove('no_before_opacity');    
               
                }, // Player watched the adâ€“give them the reward.
            });
            if (adloaded == false) {     
                console.log('No ad is loaded.'); 
            }
        }
    }

    

   
 return (    
    <>



{/* <div>
<div>{`${minutes} : ${seconds}`}</div>
<button onClick={() => (isActive ? pause() : resume())}>
{isActive ? "Pause" : "Resume"}
</button>
<button onClick={reset}>Reset</button>
</div>  */}
    
    <div className="md:flex">
     
    <div className='left-cotaniner 
    bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
    md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full  relative scroll-smooth'>                 
    <Header />   
         
            {
                (!currentData) ? 
                <img src="/loader.gif" className='m-auto' alt="loader"/>                
                : 

          
        <div className="leftcontent mt-[10%] w-full">
            <div className='px-5 pt-12 py-5'>

               
                <div className="gap-2 flex items-center px-5">
                    <img className="w-[60px] object-cover sm:w-[58px] rounded-lg" 
                    src={path +"/images/"+ quizimage} alt="active" />
                <div>
                <div className="text-[12px] text-[#6063af] text-text_hd font-black sm:text-[12px]">
                    {name}
                </div>
                <div className="flex gap-1 text-[18px] font-black sm:text-[14px] text-white">
                    Play &amp; Win 
                    <img className="w-[20px] object-contain" src="/coin.svg" alt="Play" /> 
                    {quizcoins}                     
                    </div>
                </div>
                </div>

                <div className=" text-[#bac8ff] font-bold">
                    Question {currentque}
                    <span className="text-[13px] text-[#bac8ff]">/{quelength}</span>
                </div>
                
                <div className="flex gap-2 items-center w-full">
                    <div id="timer">                       
                        <div id="mytimer" style={{width:parseFloat(0.83) * (120-`${counter}`)+"%"}} />
                    </div>

                    <div className="flex flex-col gap-1 items-center justify-center text-[10px] 
                    w-20 font-bold text-white">                        
                        <span className="text-lg text-white">{counter}</span>
                        <div> SEC LEFT </div>
                    </div>
                </div>


            <div className='queContainer ' id="queContainer">
            
            {(currentData) ? 
               <>
                <div className="mt-4 text-lg font-bold px-10 text-center text-white">
                    <h2 id="que">{currentData.que}</h2>                
                </div>
                <div id={"que"+currentPOS} className="grid grid-cols-2 gap-3 px-3 min-w-full my-4">
                <div onClick={()=>(NextQuiz("A"))} id="A" className="optionBtn flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                    <div className=" optionText flex justify-center items-center text-center shrink-0 w-full" >
                    <div className="p-2 text-sm w-full">
                        <div className="flex justify-center gap-2 text-white">
                        <h1>A. </h1> {currentData.option1}
                        </div>
                    </div>
                    </div>
                </div>
                <div onClick={()=>(NextQuiz("B"))} id="B" className="optionBtn flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                    <div className=" optionText flex justify-center items-center text-center shrink-0 w-full" >
                    <div className="p-2 text-sm w-full">
                        <div className="flex justify-center gap-2 text-white">
                        <h1>B. </h1> {currentData.option2}
                        </div>
                    </div>
                    </div>
                </div>
                <div onClick={()=>(NextQuiz("C"))} id="C" className="optionBtn flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                    <div className=" optionText flex justify-center items-center text-center shrink-0 w-full" >
                    <div className="p-2 text-sm w-full">
                        <div className="flex justify-center gap-2 text-white">
                        <h1>C. </h1> {currentData.option3}
                        </div>
                    </div>
                    </div>
                </div>
                <div onClick={()=>(NextQuiz("D"))} id="D" className="optionBtn flex flex-col justify-center items-center text-base py-2 px-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer">
                    <div className="  optionText flex justify-center items-center text-center shrink-0 w-full">
                    <div className="p-2 text-sm w-full">
                        <div className="flex justify-center gap-2 text-white">
                        <h1>D. </h1> {currentData.option4}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </>
              
              :
             ""
          }

               </div>
                               
                
                
                <div className="flex text-white pb-[55px] justify-center items-center gap-1 text-lg font-bold mb-[10rem]">
                    Your Score : 
                    <span className="text-[#ffcc5b]"> {parseInt(currentScore)} </span>
                </div>                
            </div>
    <div className='bg-[#191A32] border-t-2 border-[#] border-solid mt-4 left-0
    h-[160px] bottom-[7%] border-[#404554]
    fixed w-[100%] gap-8 md:gap-10  md:h-[17%]
    max-w-[500px] p-2 md:p-5 pb-0 pt-8'>

        <div className="absolute bottom-[90%] w-[100px] 
            left-0 right-0 m-auto  border-[#404554]
            border-[1px] rounded-full px-3 py-2 flex gap-2  
            bg-[#191A32] 
            text-sm cursor-pointer">
            <svg className="h-[1em] w-[1em]" 
            focusable="false" fill="blue" aria-hidden="true" viewBox="0 0 24 24" 
            data-testid="FavoriteIcon">
            <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 
            3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
            </path>
            </svg>
            <span className='text-white'> Lifelines </span>
        </div>

        <div id="lifelinecontainer" className='flex justify-around'>

                <div onClick={LL5050} id="LL5050"  className="lifeline LLicon1 flex flex-col gap-1 justify-center items-center">
                    <div className="h-[60px] w-[60px] border-solid 
                    border-[1px] border-[#ffcc5b] text-[#ffcc5b]
                    rounded-[100px] flex justify-center items-center ">
                        50:50
                    </div>
                    <div className='text-[10px] md:text-[15px] text-white'>50:50</div>
                </div>

                <div onClick={LLPoll} id="LLPoll" className="lifeline LLicon2 flex flex-col gap-1 justify-center items-center">
                    <div className="h-[60px] w-[60px] border-solid
                    border-[1px] border-[#ffcc5b] text-white 
                    rounded-[100px] flex justify-center items-center ">
                        <img src="/audience.svg" alt="audience poll" />
                    </div>
                    <div className='text-[10px] md:text-[15px] text-white'>Audience poll</div>
                </div>

                <div onClick={LLtime} id="LLtime" className="lifeline LLicon3 flex flex-col gap-1 justify-center items-center">
                    <div className="h-[60px] w-[60px] border-solid
                    border-[1px] border-[#ffcc5b] text-white  
                    rounded-[100px] flex justify-center items-center ">
                        <img src="/time.svg" alt="time" />
                    </div>
                    <div className='text-[10px] md:text-[15px] text-white'>Freeze Timer</div>
                </div>

                <div onClick={LLFlipque} id="LLFlipque" className="lifeline LLicon4 flex flex-col gap-1 justify-center items-center">
                    <div className="h-[60px] w-[60px] 
                    border-[1px] border-[#ffcc5b] text-white border-solid
                    rounded-[100px] flex justify-center items-center ">
                        <img src="/flip.svg" alt="flip" />
                    </div>
                    <div className='text-[10px] md:text-[15px] text-white'>Flip Question</div>
                </div>
        </div>
   


        <div id="pollcontainer" className='flex flex-wrap justify-around hidden h-[80%]'>
                <div className='w-[50%] flex text-white'><p>A -</p><p id="A_Poll"></p></div>
                <div className='w-[50%] flex text-white'><p>B -</p><p id="B_Poll"></p></div>
                <div className='w-[50%] flex text-white'><p>C -</p><p id="C_Poll"></p></div>
                <div className='w-[50%] flex text-white'><p>D -</p><p id="D_Poll"></p></div>
        </div>

            </div>
        </div>


}

    <Footer/>
    </div>
    <Sideposter /> 
    </div>

     

    </>
  )
}

export default Questions