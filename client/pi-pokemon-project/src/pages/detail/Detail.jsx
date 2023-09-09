import axios from "axios";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId,resetDetail } from "../../redux/actions/index.js";


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
        <>
        {pokemonId ? (
            <div>
                <h1>{pokemonId?.name}</h1>
                <img src={pokemonId?.imagen} alt={pokemonId.name}/>
                <p>HP: {pokemonId?.hp}</p>
                <p>Attack: {pokemonId?.attack}</p>
                <p>Defense: {pokemonId?.defense}</p>
                <p>Speed: {pokemonId?.speed}</p>
                <p>Height: {pokemonId?.height}</p>
                <p>Weight: {pokemonId?.weight}</p>
                <p>Types: {pokemonId?.types && pokemonId.types.map((t) => t.name).join(", ")}</p>
                
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </>
    )
}


export default Detail;