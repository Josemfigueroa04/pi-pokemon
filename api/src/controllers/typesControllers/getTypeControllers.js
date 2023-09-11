const axios = require('axios');
const { Type } = require('../../db');

const getTypeControllers = async () => {
    // busco todos los tipos en la base de datos
    const findAlltypeDb = await Type.findAll();
    if (findAlltypeDb.length) return findAlltypeDb;

    // busco todos los tipos en la API
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    const { results } = response.data;

    const type = results.map(type => ({
        name: type.name
    }));

    // creo los tipos en la base de datos
    return await Type.bulkCreate(type);
}


module.exports = {
    getTypeControllers
}