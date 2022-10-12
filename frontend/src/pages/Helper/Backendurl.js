import React from 'react'
import { useEffect, useState } from 'react'

 const Backendurl = async () => {

        const data = await fetch('/settings.json');
        const res =  await data.json();
        const path = await res.backend_url;                       
        return path   
}

export default Backendurl
