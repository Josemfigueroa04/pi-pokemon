import axios from 'axios';
import { GET_POKEMONS,GET_POKEMON_ID,GET_POKEMON_NAME, GET_TYPES, POST_POKEMON, FILTER_TYPE,FILTER_POKE,ORDER_ATTACK,ORDER_NAME} from '../actionstype/index.js';

export const getPokemons = () =>{
    return async (dispatch) => {
        try{
            const pokemons = await axios.get('http://localhost:3001/pokemons');
            dispatch({type: GET_POKEMONS, payload: pokemons.data})
        }catch(error){
            console.log(error)
        }
    }
};

export const getPokemonId= (id) =>{
    return async (dispatch) => {
        try{
            const pokemonId = await axios.get(`http://localhost:3001/pokemons/${id}`);
            dispatch({type: GET_POKEMON_ID, payload: pokemonId.data})
        }catch(error){
            console.log(error)
        }
    }
};

export const getPokemonName = (name) =>{
    return async (dispatch) => {
        try{
            const pokemonName = await axios.get(`http://localhost:3001/pokemons/?name=${name}`);
            dispatch({type: GET_POKEMON_NAME, payload: pokemonName.data})
        }catch(error){
            console.log(error)
        }
    }
};

export const getTypes = () =>{
    return async (dispatch) => {
        try{
            const types = await axios.get('http://localhost:3001/types');
            dispatch({type: GET_TYPES, payload: types.data})
        }catch(error){
            console.log(error)
        }
    }
};

export const postPokemon = (payload) =>{
    return async (dispatch) => {
        try{
            const postPokemon = await axios.post('http://localhost:3001/pokemons', payload);
            dispatch({type: POST_POKEMON, payload: postPokemon.data})
        }catch(error){
            console.log(error)
        }
    }
};

export const filterPokemons= (createInDb) =>{
    return {
        type: FILTER_POKE, 
        payload:createInDb
    }
};



export const filterType = (types) =>{
    return{
        type: FILTER_TYPE, 
        payload:types
    }
};

export const orderByName = (order) =>{
    return{
        type: ORDER_NAME, 
        payload:order
    }
};

export const orderByAttack = (order) =>{
    return{
        type: ORDER_ATTACK, 
        payload:order
    }
};






