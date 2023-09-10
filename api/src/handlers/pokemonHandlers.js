const {createPokemonControllers} = require('../controllers/pokemonsControllers/createPokemonControllers');
const {getPokemonByIdControllers} = require('../controllers/pokemonsControllers/getPokemonByIdControllers');
const {getPokemonByNameControllers} = require('../controllers/pokemonsControllers/getPokemonByNameControllers');
const {getPokemonApiControllers} = require('../controllers/pokemonsControllers/getPokemonApiControllers');
const {getPokemonDbControllers} = require('../controllers/pokemonsControllers/getPokemonDbControllers');

const getPokemonHandler = async (req, res) => {
    const {name} = req.query;
       if (name) {
        try{
        const minName = name.toLowerCase();
        const pokemonByName = await getPokemonByNameControllers(minName);
        res.status(200).json(pokemonByName)
        }catch(error){
            res.status(400).json({error:error.message});
        };
        }else{
            try{
            const apiPokemons = await getPokemonApiControllers();
            const dbPokemons = await getPokemonDbControllers();
            const allPokemons = [...dbPokemons,...apiPokemons ]
            
            res.status(200).json(allPokemons);
            } catch (error){
                res.status(400).json({error:error.message});
            }
        } 
    
};

const getPokemonByIdHandler = async(req, res) => {
    const {id} = req.params;

    try{
        const response = await getPokemonByIdControllers(id);
        res.status(200).json(response);

    }catch (error){
        res.status(400).json({error:error.message});
    }
};

const createPokemonHandler = async (req, res) => {
    const {name, imagen, hp, attack, defense, speed, height, weight,type} = req.body;
    try {
        const response = await createPokemonControllers(name, imagen, hp, attack, defense, speed, height, weight,type);
        res.status(200).json(response);
    }catch (error){
        res.status(400).json({error:error.message});
    }
};



module.exports = {
    getPokemonHandler,
    getPokemonByIdHandler,
    createPokemonHandler,
};