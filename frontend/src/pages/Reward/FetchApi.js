import axios from "axios";


export async function FetchApi() {
    const { data } = await axios.get('http://127.0.0.1:8000/api/products')
    return data
}