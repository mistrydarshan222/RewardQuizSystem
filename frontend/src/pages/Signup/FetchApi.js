import axios from "axios";


export async function AddPlayer(myData) {
    console.warn(myData);
    const name = myData.name;
    console.warn(name);
    const  data  = await fetch(`http://127.0.0.1:8000/api/player/save`,
    
    {method: 'POST',
     mode: 'cors',
    body: JSON.stringify({"name":name})
    } );
    const content = await data.json();
    
    return data
}
