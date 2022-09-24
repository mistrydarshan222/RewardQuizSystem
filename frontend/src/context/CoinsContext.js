import React, { useState, createContext,useEffect } from "react";

export const CoinsContext = createContext(null);

function  CoinsContextProvider(props){
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

 

  return(
    <CoinsContext.Provider value={result}>
      {props.children}
    </CoinsContext.Provider>

  )
}

export default CoinsContextProvider