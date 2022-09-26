import axios from "axios";


export async function FetchQuiz(name) {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/category/${name}`)
    return data
}
