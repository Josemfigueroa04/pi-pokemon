const {Router} = require('express');

const pokemonsRouter = Router();

const {getPokemonHandler} = require('../handlers/pokemonHandler/getPokemonHandler');
const {getPokemonByIdHandler} = require('../handlers/pokemonHandler/getPokemonByIdHandler');
const {createPokemonHandler} = require('../handlers/pokemonHandler/createPokemonHandler');
const {getPokemonApiHandler} = require('../handlers/pokemonHandler/getPokemonApiHandler');
const {getPokemonDbHandler} = require('../handlers/pokemonHandler/getPokemonDbHandler');

pokemonsRouter.get('/', getPokemonHandler);

pokemonsRouter.get('/:id', getPokemonByIdHandler);

pokemonsRouter.post('/', createPokemonHandler);

pokemonsRouter.get('/api', getPokemonApiHandler);

pokemonsRouter.get('/db', getPokemonDbHandler);

module.exports = pokemonsRouter;