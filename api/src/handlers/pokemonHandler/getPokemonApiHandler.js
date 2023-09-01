const { getPokemonApiControllers } = require('../../controllers/pokemonsControllers/getPokemonApiControllers');

const getPokemonApiHandler = async (req, res) => {

    try{
        const pokemonApi = await getPokemonApiControllers();
        res.status(200).json(pokemonApi);
    } catch (error){
        res.status(400).json({error:error.message});
    }

}

module.exports = {
    getPokemonApiHandler,
};