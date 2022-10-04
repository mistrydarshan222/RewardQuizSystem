import axios from "axios";

async function FetchApi() {

    const { data } = await axios.get('http://127.0.0.1:8000/api/categories')
    
    return data

}

export default FetchApi