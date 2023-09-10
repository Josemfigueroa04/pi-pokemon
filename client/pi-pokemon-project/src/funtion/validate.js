function isImageFile(fileName) {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const extension = fileName.substr(fileName.lastIndexOf(".")).toLowerCase();
    return imageExtensions.includes(extension);
}

const validate = (inputs) => {
    let errors = {};

    if(!inputs.name)errors.name = "*this field can not be blank";
    if(inputs.name.length > 15)errors.name = "*pokemon name cannot be longer than 15 characters";

    if(!inputs.types.length)errors.types = "*this field can not be blank";
    if(inputs.types.length > 4)errors.types = "*there can be no more than 4 types";

    if(inputs.hp < 10 || inputs.hp > 200 && typeof inputs.hp !== "number")errors.hp = "*this field must have a value between 10 and 200";
    if(inputs.damage < 10 || inputs.damage > 200 && typeof inputs.damage !== "number")errors.damage = "*this field must have a value between 10 and 200";
    if(inputs.defense < 10 || inputs.defense > 200 && typeof inputs.defense !== "number")errors.defense = "*this field must have a value between 10 and 200";
    if(inputs.speed < 10 || inputs.speed > 200 && typeof inputs.speed !== "number")errors.speed = "*this field must have a value between 10 and 200";

    if (inputs.img) {
        const isImage = isImageFile(inputs.img);
        if (!isImage) errors.img = "*invalid image format";
    };
    
    return errors
}

export default validate;