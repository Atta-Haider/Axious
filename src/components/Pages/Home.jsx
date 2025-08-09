import { useNavigate, useNavigation } from "react-router";
import "./Home.css";
export const Home = () => {
    const navigate = useNavigate();
    const handleExploreClickButton = () =>{
        navigate("/movies")
    }
  return (
    <>
      <div className="homeMainContainer">
        <div className="homeLeftContainer">
          <p>Explore the latest Batman Movies</p>
          <h1>Unlimited Movies and Fun.</h1>
          <p>Discover the best movies with subtitles of your own choice.</p>
          <button onClick={handleExploreClickButton}>Explore Now</button>
        </div>
        <div className="homeRightContainer">
          <img src="/images/batman.webp" alt="Batman Movies" />
        </div>
      </div>
    </>
  );
};
