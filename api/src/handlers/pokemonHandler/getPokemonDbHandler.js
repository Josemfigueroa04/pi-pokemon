const {getPokemonDbControllers} = require('../../controllers/pokemonsControllers/getPokemonDbControllers');

const getPokemonDbHandler = async (req, res) => {
    try{
    const pokemonDb = await getPokemonDbControllers();
    res.status(200).json(pokemonDb);
    } catch (error){
        res.status(400).json({error:error.message});
    }
}

module.exports = {
    getPokemonDbHandler,
};