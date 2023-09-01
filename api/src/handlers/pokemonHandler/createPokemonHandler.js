const { createPokemonControllers } = require('../../controllers/pokemonsControllers/createPokemonControllers');


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
    createPokemonHandler,
};