import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getTypes } from "../../redux/actions/index.js";
import imagen from "../../imagenes/pokeLogo.png";
import style from "./Create.module.css";

const Create = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allTypes = useSelector((state) => state.allTypes);


    useEffect(() => {
        dispatch(getTypes());
    }, []);

    //creo un estado local para crear el pokemon

    const [input, setInput] = useState({
        name: "",
        imagen: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        type: [],

    });
    useEffect(() => {
        validate()
    }, [input])

    console.log(input);
    console.log(allTypes);


    const [errors, setErrors] = useState({
        name: "",
        imagen: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        type: "",
    });

    const validate = () => {
        if (!input.name) {
            setErrors({ name: "*this field can not be blank" })
            return;
        }
        if (!/^[a-zA-Z]+$/.test(input.name)) {
            setErrors({ name: "*this field can only contain letters" })
            return;
        }
         if (input.name.length > 15) {
            setErrors({ name: "*pokemon name cannot be longer than 15 characters" })
            return;
        }

        if (!/\.(jpg|png|gif)$/i.test(input.imagen)) {
            setErrors({ imagen: "The url you are trying to place is not valid" })
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
        if (input.type.length === 0) {
            setErrors({ type: "*this field can not be blank" })
            return;
        }
        if (input.type.length > 4) {
            setErrors({ type: "*there can be no more than 4 types" })
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
            type: "",
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
            ...input, [e.target.name]: [...input[e.target.name].filter(t => t !== e.target.id)]
        });
    };


    //Logica para actualizar el estado del pokemon mediante el formulario
    const handleInputChange = (e) => {

        if (e.target.name === "type") {
            if (input.type.includes(e.target.value)) return;
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
        resetForm();
    };

    const resetForm = () => {
        setInput({
            name: "",
            imagen: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            type: [],
        })
    };

    return (
        <div className={style.create}>
            <a className="" onClick={() => navigate("/home")}>
                <img src={imagen} title="Home" />
            </a><h1>Create your Pokemon</h1>
            <div className={style.create__container}>

                <form onSubmit={handleSubmit}>
                    <div className={style.name}>
                        <label>Name: </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="name"
                            value={input.name}
                        />
                        <span>{errors.name}</span>
                    </div>
                    <div className={style.imagen}>
                        <label htmlFor="imagen">Imagen: </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="imagen"
                            value={input.imagen}
                        />
                        <span>{errors.imagen}</span>
                    </div>
                    <div className={style.hp}>
                        <label htmlFor="hp">HP</label>
                        <input
                            onChange={handleInputChange}
                            type="range"
                            min={10}
                            max={200}
                            name="hp"
                            value={input.hp}
                        />
                        <p>{input.hp}</p>
                        <span>{errors.hp}</span>
                    </div>
                    <div className={style.attack}>
                        <label htmlFor="attack">Attack:</label>
                        <input
                            onChange={handleInputChange}
                            type="range"
                            min={10}
                            max={200}
                            name="attack"
                            value={input.attack}
                        />
                        <p>{input.attack}</p>
                        <span>{errors.attack}</span>
                    </div>

                    <div className={style.defense}>
                        <label htmlFor="defense">Defense</label>
                        <input
                            onChange={handleInputChange}
                            type="range"
                            min={10}
                            max={200}
                            name="defense"
                            value={input.defense}
                        />
                        <p>{input.defense}</p>
                        <span>{errors.defense}</span>

                    </div>
                    <div className={style.speed}>
                        <label htmlFor="speed">Speed</label>
                        <input
                            onChange={handleInputChange}
                            type="range"
                            min={10}
                            max={200}
                            name="speed"
                            value={input.speed}
                        />
                        <p>{input.speed}</p>
                        <span>{errors.speed}</span>
                    </div>
                    <div className={style.height}>
                        <label htmlFor="height">Height</label>
                        <input
                            onChange={handleInputChange}
                            type="range"
                            min={10}
                            max={200}
                            name="height"
                            value={input.height}
                        />
                        <p>{input.height}</p>
                        <span>{errors.height}</span>
                    </div>
                    <div className={style.weight}>
                        <label htmlFor="weight">Weight</label>
                        <input
                            onChange={handleInputChange}
                            type="range"
                            min={10}
                            max={200}
                            name="weight"
                            value={input.weight}
                        />
                        <p>{input.weight}</p>
                        <span>{errors.weight}</span>
                    </div>
                    <div className={style.types}>
                        <label >Type</label>
                        <select name="type" onChange={handleInputChange}>
                            {allTypes?.map((t) => (<option value={t.name} key={t.id} id={t.id}> {t.name}</option>))}
                        </select>
                        <span>{errors.type}</span>
                    </div>
                    <div className={style.typeselect}>
                        {input.type.map((t) => <div id={t} key={t}>
                            <label >{t}</label> <button name="type" key={t} id={t} onClick={handleDelete}>X</button>
                        </div>)}
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