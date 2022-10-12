import axios from "axios";
import Backendurl from '../Helper/Backendurl'

export async function FetchApi() {
    const url = await Backendurl();
    const { data } = await axios.get(`${url}/api/quizzes`)
    return data
}

export async function FetchCatApi() {
    const url = await Backendurl();
    const { data } = await axios.get(`${url}/api/categories`)
    return data
}
