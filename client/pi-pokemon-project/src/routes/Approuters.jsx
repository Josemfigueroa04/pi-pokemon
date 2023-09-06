import {Route,Routes} from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Home from '../pages/home/Home';

const Approuters = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/home" element={<Home/>}/>
                {/* <Route path="/detail/:id" element={<Pokemon/>}/>
                <Route path="/create" element={<CreatePokemon/>}/>
                <Route path="*" element={<NotFound/>}/> */}
            </Routes>
        </div>
    )
};

export default Approuters;