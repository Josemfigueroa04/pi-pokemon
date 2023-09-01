const { getPokemonByIdControllers } = require('../../controllers/pokemonsControllers/getPokemonByIdControllers');

const getPokemonByIdHandler = async(req, res) => {
    const {id} = req.params;

    try{
        const response = await getPokemonByIdControllers(id);
        res.status(200).json(response);

    }catch (error){
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    getPokemonByIdHandler,
};