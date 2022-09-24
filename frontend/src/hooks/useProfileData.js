import React, {useState, useEffect} from 'react'

function useProfileData() {

    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(false);

    const profileData = localStorage.getItem("profileData");
    
    useEffect(()=>{
        if(profileData){

            setData(JSON.parse(profileData));  
        }
        setisLoading(true);
    },[isLoading]);
   
            console.log(data);
            return data
        
}

export default useProfileData
