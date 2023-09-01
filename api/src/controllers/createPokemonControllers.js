const axios = require('axios');
const { Pokemon, Type } = require('../db');

const createPokemonControllers = async (name, imagen, hp, attack, defense, speed, height, weight,type) => {

    //creacion de pokemon
    const createdPokemon= await Pokemon.create({name, imagen, hp, attack, defense, speed, height, weight});

    //busco el tipo en la base de datos
    const findType = await Type.findOne({where:{name:type}});

    //asocio el pokemon con el tipo
    await createdPokemon.addType(findType);

    return createdPokemon;
}

module.exports = {
    createPokemonControllers
}
