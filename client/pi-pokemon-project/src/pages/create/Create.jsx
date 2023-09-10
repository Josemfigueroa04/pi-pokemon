import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { postPokemon } from "../../redux/actions/index.js";
import { validate } from "../../funtion/validate";

import "./Create.style.css";


const Create = () => {

    const dispatch = useDispatch();
    const allTypes = useSelector((state) => state.allTypes);

    //creo un estado local para crear el pokemon

    const [input, setInput] = useState({
        name: "",
        imagen:"https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
        hp: 100,
        attack: 100,
        defense: 100,
        speed: 100,
        height: 100,
        weight: 100,
        types: [],
    });

    const [errors, setErrors] = useState({
        name: "",
        imagen: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: "",
    });
    


    
    //Logica para actualizar el estado del pokemon mediante el formulario
    const handleInputChange = (e) => {
        setInput({...input,[e.target.name]: e.target.value});
        setErrors(validate({...input,[e.target.name]: e.target.value}));
    };

    //logica para controlar los tipos del pokemon mediante el formulario
    const handleTypeSelectChange = (typeName) => {
       if (input.types.includes(typeName)) {
        // Si el tipo ya está en el array, lo eliminamos
        const updatedTypes = input.types.filter((t) => t !== typeName);
        setInput({...input, types: updatedTypes});
        setErrors(validate({...input, types: updatedTypes}));
         } else {
             // Si el tipo no está en el array, lo agregamos
            const updatedTypes = [...input.types, typeName];
            setInput({...input, types: updatedTypes});
            setErrors(validate({...input, types: updatedTypes}));
        } 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPokemon(input));
        setInput({
            name: "",
            image: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: [],
        });
        alert("Pokemon created successfully");
    };

    return (
        <div className="create">
            <div className="create__container">
                <h1>Create your Pokemon</h1>
                <form onSubmit={handleSubmit}>
                    <div className="create__container--inputs">
                        <div className="create__container--inputs--name">
                            <label>Name</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="name"
                                value={input.name}
                            />
                            {errors.name? <p className="danger">{errors.name}</p>:null}
                        </div>
                        <div className="create__container--inputs--image">
                            <label htmlFor="imagen">Imagen</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="imagen"
                                value={input.imagen}
                            />
                            {errors.imagen?<p className="danger">{errors.image}</p>:null}
                        </div>
                        <div className="create__container--inputs--hp">
                            <label htmlFor="hp">HP</label>
                            <input
                                onChange={handleInputChange}
                                type="range"
                                min={10}
                                max={200}
                                name="hp"
                                value={input.hp}
                            />
                            {errors.hp?<p className="danger">{errors.hp}</p>:null}
                        </div>
                        <div className="create__container--inputs--attack">
                            <label htmlFor="attack">Attack:</label>
                            <input
                                onChange={handleInputChange}
                                type="range"
                                min={10}
                                max={200}
                                name="attack"
                                value={input.attack}
                            />
                            {errors.attack ? <p className="danger">{errors.attack}</p> : null}
                        </div>

                        <div className="create__container--inputs--defense">
                            <label htmlFor="defense">Defense</label>
                            <input
                                onChange={handleInputChange}
                                type="range"
                                min={10}
                                max={200}
                                name="defense"
                                value={input.defense}
                            />
                            {errors.defense ? <p className="danger">{errors.defense}</p> : null}
                        
                        </div>
                        <div className="create__container--inputs--speed">
                            <label htmlFor="speed">Speed</label>
                            <input
                                onChange={handleInputChange}
                                type="range"
                                min={10}
                                max={200}
                                name="speed"
                                value={input.speed}
                            />
                            {errors.speed ? <p className="danger">{errors.speed}</p> : null}
                        </div>
                        <div className="create__container--inputs--height">
                            <label htmlFor="height">Height</label>
                            <input
                                onChange={handleInputChange}
                                type="range"
                                min={10}
                                max={200}
                                name="height"
                                value={input.height}
                            />
                            {errors.height ? <p className="danger">{errors.height}</p> : null}
                            
                        </div>
                        <div className="create__container--inputs--weight">
                            <label htmlFor="weight">Weight</label>
                            <input
                                onChange={handleInputChange}
                                type="number"
                                min={10}
                                max={200}
                                name="weight"
                                value={input.weight}
                            />
                            {errors.weight ? <p className="danger">{errors.weight}</p> : null}
                            
                        </div>

                        <div className="create__container--inputs--types">

                            <label htmlFor="types">Types</label>
                        
                    {/* inserto los botones segun la cantidad de tipos y cambio los estilos del boton dependiendo si esta seleccionado o no */}
                    {allTypes?.map((t) => (
                        input.types.includes(t.name) ? (
                        <button key={t.id} onClick={() => handleTypeSelection(t.name)}>
                        {t.name}
                        </button>
                        ) : (
                        <button key={t.id} onClick={() => handleTypeSelection(t.name)}>
                        {t.name}
                        </button>
                        )
                    ))}
                
                {errors.types?<p>{errors.types}</p>:null}
                
                            
                        </div>
                    </div>
                    <button type="submit">Create Pokemon</button>
                </form>
            </div>
        </div>
    );
}

export default Create;