import "./Cards.style.css"
import Card from "../card/Card"

const Cards = ({allPokemons}) => {

   const pokemonList = allPokemons;
   console.log(pokemonList)

    return (
        <div className="cards">
            <div className="cards__container">
                {  pokemonList?.map((pokemon) => (
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

