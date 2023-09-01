const { createPokemonControllers } = require("../controllers/createPokemonControllers");
const { getPokemonByIdControllers } = require("../controllers/getPokemonByIdControllers");

const getPokemonHandler = async (req, res) => {
    const {name} = req.query;
    try{
       if (name) {
        const pokemonByName = await getPokemonByNameControllers(name);
        res.status(200).json(pokemonByName)
        }else{
            const allPokemons = await getPokemonAllControllers();
            res.status(200).json(allPokemons);
        } 
    } catch (error){
        res.status(400).json({error:error.message});
    }
    
};

const getPokemonByIdHandler = async(req, res) => {
    const {id} = req.params;
    const source = isNaN(id) ? 'db' : 'api';

    try{
        const response = await getPokemonByIdControllers(id, source);
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
    // res.send(`Se va a crear un usuario con estos datos:
    //  name: ${name},
    //  hp: ${hp}, 
    //  attack: ${attack},
    //  defense: ${defense},
    //  speed: ${speed},
    //  height: ${height},
    //  weight: ${weight}
    //  imagen: ${imagen}`);
};

module.exports = {
    getPokemonHandler,
    getPokemonByIdHandler,
    createPokemonHandler,
};
