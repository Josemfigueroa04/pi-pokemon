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

            <Cards allPokemons={allPokemons}/>
        </div>
    )
}

export default Home;