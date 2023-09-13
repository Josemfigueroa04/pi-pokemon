const axios = require('axios');
const { Pokemon } = require('../../db');
const { getTypeControllers } = require('../typesControllers/getTypeControllers');

const createPokemonControllers = async (name, imagen, hp, attack, defense, speed, height, weight, type) => {

    //creacion de pokemon validacion de datos
    if (!name  || !hp || !attack || !defense || !speed) {
        throw {
            status: false,
            message: 'Missing required information'
        }
    };

    //convierto el nombre a minuscula
    name = name.toLowerCase();

    //valido que el nombre no contenga numeros
    if (name.match(/\d+/g)) {
        throw {
            status: false,
            message: 'The name must not contain numbers'
        }
    };
    if (!imagen){
        imagen = 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png'
    }
  

    //busco el pokemon en la base de datos
    const pokemonExists = await Pokemon.findOne({ where: { name } });

    //si el pokemon existe en la base de datos, lanzo un error
    if (pokemonExists) {
        throw {
            status: false,
            message: 'The Pokemon already exist! Choose another name'
        }
    };

    //creo el pokemon en la base de datos
    const createdPokemon = await Pokemon.create({ name, imagen, hp, attack, defense, speed, height, weight });

    //busco el tipo en la base de datos
    const alltypes = await getTypeControllers();

    const filtertype = type.map(type => (
        alltypes.find(t => t.name === type)
    ))

    //asocio el pokemon con el tipo
    createdPokemon.addType(filtertype);

    return createdPokemon;
}

module.exports = {
    createPokemonControllers
}
