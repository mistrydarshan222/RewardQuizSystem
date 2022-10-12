import axios from "axios";
import Backendurl from '../Helper/Backendurl'

export async function FetchfeaturedQue() {
    const url = await Backendurl();
    const { data } = await axios.get(`${url}/api/featured-que/`);    
    return data

}
