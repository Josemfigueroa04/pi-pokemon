import axios from "axios";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId,resetDetail,getPokemons } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";

import style from "./Detail.module.css";


const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemonId = useSelector((state) => state.pokemonDetail);
    
    useEffect(() => {
        dispatch(getPokemonId(id));
        return () => {
            dispatch(resetDetail());
        }
    }, [id]);
    
    return (
        <div className={style.detail}>
        {pokemonId ? (
            <div className={style.container}>
                 <img src={pokemonId?.imagen} alt={pokemonId.name}/>   
                <h3>{pokemonId?.name}</h3>
                <p>HP: {pokemonId?.hp}</p>
                <p>Attack: {pokemonId?.attack}</p>
                <p>Defense: {pokemonId?.defense}</p>
                <p>Speed: {pokemonId?.speed}</p>
                <p>Height: {pokemonId?.height}</p>
                <p>Weight: {pokemonId?.weight}</p>
                <p>Types: {pokemonId?.types && pokemonId.types.map((t) => t.name).join(", ")}</p>
                <Link to="/home"> <button >Home</button></Link>

            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
        
    )
}


export default Detail;