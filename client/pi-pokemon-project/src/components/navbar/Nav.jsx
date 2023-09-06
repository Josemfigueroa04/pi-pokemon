import { Link } from "react-router-dom";
import "./Nav.style.css";

const Nav = () => {
    return (
        <div className="nav">
        <div className="nav__logo">
            <img  alt="logo" />
        </div>
        <div className="nav__links">
            <Link to="/"> <button>Home</button> </Link>
            <Link to="/pokemons"> <button>Pokemons</button></Link>
            {/* <Link to="/create"> <button>Create Pokemons</button> </Link> */}
        </div>

        <div>
            <label htmlFor=""></label>
            <input type="search" placeholder="Pokemon Name" />
            <button>Search</button>
        </div>
        </div>
    );
    }

export default Nav;