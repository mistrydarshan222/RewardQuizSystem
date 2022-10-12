import axios from "axios";
import Backendurl from '../Helper/Backendurl'

export async function FetchApi() {
    const url = await Backendurl();
    const { data } = await axios.get(`${url}/api/products`)
    return data
}