import { useEffect } from 'react';
import {orderByName,orderByAttack, filterPokemons, filterType,getPokemons,getTypes} from '../../redux/actions/index';
import { useDispatch,useSelector } from 'react-redux';


const Filter =() => {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons);
    const allTypes = useSelector((state) => state.allTypes);

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    }, []);


    const handleOrderName = (e) => {
        dispatch(orderByName(e.target.value))
    }
    const handleOrderAttack = (e) => {
        dispatch(orderByAttack(e.target.value))
    }

    const handleFilter = (e) => {
        dispatch(filterPokemons(e.target.value))
    }

    const handleFilterType = (e) => {
        dispatch(filterType(e.target.value))
    }



    return (
        <div>
            <select onChange={handleOrderName}>
                <option value="default">Name</option>
                <option value="Asc">A-Z</option>
                <option value="Dec">Z-A</option>
            </select>

            <select onChange={handleOrderAttack}>
                <option value="default">Attack</option>
                <option value="Asc">Attack Asc</option>
                <option value="Dec">Attack Desc</option>
            </select>

            <select onChange={handleFilter}>
                <option value="default">Filter</option>
                <option value="created">Created</option>
                <option value="api">Api</option>
            </select>

            <select onClick={handleFilterType} >
                <option value="allTypes">All Types</option>
                {allTypes?.map((t) => (
                    <option key={t.id} value={t.name}>
                        {t.name}
                    </option>
                ))}
        
                </select>


        </div>  
        



    )

}

export default Filter;

