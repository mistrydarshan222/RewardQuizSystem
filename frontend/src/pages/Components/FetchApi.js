import axios from "axios";


export async function FetchsettingApi() {
    
    const { data } = await axios.get('http://127.0.0.1:8000/api/setting')
    return data
}