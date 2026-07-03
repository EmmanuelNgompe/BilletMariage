import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './acceuil';
import Billet from './Billet';

const Mesroute = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Acceuil/>}/>
                    <Route path="/Billet" element={<Billet/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default Mesroute