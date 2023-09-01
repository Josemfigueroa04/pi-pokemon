const {Pokemon, Type} = require('../../db');
const axios = require('axios');

const getPokemonApiControllers = async () => {
    // busco todos los pokemones en la API
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
    
    // devuelvo los pokemones encontrados con las propiedades que me interesan
    return data.results.map(pokemon => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            imagen: pokemon.sprites.front_default,
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map(type => {
                return { name: type.type.name }
            })
        }
    })
}

module.exports = {
    getPokemonApiControllers
}