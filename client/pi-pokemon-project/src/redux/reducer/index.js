import { GET_POKEMONS,GET_POKEMON_ID,GET_POKEMON_NAME,
         GET_TYPES,POST_POKEMON,FILTER_POKE,
         FILTER_TYPE,ORDER_ATTACK,ORDER_NAME,RESET_DETAIL } from "../actionstype/index.js";


const initialState = {
    allPokemons: [],
    copyAllPokemons: [],
    allTypes: [],
    copyALlTypes: [],
    pokemonDetail: [],

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
                allTypes: payload,
                copyALlTypes: payload
            }
        case GET_POKEMON_ID:
            return {
                ...state,
                pokemonDetail: payload
            }
        case GET_POKEMON_NAME:
            return {
                ...state,
                allPokemons: payload
            }
        case POST_POKEMON:
            return {
                ...state,
                allPokemons: payload
            }
        case FILTER_POKE:
            return {
                ...state,
                allPokemons: payload === 'All' ? [...state.copyAllPokemons]
                :payload==='creado'? state.copyAllPokemons.filter(e => e.createdInDb)
                :payload==='api'? state.copyAllPokemons.filter(e => !e.createdInDb)
                :[...state.copyAllPokemons]
            }

        case FILTER_TYPE:

            return {
                ...state,
                allPokemons: 
                payload === 'allTypes' ? [...state.copyAllPokemons ]
                :state.copyAllPokemons.filter(e => e.types?.some( e=> e.name=== payload))
                
            }
        case ORDER_NAME:
            let orderName = [...state.allPokemons];

            return {
                ...state,
                allPokemons: 
                payload === 'default'? [...state.copyAllPokemons]
                :payload==='Asc'?orderName.sort((a, b) => { return a.name.localeCompare(b.name) }) 
                :payload==='Dec'?orderName.sort((a, b) => { return b.name.localeCompare(a.name) })
                :[...state.copyAllPokemons]
            }

        case ORDER_ATTACK:
            let orderAttack = [...state.allPokemons];

            return {
                ...state,
                allPokemons: 
                payload === 'default'? [...state.copyAllPokemons]
                :payload==='Asc'?orderAttack.sort((a, b) => { return a.attack-b.attack }) 
                :payload==='Dec'?orderAttack.sort((a, b) => { return b.attack-a.attack })
                :[...state.copyAllPokemons]
            }

        case RESET_DETAIL:
            return {
                ...state,
                pokemonDetail: []
            }

            

        
        default:
            return { ...state }

    }


};

export default reducer;
