import { useNavigate } from "react-router"

export const Error = () =>{
    const navigate = useNavigate();
    const handleButtonClick = () =>{
        navigate("/")
    }
    return(<>
        <div className="errorContainer">
            <h1>Opps</h1>
            <button onClick={handleButtonClick}>Go Back Home</button>
        </div>
    </>)
}