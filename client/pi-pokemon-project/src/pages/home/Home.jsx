import Nav from "../../components/navbar/Nav";
import Cards from "../../components/cards/Cards";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import  {getPokemons}  from "../../redux/actions/index.js";

const Home = () => {
    const allPokemons = useSelector((state) => state.allPokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, []);


    return (
        <div>
            <Nav/>
            <Cards allPokemons={allPokemons}/>
        </div>
    )
}

export default Home;