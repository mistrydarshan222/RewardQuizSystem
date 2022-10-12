import axios from "axios";
import Backendurl from '../Helper/Backendurl'

export async function AddPlayer(myData) {
    const url = await Backendurl();    
    const name = myData.name;    
    const  data  = await fetch(`${url}/api/player/save`,    
    {
    method: 'POST',
     mode: 'cors',
    body: JSON.stringify({"name":name})
    } );
    const content = await data.json();
    
    return data
}
