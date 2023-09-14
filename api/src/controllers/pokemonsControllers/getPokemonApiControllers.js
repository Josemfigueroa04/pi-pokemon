const axios = require('axios');

const getPokemonApiControllers = async () => {

  let allPokemon = []; // Array para almacenar todos los pokemones

  let url = 'https://pokeapi.co/api/v2/pokemon'; // URL inicial

  let i = 0;

  while (i < 3) {
    const { data } = await axios.get(url);
    const pokemonApi = data.results.map(async (pokemon) => {
      const { data } = await axios.get(pokemon.url);
      return {
        id: data.id,
        name: data.name,
        imagen: data.sprites.other["dream_world"].front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        createdInDb: false,
        types: data.types.map((type) => ({
          name: type.type.name,
        })),
      };
    });
    allPokemon = allPokemon.concat(await Promise.all(pokemonApi));

    url = data.next; // Actualizar la URL con la siguiente página o null si no hay más páginas
    i++;
  }

  return allPokemon;
};

module.exports = {
  getPokemonApiControllers
}