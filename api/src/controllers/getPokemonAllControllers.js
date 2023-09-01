const {Pokemon, Type} = require('../db');
const axios = require('axios');

const getPokemonAllControllers = async () => {
    const pokemonDb = await Pokemon.findAll({include: Type});
    const pokemonApi = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')).data;
    


}