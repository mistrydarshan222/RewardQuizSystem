import axios from "axios";
import Backendurl from '../Helper/Backendurl'


export async function FetchQuiz(name) {
    const url = await Backendurl();
    const { data } = await axios.get(`${url.backend_url}/api/quiz/${name}`)
    return data
}

export async function FetchQue(name) {
    const url = await Backendurl();
    const { data } = await axios.get(`${url.backend_url}/api/que/${name}`)
    return data
}




