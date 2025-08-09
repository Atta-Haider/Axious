import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router";
import axios from "axios";
import { Loading } from "../Layout/Loading";
import "./cardDetails.css"
export const CardDetails = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate();
  const navigations = useNavigation();
  const params = useParams();
  const id = params.movieId
  console.log(id)
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=36235230`);
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[id])
  const handeGoBackBtnClick = () =>{
    navigate("/movies")
  }
  if(navigations.state == "loading"){
    return <Loading/>
  }
  else{

    return (
      <>
      <div className="cardDetailsContainer">
      <div className="leftDetailsContainer">
        <img src={data.Poster} alt={data.Title} />
      </div>
      <div className="rightDetailsContainer">
      <p>Title: {data.Title}</p>
      <p>Year: {data.Year}</p>
      <p>Rating: {data.imdbRating}</p>
      <p>Actors: {data.Actors}</p>
      <p>Plot: {data.Plot}</p>
      <button onClick={handeGoBackBtnClick}>GO BACK</button>
      </div>
      </div>
    </>
  );
}
};
