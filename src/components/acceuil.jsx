import '../App.css';
import coverImage from '../images2/couverture.png';
import { useNavigate } from 'react-router-dom';

function Acceuil () {

    const navigate = useNavigate();

    const handlenavigate = (path) => (event) => {
        event.preventDefault();
        // Handle login logic here
        navigate(path);
    };

    return(
         <div className="bb1" style={{ backgroundImage: `url(${coverImage})` }}>
                <div className="bb2">
                  <p className="eyebrow">Mariage de</p>
                  <h1>Grace</h1>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', margin: '6px 0px' }}>
                    <span style={{ width: '46px', height: '1px', background: 'rgba(255, 255, 255, 0.7)' }}></span>
                    <span style={{ fontFamily: 'serif', fontWeight: 500, fontSize: '17px', letterSpacing: '0.1em', textShadow: 'rgba(46, 10, 40, 0.7) 0px 2px 10px' }}>&</span>
                    <span style={{ width: '46px', height: '1px', background: 'rgba(255, 255, 255, 0.7)' }}></span>
                  </div>
                  <h1>David</h1>
                  <p>31 juillet & 1er août 2026</p>
                  <button onClick={handlenavigate('/Billet')} style={{ display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center', margin: '0 auto', 
                    alignItems: 'center', gap: '5px', borderRadius: '26px', backgroundColor: '#193BA2', color: 'rgb(255, 255, 255)', fontWeight: 700, fontSize: '14px', padding: '14px 34px', cursor: 'pointer', boxShadow: 'rgba(75, 17, 65, 0.5) 0px 10px 28px', border: 'none', transition: 'all 0.3s ease 0s' }}>
                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1.5" y="2.5" width="23" height="15" rx="2.5"></rect>
                      <path d="M2.5 4 L13 11 L23.5 4"></path>
                    </svg>
                    Ouvrez l'invitation
                  </button>
                </div>
              </div>
    );
}

export default Acceuil;