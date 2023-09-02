const {Pokemon, Type} = require('../../db');
const axios = require('axios');

const getPokemonApiControllers = async () => {
    // busco todos los pokemones en la API
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1281');

    // devuelvo los pokemones encontrados con las propiedades que me interesan
    const pokemonApi = data.results.map(async pokemon => {
        const {data} = await axios.get(pokemon.url);
        return {
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
    }
    )
    // devuelvo los pokemones encontrados con las propiedades que me interesan y espero que se den todas las promesas
    return Promise.all(pokemonApi);
}

module.exports = {
    getPokemonApiControllers
}