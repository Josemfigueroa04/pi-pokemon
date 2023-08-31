const getPokemonHandler = (req, res) => {
    const {name} = req.query;
    if (name) {
        res.send(`Buscar todos los usuarios que se llaman ${name}`);
    }else{
        res.send('Quiero enviar todos los usuarios');
    }
};

const getPokemonByIdHandler = (req, res) => {
    const {id} = req.params;
    res.send(`Va a enviar el detalle de el usuario de ID ${id}`);
};

const createPokemonHandler = (req, res) => {
    const {name, imagen, hp, attack, defense, speed, height, weight} = req.body;
    res.send(`Se va a crear un usuario con estos datos:
     nombre: ${name},
     vida: ${hp}, 
     ataque: ${attack},
     defensa: ${defense},
     velocidad: ${speed},
     altura: ${height},
     peso: ${weight}
     imagen: ${imagen}`);
};

module.exports = {
    getPokemonHandler,
    getPokemonByIdHandler,
    createPokemonHandler,
};
