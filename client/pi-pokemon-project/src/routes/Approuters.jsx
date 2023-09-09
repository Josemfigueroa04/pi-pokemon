import {Route,Routes} from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Home from '../pages/home/Home';
import Detail from '../pages/detail/Detail';

const Approuters = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                {/* <Route path="/create" element={<CreatePokemon/>}/>
                <Route path="*" element={<NotFound/>}/> */}
            </Routes>
        </div>
    )
};

export default Approuters;