import Nav from "../../components/navbar/Nav";
import Cards from "../../components/cards/Cards";
import Filter from "../../components/filter/Filter.jsx";
import Loading from "../../components/loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPokemons, getPokemonName } from "../../redux/actions/index.js";
import './Home.style.css'

const Home = () => {
    const allPokemons = useSelector((state) => state.allPokemons);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [paginado, setPaginado] = useState(1);

    const pokemonsPagina = 12;
    const indexUltimoPokemon = Math.ceil(allPokemons.length / pokemonsPagina);
    const indexPrimerPokemon = (paginado - 1) * pokemonsPagina;
    const pokemonsPaginados = allPokemons.slice(indexPrimerPokemon, indexPrimerPokemon + pokemonsPagina);
    console.log(pokemonsPaginados);
    const numeroPaginas = [];
    for (let i = 1; i <= indexUltimoPokemon; i++) {
        numeroPaginas.push(i);
    }


    function handleInputChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getPokemonName(search));
        setPaginado(1);

    }

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    return (
        <div>
            {allPokemons.length > 0  ? (
                <>
                    <Nav handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                    <Filter setPaginado = {setPaginado} />
                    <div className="pags">
                        <button disabled={paginado <= 1} onClick={() => setPaginado(1)}>Start</button>
                        <button disabled={paginado <= 1} onClick={() => setPaginado(paginado - 1)}>PREV</button>
                        <div className="num_pag">
                            {numeroPaginas?.map((numero) => (
                                <button className={numero === paginado ? "current-page" : ""} key={numero} onClick={() => setPaginado(numero)}>{numero}</button>
                            ))}
                        </div>
                        <button disabled={paginado === indexUltimoPokemon} onClick={() => setPaginado(paginado + 1)}>NEXT</button>
                        <button disabled={paginado === indexUltimoPokemon} onClick={() => setPaginado(indexUltimoPokemon)}>End</button>
                    </div>

                    <Cards pokemonsPaginados={pokemonsPaginados} />
                </>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Home;