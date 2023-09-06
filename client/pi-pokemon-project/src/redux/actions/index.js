import axios from 'axios';
import { GET_POKEMONS } from '../actionstype/index.js';

export const getPokemons = () =>{
    return async (dispatch) => {
        try{
            const pokemons = await axios.get('http://localhost:3001/pokemons');
            dispatch({type: GET_POKEMONS, payload: pokemons.data})
        }catch(error){
            console.log(error)
        }
    }
}