import '../App.css';
import coverImage from '../images2/couverture.png';
import couplePhoto1 from '../images2/profil2.jpg';
import couplePhoto2 from '../images2/profil1.jpg';
import storyImage1 from '../images2/histoire1.jpg';
import storyImage2 from '../images2/histoire2.png';
import storyImage3 from '../images2/histoire3.jpg';
import storyImage4 from '../images2/histoire4.jpg';
import storyImage5 from '../images2/histoire5.jpg';
import Countdown from '../components/Countdown';
import React, { useState } from 'react';
import image1 from '../images2/image1.jpg';
import image2 from '../images2/image2.jpg';
import image3 from '../images2/image3.jpg';
import image4 from '../images2/image4.jpg';
import image5 from '../images2/image5.jpg';
import image6 from '../images2/image6.jpg';
import image7 from '../images2/image7.jpg';
import image8 from '../images2/image8.jpg';
import image9 from '../images2/image9.jpg';
import image10 from '../images2/image10.jpg';
import image11 from '../images2/image11.jpg';
import image12 from '../images2/image12.jpg';
import image13 from '../images2/image13.jpg';
import image14 from '../images2/image14.jpg';
import image15 from '../images2/image15.jpg';
import image16 from '../images2/image16.jpg';
import image17 from '../images2/image17.jpg';
import image18 from '../images2/image18.png';
import image19 from '../images2/image19.png';
import image20 from '../images2/image20.png';
import confession from '../musique/confession.mp3';

const timeline = [
  { title: 'Cérémonie civile', detail: '31 juillet 2026 · 09:00', place: 'Mairie Douala IV' },
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
          <p>31 juillet & 1er août 2026</p>
         
        </div>
      </div>

      <main className="content">
        <section id="couple" className="section">
          <div className="section-heading">
            <p className="eyebrow">Les futurs mariés</p>
            <h2>Deux chemins, une même lumière</h2>
          </div>
          <div className="couple-grid">
            <article className="person-card">
              <img src={couplePhoto1} alt="Grace" />
              <h3>Grace</h3>
              <h4 style={{color:'rgba(25, 59, 162)'}}>La mariée</h4>
            </article>
            <article className="person-card">
              <img src={couplePhoto2} alt="David" />
              <h3>David</h3>
              <h4 style={{color:'rgba(25, 59, 162)'}}>Le marié</h4>
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
          <div className="story-copy">
            <p className="eyebrow">Notre histoire</p>
            <h2>Un amour né de la simplicité</h2>
            <p>
              Entre rencontres inattendues et moments de grâce, notre histoire s'est construite pas à pas.
              Aujourd'hui, nous voulons la célébrer entourés de ceux qui ont compté dans notre chemin.
            </p>
          </div>
          <img src={storyImage1} alt="Le couple dans un moment de partage" />
          <div className="story-copy">
            <h2>Les promesses d’un avenir partagé</h2>
            <p>
              Dans chaque sourire, nous avons trouvé la force de croire en demain. Nos projets se sont dessinés au fil des saisons, portés par la confiance et l’espérance.
            </p>
          </div>
          <img src={storyImage2} alt="Le couple dans un moment de partage" style={{display:'flex', objectPosition:'top center'}}/>
          <div className="story-copy">
            <h2>La complicité au quotidien</h2>
            <p>
              Entre gestes tendres et éclats de rire, nous avons appris à nous comprendre sans mots. Cette complicité est devenue le fil conducteur de notre vie commune.
            </p>
          </div>
          <img src={storyImage3} alt="Le couple dans un moment de partage" style={{display:'flex', objectPosition:'top center'}}/>
          <div className="story-copy">
            <h2>Les épreuves surmontées ensemble</h2>
            <p>
              Comme toute histoire, la nôtre a connu des défis. Mais main dans la main, nous avons transformé les obstacles en victoires, renforçant encore notre lien.
            </p>
          </div>
          <img src={storyImage4} alt="Le couple dans un moment de partage" style={{display:'flex', objectPosition:'top center'}} />
          <div className="story-copy">
            <h2>L’éclat d’un nouveau chapitre</h2>
            <p>
              Aujourd’hui, nous ouvrons une page lumineuse. Ce mariage est l’occasion de célébrer l’amour, la famille et l’amitié, entourés de ceux qui nous sont chers.
            </p>
          </div>
          <img src={storyImage5} alt="Le couple dans un moment de partage" style={{display:'flex', objectPosition:'top center'}}/>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Le programme</p>
            <h2>Les grands moments</h2>
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
          <h2>Style médiéval-vintage</h2>
          <p style={{ fontStyle: 'italic', color: 'white' }}>Les couleurs sont libres, mais l'élégance et la douceur du thème seront les bienvenues.</p>
          <div className="pill-list">
            <span>Royal blue</span>
            <span>Blanc</span>
            <span>Or</span>
          </div>
        </section>

        <section className="section galerie-section">
          <p className="eyebrow">Galerie</p>
          <div className="galerie-container">
            <img src={image1} alt="Photo 1" />
            <img src={image2} alt="Photo 2" />
            <img src={image3} alt="Photo 3" />
            <img src={image4} alt="Photo 4" />
            <img src={image5} alt="Photo 5" />
            <img src={image6} alt="Photo 6" />
            <img src={image7} alt="Photo 1" />
            <img src={image8} alt="Photo 2" />
            <img src={image9} alt="Photo 3" />
            <img src={image10} alt="Photo 4" />
            <img src={image11} alt="Photo 5" />
            <img src={image12} alt="Photo 6" />
            <img src={image13} alt="Photo 1" />
            <img src={image14} alt="Photo 2" />
            <img src={image15} alt="Photo 3" />
            <img src={image16} alt="Photo 4" />
            <img src={image17} alt="Photo 5" />
            <img src={image18} alt="Photo 6" />   
            <img src={image19} alt="Photo 6" />
            <img src={image20} alt="Photo 6" />         
          </div>
          <p style={{ fontStyle: 'italic', color: 'rgba(225, 185, 65, 1)', textAlign: 'center', fontSize: '25px' }}>Celui qui trouve une femme trouve le bonheur; c'est une grace qu'il obtient de l'Eternel</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', margin: '6px 0px' }}>
            <span style={{ width: '46px', height: '1px', background: 'rgba(255, 255, 255, 0.7)' }}></span>
            <span style={{ fontFamily: 'tangerine', fontWeight: 500, fontSize: '17px', letterSpacing: '0.1em', textShadow: 'rgba(225, 185, 65, 0.7) 0px 2px 10px' }}>Proverbe18:22</span>
            <span style={{ width: '46px', height: '1px', background: 'rgba(255, 255, 255, 0.7)' }}></span>
          </div>

        </section>
 

        <section className="section gift-section">
          <p className="eyebrow">Un cadeau de cœur</p>
          <h2>Votre présence est le plus beau présent</h2>
          <p>Si vous souhaitez contribuer à notre bonheur, vos cadeaux seront les bienvenus.</p>
          <div className="gift-card">
            <p>Orange Money</p>
            <strong>+237 695 537 795</strong>
            <p>Nom : David Djimafo</p>
            <span/><span/>
            <p>MTN Mobile Money</p>
            <strong>+237 654 155 999</strong>
            <p>Nom : Awam Ivan German</p>
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
