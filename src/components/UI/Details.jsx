import "./Movies.css"
export const Details = ({data}) =>{
    const {Poster, Title, Type, Year, imdbID} = data; 
    return(<>
    <li>
        <div className="mainContainer">
            <div className="imageContainer">
                <img src={Poster} alt={imdbID} />
            </div>
            <div className="detailsContainer">
                <p>Title: {Title}</p>
                <p>Type: {Type}</p>
                <p>Year: {Year}</p>
            </div>
        <button>Watch Now</button>
        </div>
    </li>
    </>)
}