import { Link } from "react-router-dom";
import "./Landing.style.css";

const Landing = () => {
    return (
        <div className="container-landing">
            <h1>Welcome</h1>
            <Link to="/home">
                <button className="button">Start</button>
            </Link>
            

        </div>
    )
};

export default Landing;