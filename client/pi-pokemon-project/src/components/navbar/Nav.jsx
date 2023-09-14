import { Link } from "react-router-dom";
import imagen from "../../imagenes/pokeLogo.png";
import style from "./Nav.module.css";

const Nav = ({ handleInputChange, handleSubmit }) => {
    return (
        <div className={style.nav}>
            <div className={style.nav_logo}>
                <img src={imagen} alt="logo" />
            </div>
            <div className={style.nav_links}>
                
                <Link to="/create"> <button>Create Pokemons</button> </Link>
            </div>

            <form className={style.search_bar}>
                <label ></label>
                <input onChange={handleInputChange} type="search" placeholder="Pokemon Name" />
                <button type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    );
}

export default Nav;