import axios from "axios";
import Backendurl from '../Helper/Backendurl'

export async function FetchQuiz(name) {
    const url = await Backendurl();  
    const { data } = await axios.get(`${url.backend_url}/api/category/${name}`)
    return data
}
