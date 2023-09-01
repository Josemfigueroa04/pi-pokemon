const {Router} = require('express');

const pokemonsRouter = Router();

const {getPokemonHandler, getPokemonByIdHandler, createPokemonHandler, getPokemonApiHandler, getPokemonDbHandler} = require('../handlers/pokemonHandler');

pokemonsRouter.get('/', getPokemonHandler);

pokemonsRouter.get('/:id', getPokemonByIdHandler);

pokemonsRouter.post('/', createPokemonHandler);

pokemonsRouter.get('/api', getPokemonApiHandler);

pokemonsRouter.get('/db', getPokemonDbHandler);

module.exports = pokemonsRouter;