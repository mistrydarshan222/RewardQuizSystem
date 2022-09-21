import axios from "axios";


export async function FetchfeaturedQue() {

    const { data } = await axios.get(`http://127.0.0.1:8000/api/featured-que/`);    
    return data

}
