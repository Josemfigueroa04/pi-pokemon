const {getPokemonByNameControllers} = require('../../controllers/pokemonsControllers/getPokemonByNameControllers')
const {getPokemonApiControllers} = require('../../controllers/pokemonsControllers/getPokemonApiControllers')
const {getPokemonDbControllers} = require('../../controllers/pokemonsControllers/getPokemonDbControllers')

const getPokemonHandler = async (req, res) => {
    const {name} = req.query;
    const minName = name.toLowerCase();
    try{
       if (minName) {
        const pokemonByName = await getPokemonByNameControllers(minName);
        res.status(200).json(pokemonByName)
        
        }else{
            const apiPokemons = await getPokemonApiControllers();
            const dbPokemons = await getPokemonDbControllers();
            const allPokemons = apiPokemons.concat(dbPokemons);
            
            res.status(200).json(allPokemons);
        } 
    } catch (error){
        res.status(400).json({error:error.message});
    }
    
};

module.exports = {
    getPokemonHandler,
};