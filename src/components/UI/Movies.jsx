import { useEffect, useState } from "react"
import { Details } from "./Details";
import "./Movies.css"
import { getMovies } from "../../Services/services";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

// 
export const Movies = () =>{
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const API = getMovies();
    const fetchData = async () =>{
        try {
            const res = await getMovies(page);
            console.log(res.data.Search)
            setData(res.data.Search)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
        fetchData();
    }, [])
    
    //Function to handle page clicks
    const handleNextClick = () =>{
        console.log("i am clicked")
        setPage(page+1)
        fetchData();
    }
    const handlePreviousClick = () =>{
        if(page-1 != 0){
            setPage(page-1)
            fetchData();
        }
    }
    return (<>
    <div className="heroContainer">
        <h1>Best Batman Movies</h1>
        <div className="nextPreviousContainer">
            <FcPrevious onClick={()=> handlePreviousClick()} className="clickPrevious"/>
            <p>{page}</p>
            <FcNext onClick={()=> handleNextClick()} className="clickNext"/>
        </div>
    <ul>
        {data.map((currentElem)=>{
            return <Details key={currentElem.imdbID} data={currentElem}/>
        })}
    </ul>
        </div>
        
    </>)
}