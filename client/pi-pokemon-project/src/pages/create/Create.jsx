import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPokemon } from "../../redux/actions/index.js";

import "./Create.style.css";


const Create = () => {
    const [input, setInput] = useState({
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

    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    };

    const handleSelectChange = (e) => {
        setInput({
            ...input,
            types: [...input.types, e.target.value],
        });
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
                <h1>Create your own Pokemon</h1>
                <form onSubmit={handleSubmit}>
                    <div className="create__container--inputs">
                        <div className="create__container--inputs--name">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="name"
                                value={input.name}
                            />
                            {errors.name && (
                                <p className="danger">{errors.name}</p>
                            )}
                        </div>
                        <div className="create__container--inputs--image">
                            <label htmlFor="image">Image</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="image"
                                value={input.image}
                            />
                            {errors.image && (
                                <p className="danger">{errors.image}</p>
                            )}
                        </div>
                        <div className="create__container--inputs--hp">
                            <label htmlFor="hp">HP</label>
                            <input
                                onChange={handleInputChange}
                                type="number"
                                name="hp"
                                value={input.hp}
                            />
                            {errors.hp && (
                                <p className="danger">{errors.hp}</p>
                            )}
                        </div>
                        <div className="create__container--inputs--attack">
                            <label htmlFor="attack">Attack</label>
                            <input
                                onChange={handleInputChange}
                                type="number"
                                name="attack"
                                value={input.attack}
                            />
                            {errors.attack && (
                                <p className="danger">{errors.attack}</p>
                            )}
                        </div>

                        <div className="create__container--inputs--defense">
                            <label htmlFor="defense">Defense</label>
                            <input
                                onChange={handleInputChange}
                                type="number"
                                name="defense"
                                value={input.defense}
                            />
                            {errors.defense && (
                                <p className="danger">{errors.defense}</p>
                            )}

                        </div>
                        <div className="create__container--inputs--speed">
                            <label htmlFor="speed">Speed</label>
                            <input
                                onChange={handleInputChange}
                                type="number"
                                name="speed"
                                value={input.speed}
                            />
                            {errors.speed && (
                                <p className="danger">{errors.speed}</p>
                            )}
                        </div>
                        <div className="create__container--inputs--height">
                            <label htmlFor="height">Height</label>
                            <input
                                onChange={handleInputChange}
                                type="number"
                                name="height"
                                value={input.height}
                            />
                            {errors.height && (
                                <p className="danger">{errors.height}</p>
                            )}
                        </div>
                        <div className="create__container--inputs--weight">
                            <label htmlFor="weight">Weight</label>
                            <input
                                onChange={handleInputChange}
                                type="number"
                                name="weight"
                                value={input.weight}
                            />
                            {errors.weight && (
                                <p className="danger">{errors.weight}</p>
                            )}

                        </div>

                        <div className="create__container--inputs--types">

                            <label htmlFor="types">Types</label>
                            <select
                                onChange={handleSelectChange}
                                name="types"
                                value={input.types}
                            >
                                <option value="normal">Normal</option>
                                <option value="fighting">Fighting</option>
                                <option value="flying">Flying</option>
                                <option value="poison">Poison</option>
                                <option value="ground">Ground</option>
                                <option value="rock">Rock</option>
                                <option value="bug">Bug</option>
                                <option value="ghost">Ghost</option>
                                <option value="steel">Steel</option>
                                <option value="fire">Fire</option>
                                <option value="water">Water</option>
                                <option value="grass">Grass</option>
                                <option value="electric">Electric</option>
                                <option value="psychic">Psychic</option>
                                <option value="ice">Ice</option>
                                <option value="dragon">Dragon</option>
                                <option value="dark">Dark</option>
                                <option value="fairy">Fairy</option>
                                <option value="unknown">Unknown</option>
                                <option value="shadow">Shadow</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit">Create Pokemon</button>
                </form>
            </div>
        </div>
    );
}

export default Create;