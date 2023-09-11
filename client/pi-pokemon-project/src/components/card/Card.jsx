import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ pokemon }) => {
    const { id, name, imagen, types,attack } = pokemon;
    return (
        <Link to={`/detail/${id}`}>
            <div className={style.card_container}>
                <img src={imagen} alt={name} />
                <h2>{name}</h2>
                <p>Type:{types?.map(type => type.name).join(", ")}</p>
                <h5>Attack:{attack}</h5>
            </div>
        </Link>
    );
}

export default Card;