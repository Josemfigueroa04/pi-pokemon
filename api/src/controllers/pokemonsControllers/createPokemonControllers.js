const axios = require('axios');
const { Pokemon } = require('../../db');
const { getTypeControllers } = require('../typesControllers/getTypeControllers');

const createPokemonControllers = async (name, imagen, hp, attack, defense, speed, height, weight,type) => {

    //creacion de pokemon validacion de datos
    if(!name || !imagen || !hp || !attack || !defense || !speed ) throw new Error({message:'Faltan datos'});

    //busco el pokemon en la base de datos
    const pokemonExists = await Pokemon.findOne({where:{name}});

    //si el pokemon existe en la base de datos, lanzo un error
    if(pokemonExists) throw new Error({message:'El pokemon ya existe'});

    //creo el pokemon en la base de datos
    const createdPokemon= await Pokemon.create({name, imagen, hp, attack, defense, speed, height, weight});

    //busco el tipo en la base de datos
    const alltypes = await getTypeControllers();
    
    const filtertype= type.map(type => (
        alltypes.find(t => t.name === type)
    ))
    
    //asocio el pokemon con el tipo
    createdPokemon.addType(filtertype);

    return createdPokemon;
}

module.exports = {
    createPokemonControllers
}
