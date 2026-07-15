import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './acceuil';
import Billet from './Billet';
import Gallerie from './gallerie';

const Mesroute = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Acceuil/>}/>
                    <Route path="/Billet" element={<Billet/>} />
                    <Route path="/gallerie" element={<Gallerie/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default Mesroute