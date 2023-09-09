import { Link } from "react-router-dom";
import "./Nav.style.css";

const Nav = ({handleInputChange, handleSubmit}) => {
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

        <form >
            <label htmlFor=""></label>
            <input onChange={handleInputChange} type="search" placeholder="Pokemon Name"  />
            <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
        </div>
    );
    }

export default Nav;