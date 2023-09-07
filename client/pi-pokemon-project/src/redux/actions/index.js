import axios from 'axios';
import { GET_POKEMONS,GET_POKEMON_ID,GET_POKEMON_NAME, GET_TYPES, POST_POKEMON, FILTER_TYPE,FILTER_API,FILTER_DB,ORDER_ATTACK,ORDER_NAME} from '../actionstype/index.js';

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
            const pokemonName = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
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

export const filterPokemonsApi = (payload) =>{
    return (dispatch) => {
        dispatch({type: FILTER_API, payload})
    }
};

export const filterPokemonDb = (payload) =>{
    return (dispatch) => {
        dispatch({type: FILTER_DB, payload})
    }
};

export const filterByType = (payload) =>{
    return (dispatch) => {
        dispatch({type: FILTER_TYPE, payload})
    }
};

export const orderByName = (payload) =>{
    return (dispatch) => {
        dispatch({type: ORDER_NAME, payload})
    }
};

export const orderByAttack = (payload) =>{
    return (dispatch) => {
        dispatch({type: ORDER_ATTACK, payload})
    }
};






