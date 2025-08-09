import { NavLink, useNavigate } from "react-router";
import "./Movies.css";
export const Details = ({ data }) => {
  const { Poster, Title, imdbID } = data;
  const navigate = useNavigate();
  const handleWatchNowButtonClick = () =>{
        navigate(`/movies/${imdbID}`)
  }
  return (
    <>
      <li>
        <div className="mainContainer">
          <div className="imageContainer">
            <img src={Poster} alt={imdbID} />
          </div>
          <div className="detailsContainer">
            <p>Title: {Title}</p>
          </div>
            <button onClick={handleWatchNowButtonClick}>Watch Now</button>
        </div>
      </li>
    </>
  );
};
