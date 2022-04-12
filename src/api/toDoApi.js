import axios from 'axios'

const toDoApi = axios.create({
    baseURL: 'http://localhost:5025/api'
})

export default toDoApi