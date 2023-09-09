const {Pokemon, Type} = require('../../db');
const axios = require('axios');

const getPokemonDbControllers = async () => {
    // busco todos los pokemones en la base de datos
    const pokemonDb = await Pokemon.findAll({include: 
        {model:Type,
        attributes:['name'],
        through:{
            attributes:[]
        }
    }});
   
    
    // devuelvo los pokemones encontrados con las propiedades que me interesan
    return pokemonDb.map(pokemon => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            imagen: pokemon.imagen,
            hp: pokemon.hp,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
            createdInDb: true,
            types: pokemon.types.map(type => {
                return { name: type.name }
            })
        }
    })
}

    module.exports = {
        getPokemonDbControllers
    }

