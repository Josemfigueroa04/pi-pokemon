const {Router} = require('express');

const pokemonsRouter = Router();

const {getPokemonHandler, getPokemonByIdHandler, createPokemonHandler} = require('../handlers/pokemonHandlers');
const {getPokemonApiHandler} = require('../handlers/pokemonHandler/getPokemonApiHandler');
const {getPokemonDbHandler} = require('../handlers/pokemonHandler/getPokemonDbHandler');
const { getPokemonByNameHandler } = require('../handlers/pokemonHandler/getPokemonByNameHandler');



pokemonsRouter.get('/', getPokemonHandler);

pokemonsRouter.get('/:id', getPokemonByIdHandler);

pokemonsRouter.post('/', createPokemonHandler);


module.exports = pokemonsRouter;