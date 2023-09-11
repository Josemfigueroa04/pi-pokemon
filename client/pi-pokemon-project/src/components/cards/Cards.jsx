
import Card from "../card/Card"
import  style  from "./Cards.module.css";

const Cards = ({ pokemonsPaginados }) => {

    const pokemonList = pokemonsPaginados;

    return (

        <div className={style.cards_container}>
            {pokemonList?.map((pokemon) => (
                <Card
                    key={pokemon.id}
                    pokemon={pokemon}
                />
            ))}
        </div>

    );
}

export default Cards;

