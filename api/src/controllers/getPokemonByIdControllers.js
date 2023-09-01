const {Pokemon, Type} = require('../db');
const axios = require('axios');

const getPokemonByIdControllers = async (id, source) => {
    const pokemonId = source ===  'api'
    ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data 
    : await Pokemon.findByPk(id, {
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
            }})


    // const pokemonData = {
    //     id: pokemonId.id,
    //     name: pokemonId.name,
    //     img: pokemonId,
    //     hp: pokemonId.stats[0].base_stat,
    //     damage: pokemonId.stats[1].base_stat,
    //     defense: pokemonId.stats[2].base_stat,
    //     speed: pokemonId.stats[5].base_stat,
    //     types: pokemonId.types.map(type => {
    //         return { name: type.type.name }
    //     })
    // };

    return pokemonId;
}

module.exports = {
    getPokemonByIdControllers
}
