const axios = require('axios');
const { Type } = require('../../db');

const getTypeControllers = async () => {
    // busco todos los tipos en la base de datos
    const findAlltypeDb = await Type.findAll();
    if(findAlltypeDb.length > 0) return findAlltypeDb;

    // busco todos los tipos en la API
    const {data} = await axios.get('https://pokeapi.co/api/v2/type');

    //guardo los type de la api en la base de datos
    const typesApiDb = data.results.map(async(type) => {
        await Type.create({
            name: type.name
        })
    })
    // se espera que se resuelvan todas las promesas para continuar
    await Promise.all(typesApiDb);

    // busco todos los tipos en la base de datos
    const findAlltypeDb2 = await Type.findAll();
    return findAlltypeDb2;
}


module.exports = {
    getTypeControllers
}