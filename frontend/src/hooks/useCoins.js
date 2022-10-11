import React,{useState} from 'react'

async function useCoins(Localaction, Localvalue) {
   
    
    const prevValue = localStorage.getItem("coins") | 0;
    if(Localaction === "ADD"){
        console.log("coins added")
        
        // start


        const Loggedin = localStorage.getItem('isLoggedIn'); 
        if(Loggedin === "true"){
            console.log("loggedin");
            const player_details = JSON.parse(localStorage.getItem('profileData'));          
            const player_id  = player_details.id;
            const player_coins  = player_details.coins;              
            const prvdata =  JSON.parse(localStorage.getItem("profileData")); 
            prvdata.coins = parseInt(player_coins) + parseInt(Localvalue);
            localStorage.setItem("profileData",  JSON.stringify(prvdata));
            
            const  res  = await fetch(`http://127.0.0.1:8000/api/coinupdate`,{
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


        // end


    const finalValue = prevValue + Localvalue;
    localStorage.setItem("coins", finalValue );
    }
    else if(Localaction === "MINUS"){
    console.log("coins MINUS")
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
        
        const  res  = await fetch(`http://127.0.0.1:8000/api/coinupdate`,{
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