import { GET_POKEMONS } from "../actionstype/index.js";


const initialState = {
    allPokemons: [],
    allTypes: [],
    pokemonDetail: {},
    pokemonCreated: {},

};

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: payload
            }
           
        
        default:
            return { ...state }

    }


};

export default reducer;
