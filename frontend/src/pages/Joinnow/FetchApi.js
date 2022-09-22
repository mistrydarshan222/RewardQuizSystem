import axios from "axios";


export async function FetchQuiz(name) {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/quiz/${name}`)
    return data
}

export async function FetchQue(name) {

    const { data } = await axios.get(`http://127.0.0.1:8000/api/que/${name}`)
    return data

}

