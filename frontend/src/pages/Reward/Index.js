import React from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import {FetchApi} from './FetchApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backendurl from '../Helper/Backendurl'
 
const Reward = () => {

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
                    toast("Technical Issue");
                }
            }
            else{
                toast("No coins")
            }           
        
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
                <div className='rewardlist md:mx-5 flex m-auto md:overflow-hidden overflow-auto pr-20 mt-20 min-h-[220px]'>
                {(isError)?  "Error... " :""}               
                { (data) ? data.map((el,index)=>( 
                <div key={index} className="md:w-[40%] w-[150px] md:mx-2 mx-5 cursor-pointer relative">
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
                            <p className="top-[120px] my-5 absolute text-[12px] ml-5">
                            <span>
                                {el.description}
                            </span>
                            </p>
                        </div>
                        
                        
                        
                    </div>
                    <span  className='inline-block overflow-hidden w-[140px] h-[200px] opacity-1 m-0 p-0 relative'>
                        <img
                        src={path+"/images/"+el.image}
                        decoding="async"
                        data-nimg="fixed"
                        className='absolute m-auto block min-w-[100%] max-w-[100%] min-h-[100%] max-h-[100%]'
                        />                        
                    </span>
                </div> 
                )) :""
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

export default Reward
