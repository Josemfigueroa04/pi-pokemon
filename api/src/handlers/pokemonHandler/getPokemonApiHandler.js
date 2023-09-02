const { getPokemonApiControllers } = require('../../controllers/pokemonsControllers/getPokemonApiControllers');

const getPokemonApiHandler = async (req, res) => {

    try{
        const pokemonsApi = await getPokemonApiControllers();
        res.status(200).json(pokemonsApi);
    } catch (error){
        res.status(400).json({error:error.message});
    }

}

module.exports = {
    getPokemonApiHandler,
};