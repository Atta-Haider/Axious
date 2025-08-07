import { useEffect, useState } from "react"
import { Details } from "./Details";
import "./Movies.css"
import { getMovies } from "../../Services/services";
// 
export const Movies = () =>{
    const [data, setData] = useState([]);
    const API = "http://www.omdbapi.com/?s=Batman&type=movie&apikey=36235230&page=1"
    const fetchData = async () =>{
        try {
            const res = await getMovies();
            console.log(res.data.Search)
            setData(res.data.Search)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
        fetchData();
    }, [])
    return (<>
    <div className="heroContainer">
        <h1>Best Batman Movies</h1>
    <ul>
        {data.map((currentElem)=>{
            return <Details key={currentElem.imdbID} data={currentElem}/>
        })}
    </ul>
        </div>
        
    </>)
}