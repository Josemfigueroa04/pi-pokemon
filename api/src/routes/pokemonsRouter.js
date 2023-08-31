const {Router} = require('express');

const pokemonsRouter = Router();

const {
    getPokemonHandler,
    getPokemonByIdHandler,
    createPokemonHandler,
} = require('../handlers/pokemonsHandlers')

pokemonsRouter.get('/', getPokemonHandler);

pokemonsRouter.get('/:id', getPokemonByIdHandler);

pokemonsRouter.post('/', createPokemonHandler);

module.exports = pokemonsRouter;