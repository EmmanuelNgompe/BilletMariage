import '../App.css';
import coverImage from '../images2/cover2.webp';
import coverImage2 from '../images/profilCover.webp';
import couplePhoto1 from '../images2/profil22.webp';
import couplePhoto2 from '../images2/profil12.webp';
import storyImage1 from '../images2/histoire1.webp';
import storyImage2 from '../images2/histoire2.webp';
import storyImage3 from '../images2/histoire3.webp';
import storyImage4 from '../images2/histoire4.webp';
import storyImage5 from '../images2/histoire5.webp';
import Countdown from '../components/Countdown';
import React, { useState } from 'react';
import image1 from '../images2/image1.webp';
import image2 from '../images2/image2.webp';
import image3 from '../images2/image3.webp';
import image4 from '../images2/image4.webp';
import image5 from '../images2/image5.webp';
import image6 from '../images2/image6.webp';
import image7 from '../images2/image7.webp';
import image8 from '../images2/image8.webp';
import image9 from '../images2/image9.webp';
import image10 from '../images2/image10.webp';
import image11 from '../images2/image11.webp';
import image12 from '../images2/image12.webp';
import image13 from '../images2/image13.webp';
import image14 from '../images2/image14.webp';
import image15 from '../images2/image15.webp';
import image16 from '../images2/image16.webp';
import image17 from '../images2/image17.webp';
import image18 from '../images2/image18.webp';
import image19 from '../images2/image19.webp';
import image20 from '../images2/image20.webp';
import confession from '../musique/confession.mp3';
import { useNavigate } from 'react-router-dom';

const timeline = [
  { title: 'Cérémonie civile', detail: '1er août 2026 · 09:00', place: 'Mairie Douala IV' },
  { title: 'Bénédiction nuptiale', detail: '1er août 2026 · 14:30', place: 'MPE Dikolo/Mpanjo · Bonaberi' },
  { title: 'Réception', detail: 'Soirée festive', place: 'À confirmer avec les familles' },
];

