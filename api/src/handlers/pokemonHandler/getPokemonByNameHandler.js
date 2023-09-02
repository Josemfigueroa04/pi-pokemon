const {getPokemonByNameControllers} = require('../../controllers/pokemonsControllers/getPokemonByNameControllers');

const getPokemonByNameHandler = async (req, res) => {
    const {name} = req.query;
    try{
        const minName = name.toLowerCase();
        const pokemonByName = await getPokemonByNameControllers(minName);
        res.status(200).json(pokemonByName)
    }catch(error){
        res.status(400).json({error:error.message});
    }
    
};

module.exports = {
    getPokemonByNameHandler,
};