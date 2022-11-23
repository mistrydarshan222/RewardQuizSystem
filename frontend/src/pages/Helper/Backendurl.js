import React from 'react'
import axios from "axios";

export async function GetBackendurl() {
        
}
const Backendurl = async () => {

    const { data } = await axios.get('/settings.json');    
    return data
}


export default Backendurl
