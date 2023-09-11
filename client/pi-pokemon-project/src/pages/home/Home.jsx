import Nav from "../../components/navbar/Nav";
import Cards from "../../components/cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPokemons, getPokemonName } from "../../redux/actions/index.js";
import Filter from "../../components/filter/Filter.jsx";
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


    useEffect(() => {
        setPaginado(1);
    }, [allPokemons]);

    function handleInputChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getPokemonName(search));
    }


    useEffect(() => {
        dispatch(getPokemons());
        return () => {
            dispatch(getPokemons());
        }
    }, []);


    return (
        <div>
            <Nav handleInputChange={handleInputChange} handleSubmit={handleSubmit} />

                <Filter />
            
            <div className="pags">
                <button onClick={() => setPaginado(1)}>primera pagina</button>
                <button disabled={paginado <= 1} onClick={() => setPaginado(paginado - 1)}>PREV</button>
                <div className="num_pag">
                    {numeroPaginas?.map((numero) => (
                        <button  key={numero} onClick={() => setPaginado(numero)}>{numero}</button>
                    ))}
                </div>
                <button disabled={paginado === indexUltimoPokemon} onClick={() => setPaginado(paginado + 1)}>NEXT</button>
                <button onClick={() => setPaginado(indexUltimoPokemon)}>ultima pagina</button>
            </div>



            <Cards pokemonsPaginados={pokemonsPaginados} />
        </div>
    )
}

export default Home;