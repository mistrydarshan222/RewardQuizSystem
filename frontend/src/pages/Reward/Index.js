import React from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { useQuery } from 'react-query'
import { useEffect, useState,useContext } from 'react'
import {FetchApi} from './FetchApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backendurl from '../Helper/Backendurl'
import useCoins from '../../hooks/useCoins'
import { CoinsContext } from '../../context/CoinsContext'

const Reward = () => {
    
    const result  = useContext(CoinsContext);
    const { data, error, isError, isLoading } = useQuery('Rewardmydata', FetchApi);    
    const [requirementKey, setrequirementKey] = useState('');
    const [loggedin, setLoggedin] = useState(false);
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

    useEffect(() => {
        setLoggedin(localStorage.getItem('isLoggedIn'));  
    }, [loggedin])
    
    
    const buynowHandle = async (e) =>{
       
        if(loggedin === "false"){
            
            toast.warn('You must login to redeem your coins', {
                position: "top-right",
                theme: "dark",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else{            
            const product_id = e.target.id;
            const coins = e.target.dataset.coins;
            const player_details = JSON.parse(localStorage.getItem('profileData'));          
            const player_id  = player_details.id;
            const player_coins  = player_details.coins;  
                     
            if(parseInt(player_coins) >= parseInt(coins)){
                const prvdata =  JSON.parse(localStorage.getItem("profileData")); 
                prvdata.coins = parseInt(player_coins) - parseInt(coins);
                const requestOptions = {
                    method: 'POST',
                    mode: 'cors',       
                    body: JSON.stringify({ 
                        'product_id': product_id,
                        'player_id': player_id,
                        'coins' : coins
                    })
                };
                const url = await Backendurl();
                const response = await fetch(`${url.backend_url}/api/order`, requestOptions);
                const data = await response.json();                              
                if(response.status === 200){                    
                        toast("Order Placed");
                        localStorage.setItem("coins",  parseInt(player_coins) - parseInt(coins) );       
                        localStorage.setItem("profileData",  JSON.stringify(prvdata));
                        setrequirementKey(Math.random())
                }
                else{                    
                    toast.warn('Technical Issue', {
                        position: "top-right",
                        theme: "dark",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            }
            else{                
                toast.warn('No coins', {
                    position: "top-right",
                    theme: "dark",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }           
        
        }
    }
    useEffect(()=>{
        localStorage.setItem('Reload',0);
    },[])

    async function watchad(){

        const currentTime = new Date().toISOString();     
        // localStorage.setItem('dailyreward', currentTime); 

        if(localStorage.getItem('dailyreward')){
            const then = new Date(localStorage.getItem('dailyreward'));
            const now = new Date();
            const msBetweenDates = Math.abs(then.getTime() - now.getTime());
            const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
            if (hoursBetweenDates < 24) {               
                toast.warn(`Try after ${parseInt((24 - hoursBetweenDates))} hours`, {
                    position: "top-right",
                    theme: "dark",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            else{
                console.log("ads will show");
                localStorage.setItem('dailyreward', currentTime);
            }
        } 
        else{
            console.log("1st timeuser ads will show");
            localStorage.setItem('dailyreward', currentTime);
            const ManageCoin = async ()=>{             
                useCoins("ADD", 25);
            }   
            ManageCoin();
            setrequirementKey(Math.random())
            console.log("added");             
            toast("25 Coins Credited");              
        }            

              
    }
    return (
    <> 
    <div className="md:flex">
     
        <div className='left-cotaniner 
        bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
        md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>      
            <Header key={requirementKey} />  
                <div className='leftcontent rewardlist mt-[15%] mb-[120px]'>                                   
                {(isLoading)?
                <h2 className='text-white text-xl mt-2 m-3'>Loading Please Wait...</h2>
                :""}    

                <div className='heading py-5 mx-3'>                                    
                    <h1 className='text-2xl text-white my-1 font-bold'>Get Amazon Pay Cashback</h1>
                    <h1 className='text-sm text-[#6063af] my-1 '>Use your Quizzop Coins to buy Amazon Pay Cashback scratch cards!</h1>
                </div>

                <div className='rewardlist md:justify-center md:mx-5 flex m-auto md:overflow-hidden flex-wrap overflow-auto mt-5 min-h-[220px]'>                

                {(isError)?  "Error... " :""}               
                { (data) ? data.map((el,index)=>( 
                <div key={index} className="z-[0] md:w-[40%]  w-[150px] md:mx-2 mx-5 cursor-pointer relative 
                h-[280px]">
                    <div className="reward left-[-4px] top-[10px] z-10 absolute w-full">
                        <svg
                        width={95}
                        height={22}
                        viewBox="0 0 95 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <rect y="0.305176" width={95} height={18} fill="#40455F" />
                        <path
                            d="M0.488281 18.5376H4.03711V21.7816L2.13244 20.1375L0.488281 18.5376Z"
                            fill="#262A41"
                        />
                        </svg>
                        <p className="top-[2px] text-[10px] font-bold absolute ml-3">
                            10 LEFT TODAY
                        </p>
                        <p className="ww-full ml-5 mb-4 break-words top-[30px] uppercase justify-center text-[16px] font-bold absolute w-[100px]">
                            {el.name}
                        </p>
                        <div className="top-[70px] my-5 flex flex-wrap items-center absolute ml-5">                     
                           
                            <img src="/rewardcoin.png" alt="coin" className=''/>                    
                            <p className="uppercase text-20 font-bold w-100 ellipsis">
                                {el.coins}
                            </p>
                        </div>
                        <div className='desc'>
                            <p className="top-[120px] py-5 absolute text-[12px] ml-5 w-[80%]">
                            <span className='desctext'>
                                {el.description}
                            </span>
                            </p>                    
                        </div>                      
                        
                        
                        
                    </div>
                    <div  className='inline-block overflow-hidden w-[160px] h-[245px] opacity-1 m-0 p-0 relative'>
                        <img
                        src={path+"/images/"+el.image}
                        decoding="async"
                        data-nimg="fixed"
                        className='absolute rounded-[10px] m-auto block min-w-[100%] 
                        max-w-[100%] min-h-[100%] h-[100%]'
                        />    
                          <div className='buynowbtn absolute bottom-[5%] left-[20%]'>
                            <div onClick={buynowHandle} id={el.id} data-coins={el.coins} className="buynowbtntxt mt-5 m-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#111827] rounded-lg focus:ring-4  dark:bg-[#134544] dark:hover:bg-[#134544] cursor-pointer" >
                            Buy Now
                            {/* <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
                            </div>
                    </div>                   
                    </div>
                   
                </div> 

                )) :""
                }                            
                </div>  
                <div className="rewardborder z-[0] max-w-full w-full
                md:mx-0 mx-5 cursor-pointer h-full py-5">

                    <div className='heading py-5 mx-3'>
                        <div className="flex items-center">
                           <img src="/coin.png" className='coinicon w-[16px] h-[18px] mx-2'/>
                           <h1 className='text-xl text-white font-bold'>Earn More Coins</h1> 
                        </div>
                    </div>

                    <div className='list flex mx-5 py-5 max-w-full w-full'>                  
                        
                        <div onClick={watchad} className='w-[150px]'>
                            <img src="/watch-ad-card.png" alt="adsimage" className='watchadcard w-[140px] h-[190px]' /> 
                        </div> 
                    </div>              
                </div>             
              

                </div>  
            <Footer />
        </div>
        <Sideposter />
    </div>
    </> 
  )
}

export default Reward
