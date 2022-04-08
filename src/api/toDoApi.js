import axios from 'axios'

const toDoApi = axios.create({
    baseURL: 'http://localhost:4575/api'
})

export default toDoApi