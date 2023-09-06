import "./Cards.style.css"
import Card from "../card/Card"

const Cards = ({allPokemons}) => {

   const pokemonList = allPokemons;

    return (
        <div className="cards">
            <h2>Cards</h2>
            <div className="cards__container">
                {pokemonList?.map((pokemon) => (
                    <Card
                    key={pokemon.id}
                    pokemon={pokemon}
                    />
                ))}
            </div>
        </div>
    );
    }

export default Cards;