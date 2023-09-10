import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getTypes } from "../../redux/actions/index.js";
import style from "./Create.style.css";


import "./Create.style.css";


const Create = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allTypes = useSelector((state) => state.allTypes);


    useEffect(() => {
        if (allTypes.length === 0) {
            dispatch(getTypes());
        }
    }, []);

    //creo un estado local para crear el pokemon

    const [input, setInput] = useState({
        name: "",
        imagen: "",
        hp: "",
        attack:"" ,
        defense:"" ,
        speed: "",
        height: "",
        weight: "",
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

    const validate = () => {
        if (!input.name) {
            setErrors({ name: "*this field can not be blank" })
            return;
        }
        if (input.name.length > 15) {
            setErrors({ name: "*pokemon name cannot be longer than 15 characters" })
            return;
        }
        if (!input.types.length) {
            setErrors({ types: "*this field can not be blank" })
            return;
        }
        if (input.types.length > 4) {
            setErrors({ types: "*there can be no more than 4 types" })
            return;
        }
        if (input.hp < 10 || input.hp > 200 && typeof input.hp !== "number") {
            setErrors({ hp: "*this field must have a value between 10 and 200" })
            return;
        }
        if (input.attack < 10 || input.attack > 200 && typeof input.attack !== "number") {
            setErrors({ attack: "*this field must have a value between 10 and 200" })
            return;
        }
        if (input.defense < 10 || input.defense > 200 && typeof input.defense !== "number") {
            setErrors({ defense: "*this field must have a value between 10 and 200" })
            return;
        }
        if (input.speed < 10 || input.speed > 200 && typeof input.speed !== "number") {
            setErrors({ speed: "*this field must have a value between 10 and 200" })
            return;
        }
        if (input.height < 10 || input.height > 200 && typeof input.height !== "number") {
            setErrors({ height: "*this field must have a value between 10 and 200" })
            return;
        }
        if (input.weight < 10 || input.weight > 200 && typeof input.weight !== "number") {
            setErrors({ weight: "*this field must have a value between 10 and 200" })
            return;
        }
        if (!input.imagen) {
            setErrors({ imagen: "*this field can not be blank" })
            return;
        }

        setErrors({
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
    };

    const disableButton = () => {
        let disableAux = true;
        for (let err in errors) {
            if (errors[err] === "") disableAux = false;
            else {
                disableAux = true;
                break;
            }
        }
        return disableAux;
    };

    const handleDelete = (e) => {
        setInput({
            ...input, [e.target.name]: [...input[e.target.name].filter(p => p !== e.target.id)]
        });
    };


    //Logica para actualizar el estado del pokemon mediante el formulario
    const handleInputChange = (e) => {
        // setInput({ ...input, [e.target.name]: e.target.value });
        // setErrors(validate({ ...input, [e.target.name]: e.target.value }));
        if (e.target.name === "types") {
            if (input.types.includes(e.target.value)) return;
            setInput({ ...input, [e.target.name]: [...input[e.target.name], e.target.value] })
        } else {
            setInput({ ...input, [e.target.name]: e.target.value });
        }
        validate({
            ...input, [e.target.name]: e.target.value,
        }, e.target.name);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postPokemon(input));

    };

    return (
        <div className="create">
            <a className="" onClick={() => navigate("/home")}>
                <img src={"img"} title="Home" />
            </a>
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
                            <span>{errors.name}</span>
                        </div>
                        <div className="create__container--inputs--image">
                            <label htmlFor="imagen">Imagen</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="imagen"
                                value={input.imagen}
                            />
                            <span>{errors.imagen}</span>
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
                            <span>{errors.hp}</span>
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
                            <span>{errors.attack}</span>
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
                            <span>{errors.defense}</span>

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
                            <span>{errors.speed}</span>
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
                            <span>{errors.height}</span>

                        </div>
                        <div className="create__container--inputs--weight">
                            <label htmlFor="weight">Weight</label>
                            <input
                                onChange={handleInputChange}
                                type="range"
                                min={10}
                                max={200}
                                name="weight"
                                value={input.weight}
                            />
                            <span>{errors.weight}</span>

                        </div>

                        <div className={style.div_container}>
                            <label>Types</label>
                            <select
                                name="types"
                                onChange={handleInputChange}
                                className={style.selection_container}
                            >
                                {allTypes?.map((t) => (
                                    <option
                                        value={t.name}
                                        // className={`${style.platform_btn} ${types.id === t.id ? style.active_genre : null
                                        //     }`}
                                        id={t.id}
                                        key={t.id}
                                    >
                                        {t.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={style.Genres_seleted}>
                            {
                                input.types.map((t) => <div key={t} id={t}>
                                    <label >{t}</label> <button name='types' key={t} id={t} onClick={handleDelete}>X</button>
                                </div>)
                            }
                        </div>
                    </div>
                    <button disabled={disableButton()} type="submit">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;