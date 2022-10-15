import axios from "axios";
import Backendurl from '../Helper/Backendurl'

export async function FetchsettingApi() {
    const url = await Backendurl();
    const { data } = await axios.get(`${url.backend_url}/api/setting`)
    return data
}