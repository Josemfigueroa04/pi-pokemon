import { GET_POKEMONS,GET_POKEMON_ID,GET_POKEMON_NAME,
         GET_TYPES,POST_POKEMON,FILTER_API,FILTER_DB,
         FILTER_TYPE,ORDER_ATTACK,ORDER_NAME } from "../actionstype/index.js";


const initialState = {
    allPokemons: [],
    copyAllPokemons: [],
    allTypes: [],
    pokemonId: [],
    pokemonName: [],
    pokemonCreated: [],
    pokemonFiltered: [],
    pokemonOrder: [],
    };

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: payload,
                copyAllPokemons: payload,

            }
        case GET_TYPES:
            return {
                ...state,
                allTypes: payload
            }
        case GET_POKEMON_ID:
            return {
                ...state,
                pokemonId: payload
            }
        case GET_POKEMON_NAME:
            return {
                ...state,
                pokemonName: payload
            }
        case POST_POKEMON:
            return {
                ...state,
                pokemonCreated: payload
            }
        case FILTER_API:
            return {
                ...state,
                pokemonFiltered: payload
            }
        case FILTER_DB:
            return {
                ...state,
                pokemonFiltered: payload
            }
        case FILTER_TYPE:
            return {
                ...state,
                pokemonFiltered: payload
            }
        case ORDER_NAME:
            return {
                ...state,
                pokemonOrder: payload
            }
        case ORDER_ATTACK:
            return {
                ...state,
                pokemonOrder: payload
            }

           
        
        default:
            return { ...state }

    }


};

export default reducer;
