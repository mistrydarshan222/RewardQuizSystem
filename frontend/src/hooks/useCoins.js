import React from 'react'

function useCoins(Localaction, Localvalue) {
    
    const prevValue = localStorage.getItem("coins") | 0;
    if(Localaction === "ADD"){
    const finalValue = prevValue + Localvalue;
    localStorage.setItem("coins", finalValue );
    }else if(Localaction === "MINUS"){
    const finalValue = prevValue - Localvalue;
    localStorage.setItem("coins", finalValue );
    }else{

    }
    const AfterValue = localStorage.getItem("coins") | 0;

    return AfterValue
}

export default useCoins