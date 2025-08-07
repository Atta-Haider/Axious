import axios from "axios"
const API = axios.create({
    baseURL: "http://www.omdbapi.com"
})
export const getMovies = () =>{
    return API.get("/?s=Batman&type=movie&apikey=36235230&page=1")
}