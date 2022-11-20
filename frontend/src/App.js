import Firstquestion from "./pages/Firstquestion/Index";
import Startquiz from "./pages/Startquiz/Index"
import Home from "./pages/Home/Index";
import Category from "./pages/Category/Index";
import Joinnow from "./pages/Joinnow/Index";
import Questions from "./pages/Questions/Index";
import Result from "./pages/Result/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Index";
import Signup from "./pages/Signup/Signup";
import Singlecategory from "./pages/Singglecategory/Index"
import Reward from "./pages/Reward/Index"
import { useEffect , useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import 'react-toastify/dist/ReactToastify.css';
import { FetchsettingApi } from './pages/Components/FetchApi'
import { useQuery } from 'react-query'
import Contactus from './pages/menupages/Contactus'
import Privacy from './pages/menupages/Privacy'
import Quizrules from './pages/menupages/Quizrules'
import { v4 as uuidv4 } from 'uuid';


function App() {
  useEffect(()=>{
    if(!localStorage.getItem("isLoggedIn")){
      localStorage.setItem('isLoggedIn', false);        
    }
  },[])
  const SettingData = useQuery('SettingData', FetchsettingApi);   
  const [pubid, setPubid] = useState("");
  useEffect(()=>{
    const { data, error, isError, isLoading } = SettingData;    
    if(!isLoading){        
        setPubid(data.data[0].publisherid);        
    }        
    },[SettingData]);
    
  return (


    <>
 
 <Helmet>
   
    {(pubid) ? 
   <script>
     {`      
        var script = document.createElement('script');
         script.onload = function() {console.log("Script loaded and ready");};
         script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
         script.setAttribute ("data-ad-client",'${pubid}');
         script.setAttribute  ("data-ad-channel","test");
      
         //script.setAttribute ("data-adbreak-test","on");
         script.setAttribute ("data-ad-frequency-hint","30s");
         script.onerror = function() {console.log('adblock true');};
         script.onload = function() {initBreak("preroll", "#");console.log('adblock false');};   
         document.getElementsByTagName('head')[0].appendChild(script);

         
         
         function initBreak(a, url){
         switch (a) {
         case "preroll":
         console.log("start adbreak preroll");     
         adBreak({
         type: 'preroll',  // ad shows at start of next level
         name: 'preroll',   // resume the game flow.
         adBreakDone: () => {console.log("close adbreak preroll");goto(url);}     
         });
         break;
         case "start":
         console.log("start adbreak start");    
         adBreak({
         type: 'start',  
         name: 'start',
         adBreakDone: () => {console.log("close adbreak start");goto(url);}    
         });
         break;
         case "pause": 
         console.log("start adbreak pause"); 
         adBreak({
         type: 'pause', 
         name: 'pause',
         adBreakDone: () => {console.log("close adbreak pause");goto(url);}    
         });
         break;
         case "next": 
         console.log("start adbreak next"); 
         adBreak({
         type: 'next', 
         name: 'next',
         adBreakDone: () => {console.log("close adbreak next");goto(url);}   
         });
         
         break;
         case "browse":     
         console.log("start adbreak browse"); 
         adBreak({
         type: 'browse',  
         name: 'browse',
         adBreakDone: () => {console.log("close adbreak browse");goto(url);}    
         });
         break;
         case "reward": 
         console.log("start adbreak reward"); 
         adBreak({
         type: 'reward',  
         name: 'reward',
         adBreakDone: () => {console.log("close adbreak reward");goto(url);}       
         });
         break;
         }
             function goto(url){
                 
             }
         } 
         function gotoonerror(url){
                
             }
         
            window.adsbygoogle = window.adsbygoogle || [];
            var adBreak = adConfig = function(o) {adsbygoogle.push(o);}
           
            adConfig({preloadAdBreaks: 'on'});
  
  `}
    </script> 
    : ""} 
     
    </Helmet>   
    
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Firstquestion  />} />
          <Route path="Start-quiz" element={<Startquiz />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />  
          <Route path="/quizzes/:name" element={<Singlecategory />} /> 
          <Route path="/play/:name" element={<Joinnow />} />
          <Route path="/quiz/:name" element={<Questions />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/reward" element={<Reward />} /> 

          <Route path="/quizrules" element={<Quizrules />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contactus" element={<Contactus />} />          
      </Routes>
    </BrowserRouter>

    <ToastContainer />

    </div>  
    
 
    </>
  );
}



export default App;
