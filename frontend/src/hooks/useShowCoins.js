import React, {useState, useEffect} from 'react';

function useShowCoins() {

    const [data, setData] = useState();
    const [isLoading, setisLoading] = useState(false);
    const TemplocalCoins = localStorage.getItem("coins");

    const localCoins = TemplocalCoins ? TemplocalCoins : 0; 
  
    useEffect(()=>{
        const profileData = localStorage.getItem("profileData");
        const profileData_Json = JSON.parse(profileData);
        
        if(profileData_Json){
            setData(profileData_Json.coins);  
        }
        
        setisLoading(true);
        
    },[isLoading]);
    
    const result = data ? data : localCoins;    
    return result
      

    
}

export default useShowCoins
