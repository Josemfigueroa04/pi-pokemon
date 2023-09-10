const validate = (input, li) => {
    let errors = {};
       
    if (!input.name) {
       errors.name = "Enter a name";
    }
    if (!/\.(jpg|png|gif)$/i.test(input.imagen)){ 
       errors.imagen = "The url you are trying to place is not valid";
    }
    if (input.hp > 150 || input.hp < 1 || !/\d/g.test(input.hp)) {
       errors.hp = "The value must be between 1 and 150 of Life";
    }
    if (input.attack > 150 || input.attack < 1 || !/\d/g.test(input.attack)) {
       errors.attack = "The value must be between 1 and 150 attack";
    }
    if (input.defense > 150 || input.defense < 1 || !/\d/g.test(input.defense)) {
       errors.defense = "The value must be between 1 and 150 defense";
    }
    if (input.speed > 150 || input.speed < 1 || !/\d/g.test(input.speed)) {
       errors.speed = "The value must be between 1 and 150 speed";
    }
    if (input.weight > 150 || input.weight < 1 || !/\d/g.test(input.weight)) {
       errors.weight = "The value must be between 1 and 150 weight";
    }
    if (input.height > 150 || input.height < 1 || !/\d/g.test(input.height)) {
       errors.height = "The value must be between 1 and 150 height";
    }
    if(!li) {
       errors.types ="Choose a type of Pokemon"
    } else {
       errors.types = null
    }
    return errors
 }
 
 
 export default validate;