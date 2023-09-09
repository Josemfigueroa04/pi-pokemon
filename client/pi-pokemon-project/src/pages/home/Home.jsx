import Nav from "../../components/navbar/Nav";
import Cards from "../../components/cards/Cards";
import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import  {getPokemons, getPokemonName}  from "../../redux/actions/index.js";
import Filter from "../../components/filter/Filter.jsx";


const Home = () => {
    const allPokemons = useSelector((state) => state.allPokemons);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [paginado, setPaginado] = useState(1);
    const pokemonsPagina = 12;
    const indexUltimoPokemon = Math.ceil(allPokemons.length / pokemonsPagina);
    const indexPrimerPokemon = (paginado-1) * pokemonsPagina;
    const pokemonsPaginados = allPokemons.slice(indexPrimerPokemon, indexPrimerPokemon+pokemonsPagina);
    console.log(pokemonsPaginados);

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
    }, []);


    return (
        <div>
            <Nav handleInputChange = {handleInputChange} handleSubmit= {handleSubmit} />
            <Filter/>
            <button disabled={paginado===indexUltimoPokemon} onClick={()=>setPaginado(paginado+1)}>NEXT</button>
            <button disabled={paginado<=1} onClick={()=>setPaginado(paginado-1)}>PREV</button>
            <button onClick={()=>setPaginado(indexUltimoPokemon)}>ultima pagina</button>
            <button onClick={()=>setPaginado(1)}>primera pagina</button>
            <Cards pokemonsPaginados={pokemonsPaginados}/>
        </div>
    )
}

export default Home;