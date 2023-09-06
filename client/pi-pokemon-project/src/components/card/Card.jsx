import "./Card.style.css"

const Card = ({pokemon}) => {
    const {id, name, imagen, types} = pokemon;
    return (
        <div className="card">
            <h2>Card</h2>
            <div className="card__container">
                <img src={imagen} alt={name} />
                <h3>{name}</h3>
                <p>{types?.map(type=>type.name).join(", ")}</p>
            </div>
        </div>
    );
}

export default Card;