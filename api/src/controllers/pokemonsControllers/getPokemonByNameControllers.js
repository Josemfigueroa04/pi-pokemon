const {Pokemon, Type} = require('../../db');
const axios = require('axios');
const { Op } = require('sequelize');



const getPokemonByNameControllers = async (name) => {
    //busco el pokemon en la base de datos por nombre
    const findPokemon = await Pokemon.findOne({where:{name}, include:
        {model:Type,
        attributes:['name'],
        through:{
            attributes:[]
        }
    }});
    // si encontramos el pokemon en la base de datos devolver estos valores:
    if (findPokemon) return{
        id: findPokemon.id,
        name: findPokemon.name,
        imagen: findPokemon.imagen,
        hp: findPokemon.hp,
        attack: findPokemon.attack,
        defense: findPokemon.defense,
        speed: findPokemon.speed,
        height: findPokemon.height,
        weight: findPokemon.weight,
        types: findPokemon.types
        };
        // si no encontramos el pokemon en la base de datos, buscarlo en la API
        const {data} = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`));
        const pokemonName = {
            id: data.id,
            name: data.name,
            imagen: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
            types: data.types.map(type => {
                return { name: type.type.name }
            })
        }
        if((!pokemonName || pokemonName.length ===0) && !findPokemon.length){
             throw new Error('Pokemon not found')};
        
        return [...pokemonName, ...findPokemon].slice(0, 15);
        
    }

    module.exports = {
        getPokemonByNameControllers
    }