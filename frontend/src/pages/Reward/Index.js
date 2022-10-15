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
    <div className="md:flex">
     
        <div className='left-cotaniner 
        bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
        md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>      
            <Header key={requirementKey} /> 
            <div className='productlist flex flex-wrap mb-[120px]'>
                {(isLoading)?
                <h2 className='text-white text-xl mt-2 m-3'>Loading Please Wait...</h2>
                :""}               
                {(isError)?  "Error... " :""}               
                { (data) ? data.map((el,index)=>( 
                
                <div key={index} className="products mt-10 h-full w-full p-4 m-auto max-w-sm bg-white 
                flex flex-col rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">  
                    <img className="m-auto w-[50%] h-[50%] rounded-t-lg" src={path+"/images/"+el.image} alt="k" /> 
                    
                    <h5 className="m-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.name}
                    </h5>
                    <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {el.description}
                    </p>
                    <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Coins:- {el.coins}
                    </p>
                    <div onClick={buynowHandle} id={el.id} data-coins={el.coins} className="m-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#111827] rounded-lg focus:ring-4  dark:bg-[#134544] dark:hover:bg-[#134544] cursor-pointer" >
                        Buy Now
                        {/* <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </div>
                </div> 
                
                )) :""
                }
            </div>        


            <Footer />
        </div>
        <Sideposter />
    </div>
  )
}

export default Reward
