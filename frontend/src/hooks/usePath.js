import React from 'react'

async function usePath() {

const data = await fetch('/settings.json');
const res =  await data.json();
return res.backend_url;
  
}

export default usePath