function Billet() {
  const [selectedResponse, setSelectedResponse] = useState('');

  const handleFormSend = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value || '';
    const message = form.message?.value || '';
    const to = 'daviddjimafo@gmail.com';
    const cc = 'emmanuelngompe838@gmail.com';
    const subject = encodeURIComponent(`RSVP - ${name}`);
    const body = encodeURIComponent(`Réponse: ${selectedResponse}\nNom: ${name}\nMessage: ${message}`);
    window.location.href = `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`;
  };

  const navigate = useNavigate();

    const handlenavigate = (path) => (event) => {
        event.preventDefault();
        // Handle login logic here
        navigate(path);
    };

  return (  
    <div className="App">
        <audio autoPlay loop>
            <source src={confession} type="audio/mpeg"/>
        </audio>

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
          <p style={{fontSize: '1.5rem'}}>31 juillet & 1er août 2026</p>
          <p style={{fontSize: '2rem'}}> <span style={{fontSize: '2rem'}}><u></u>Theme:</span> "La Grace de David"</p>
         
        </div>
      </div>

      <main className="content">
        <section id="couple" className="section section-couple" >
          <div className="section-heading">
            <p className="eyebrow">Les futurs mariés</p>
            <h2>Deux chemins, une même lumière</h2>
          </div>
          <div className="couple-grid">
            <article className="person-card">
              <img src={couplePhoto1} alt="Grace"/>
              <h3 style={{ fontSize: '2rem' }}>Grace</h3>
              <h4 style={{color:'rgba(25, 59, 162)', fontSize: '1.5rem'}}>La mariée</h4>
            </article>
            <article className="person-card">
              <img src={couplePhoto2} alt="David"/>
              <h3 style={{ fontSize: '2rem' }}>David</h3>
              <h4 style={{color:'rgba(25, 59, 162)', fontSize: '1.5rem'}}>Le marié</h4>
            </article>
          </div>
        </section>

        <section className="section highlight-section">
          <p className="eyebrow">Nous allons nous marier</p>
          <h2>1er août 2026</h2>
          <p>Une journée de joie, de grâce et de célébration à partager avec vous.</p>
          <Countdown targetDate="2026-08-01T00:00:00" />
        </section>

        <section className="section story-section">
          <p className="eyebrow">Notre histoire</p>
          <div className="story-copy">
            <h2>Un amour né de la simplicité</h2>
            <p className="story-text">
              Entre rencontres inattendues et moments de grâce, notre histoire s'est construite pas à pas.
              Aujourd'hui, nous voulons la célébrer entourés de ceux qui ont compté dans notre chemin.
            </p>
          </div>
          <img src={storyImage1} alt="Le couple dans un moment de partage" className='storyImage'/>
          <div className="story-copy">
            <h2>Les promesses d’un avenir partagé</h2>
            <p className="story-text">
              Dans chaque sourire, nous avons trouvé la force de croire en demain. Nos projets se sont dessinés au fil des saisons, portés par la confiance et l’espérance.
            </p>
          </div>
          <img src={storyImage2} alt="Le couple dans un moment de partage" style={{display:'flex', objectPosition:'top center'}} className='storyImage'/>
          <div className="story-copy">
            <h2>La complicité au quotidien</h2>
            <p className="story-text">
              Entre gestes tendres et éclats de rire, nous avons appris à nous comprendre sans mots. Cette complicité est devenue le fil conducteur de notre vie commune.
            </p>
          </div>
          <img src={storyImage3} alt="Le couple dans un moment de partage" style={{display:'flex', objectPosition:'top center'}} className='storyImage'/>
          <div className="story-copy">
            <h2>Les épreuves surmontées ensemble</h2>
            <p className="story-text">
              Comme toute histoire, la nôtre a connu des défis. Mais main dans la main, nous avons transformé les obstacles en victoires, renforçant encore notre lien.
            </p>
          </div>
          <img src={storyImage4} alt="Le couple dans un moment de partage" style={{display:'flex', objectPosition:'top center'}} className='storyImage'/>
          <div className="story-copy">
            <h2>L’éclat d’un nouveau chapitre</h2>
            <p className="story-text">
              Aujourd’hui, nous ouvrons une page lumineuse. Ce mariage est l’occasion de célébrer l’amour, la famille et l’amitié, entourés de ceux qui nous sont chers.
            </p>
          </div>
          <img src={storyImage5} alt="Le couple dans un moment de partage" style={{display:'flex', objectPosition:'top center'}} className='storyImage'/>
        </section>

        <section className="section timeline-section" style={{ backgroundImage: `url(${coverImage2})` }}>
          <div className="section-heading">
            <p className="eyebrow">Le programme</p>
            <h2 style={{color:'white'}}>Ce serait un réel honneur pour nous de vous compter parmis nos invités ces jours.</h2>
          </div>
          <div className="timeline-grid">
            {timeline.map((item) => (
              <article key={item.title} className="timeline-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span>{item.place}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section dresscode-section">
          <p className="eyebrow">Dress code</p>
          <h2 style={{color:'white'}}>Style médiéval-vintage</h2>
          <p style={{ fontSize: '1.3rem', color: 'white' }}>Les couleurs sont libres, mais l'élégance et la douceur du thème seront les bienvenues.</p>
          <div className="pill-list">
            <span>Royal blue</span>
            <span>Blanc</span>
            <span>Or</span>
          </div>
        </section>

        <section className="section galerie-section">
          <p className="eyebrow" style={{color:'rgba(42,68,162,1)'}}>Galerie</p>
          <div className="galerie-container">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
            <img src={image8} alt="" />
            <img src={image9} alt="" />
            <img src={image10} alt="" />
            <img src={image11} alt="" />
            <img src={image12} alt="" />
            <img src={image13} alt="" />
            <img src={image14} alt="" />
            <img src={image15} alt="" />
            <img src={image16} alt="" />
            <img src={image17} alt="" />
            <img src={image18} alt="" />   
            <img src={image19} alt="" />
            <img src={image20} alt="" />         
          </div>
          <br/><p><button onClick={handlenavigate('/gallerie')} style={{ display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center', margin: '0 auto', 
                    alignItems: 'center', gap: '5px', borderRadius: '26px', backgroundColor: '#193BA2', color: 'rgb(255, 255, 255)', fontWeight: 700, fontSize: '14px', padding: '14px 34px', cursor: 'pointer', boxShadow: 'rgba(75, 17, 65, 0.5) 0px 10px 28px', border: 'none', transition: 'all 0.3s ease 0s' }}>
                    Voir plus de photos →
                  </button>
                </p>
          <p style={{ fontStyle: 'italic', color: 'rgba(65, 105, 225, 1)', textAlign: 'center', fontSize: '25px' }}>Celui qui trouve une femme trouve le bonheur; c'est une grace qu'il obtient de l'Eternel</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', margin: '6px 0px' }}>
            <span style={{ width: '46px', height: '1px', background: 'rgba(255, 255, 255, 0.7)' }}></span>
            <span style={{ fontFamily: 'tangerine', fontWeight: 500, fontSize: '17px', letterSpacing: '0.1em', textShadow: 'rgba(225, 185, 65, 1) 0px 2px 10px' }}>Proverbe18:22</span>
            <span style={{ width: '46px', height: '1px', background: 'rgba(255, 255, 255, 0.7)' }}></span>

            
          </div>

        </section>
 

        <section className="section gift-section">
          <p className="eyebrow">Un cadeau de cœur</p>
          <h2 style={{ color: 'white' }}>Envie de participer à notre bonheur ? Vos cadeaux sont les bienvenus. Ne vous retenez pas. Soyez très large.</h2>
          <div className="gift-card">
            <p><u>Orange Money</u></p>
            <strong>+237 695 537 795</strong>
            <p>Nom : David Djimafo</p>
            <span/><span/>
            <p><u>MTN MoMo</u></p>
            <strong>+237 654 155 999</strong>
            <p>Nom : David Djimafo</p>
          </div>
        </section>

        <section className="section form-section">
          <div className="section-heading">
            <p className="eyebrow">Confirmez votre présence</p>
            <h2>Nous vous attendons</h2>
          </div>
          <form className="invite-form" onSubmit={handleFormSend}>
            <input name="name" type="text" placeholder="Prénom et nom" />
            <div className="response-buttons">
              <button type="button" className={selectedResponse === 'oui' ? 'active' : ''} onClick={() => setSelectedResponse('Oui, avec joie')} style={{background: 'rgba(255, 255, 255, 0.6)'}}>Oui, avec joie</button>
              <button type="button" className={selectedResponse === 'non' ? 'active' : ''} onClick={() => setSelectedResponse('Hélas, non')} style={{background: 'rgba(255, 255, 255, 0.6)'}}>Hélas, non</button>
            </div>
            <textarea name="message" rows="4" placeholder="Laissez-nous un mot" />
            <button type="submit">Envoyer</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>Par la grâce de Dieu</p>
        <h2>Grace & David</h2>
      </footer>
    </div>
  );
}

export default Billet;
