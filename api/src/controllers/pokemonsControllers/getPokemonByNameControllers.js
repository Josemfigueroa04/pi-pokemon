const { Pokemon, Type } = require('../../db');
const axios = require('axios');
const { Op } = require('sequelize');


const getPokemonByNameControllers = async (name) => {
    //busco el pokemon en la base de datos por 

    const findPokemon = await Pokemon.findAll({
        where:
        {
            name:
                { [Op.iLike]: `${name}%` }
        }, include:
        {model:Type,
        attributes:['name'],
        through:{
            attributes:[]
        }
    }});

    try {
        const { data } = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`));
        const pokemonName = {
            id: data.id,
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
        return findPokemon.concat([pokemonName]);
    }
    catch (error) {
        if (!findPokemon.length) {throw new Error('Pokemon not found')}
        return findPokemon 
    }


}

module.exports = {
    getPokemonByNameControllers
}