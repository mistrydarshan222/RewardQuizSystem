import React,{useState} from 'react'
import Backendurl from '../pages/Helper/Backendurl'

async function useCoins(Localaction, Localvalue) {
   
    
    const prevValue = localStorage.getItem("coins") | 0;
    if(Localaction === "ADD"){       
        
        // start
        const Loggedin = localStorage.getItem('isLoggedIn'); 
        if(Loggedin === "true"){            
            const player_details = JSON.parse(localStorage.getItem('profileData'));          
            const player_id  = player_details.id;
            const player_coins  = player_details.coins;              
            const prvdata =  JSON.parse(localStorage.getItem("profileData")); 
            prvdata.coins = parseInt(player_coins) + parseInt(Localvalue);
            localStorage.setItem("profileData",  JSON.stringify(prvdata));
            const url = await Backendurl();
            console.log("usecoins Backendurl")
            const res = await fetch(`${url.backend_url}/api/coinupdate`,{            
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(
                        {
                            "id":player_id, 
                            "coins":prvdata.coins
                        }
                )
            } 
            
        );      

    }
    const finalValue = prevValue + Localvalue;
    localStorage.setItem("coins", finalValue );
    }
    else if(Localaction === "MINUS"){    
    const finalValue = prevValue - Localvalue;
    localStorage.setItem("coins", finalValue );


    const Loggedin = localStorage.getItem('isLoggedIn'); 
    if(Loggedin === "true"){        
        const player_details = JSON.parse(localStorage.getItem('profileData'));          
        const player_id  = player_details.id;
        const player_coins  = player_details.coins; 
        const prvdata =  JSON.parse(localStorage.getItem("profileData")); 
        prvdata.coins = parseInt(player_coins) - parseInt(Localvalue);
        localStorage.setItem("profileData",  JSON.stringify(prvdata));
        const url = await Backendurl();
        const  res  = await fetch(`${url.backend_url}/api/coinupdate`,{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(
                    {
                        "id":player_id, 
                        "coins":prvdata.coins
                    }
            )
        } 
    );

}
}
    else{

    }
    const AfterValue = localStorage.getItem("coins") | 0;
    return AfterValue
}

export default useCoins