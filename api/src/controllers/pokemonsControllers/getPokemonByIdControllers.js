const {Pokemon, Type} = require('../../db');
const axios = require('axios');

const getPokemonByIdControllers = async (id) => {
    //verifico que el ID no sea un numero
    if (isNaN(Number(id))){
        //busco el pokemon en la base de datos
        const findPokemon = await Pokemon.findByPk(id, {
            include:{
            model:Type,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }});
        if (!findPokemon) throw new Error('Pokemon not found');
        return findPokemon;
    }

    //busco el pokemon en la API
    const {data} = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
    const pokemonId = {
        id: id,
        name: data.name,
        imagen: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        types: data.types.map(type => {
            return { name: type.type.name }
        })
    }

    return pokemonId;
}

module.exports = {
    getPokemonByIdControllers
}
