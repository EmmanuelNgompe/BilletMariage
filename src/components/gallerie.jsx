import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function importGalleryImages() {
  try {
    const context = require.context('../images2', false, /\.(png|jpe?g|webp)$/);
    return context
      .keys()
      .filter((key) => /image\d+\.(jpe?g|png|webp)$/i.test(key))
      .map(context);
  } catch (error) {
    return [];
  }
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const initialGallery = shuffle(importGalleryImages());

const Gallerie = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState(initialGallery);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const scrollRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotos((current) => shuffle(current));
      const container = scrollRef.current;
      if (container) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        const nextPosition = Math.floor(Math.random() * Math.max(1, maxScroll));
        container.scrollTo({ top: nextPosition, behavior: 'smooth' });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => {
      uploadedPhotos.forEach((photo) => {
        if (photo.url) {
          URL.revokeObjectURL(photo.url);
        }
      });
    };
  }, [uploadedPhotos]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) {
      return;
    }

    const newPhotos = files.map((file, index) => ({
      id: `${file.name}-${Date.now()}-${index}`,
      url: URL.createObjectURL(file),
      name: file.name,
    }));

    setUploadedPhotos((prev) => [...newPhotos, ...prev]);
    setPhotos((prev) => shuffle([...newPhotos.map((photo) => photo.url), ...prev]));
  };

  return (
    <div className="App">
      <div className="section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Galerie</p>
          <h2>Toutes les photos</h2>
          <p>Parcourez les images du dossier <strong>images2</strong> et importez vos propres photos depuis votre appareil.</p>
        </div>

        <div className="gallery-actions">
          <button type="button" className="primary-button" onClick={() => fileInputRef.current?.click()}>
            Ajouter une photo
          </button>
          <button type="button" className="secondary-button" onClick={() => navigate('/Billet')}>
            Retour à l'invitation
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

        <div ref={scrollRef} className="gallery-scroll">
          <div className="gallery-grid">
            {uploadedPhotos.map((photo) => (
              <article key={photo.id} className="gallery-card uploaded">
                <img src={photo.url} alt={photo.name} />
                <span>{photo.name}</span>
              </article>
            ))}

            {photos.map((photo, index) => (
              <article key={`${photo}-${index}`} className="gallery-card">
                <img src={photo} alt='' />
              </article>
            ))}
          </div>
        </div>

        {/* <p className="gallery-note">Les photos défilent aléatoirement dans la galerie pour une expérience vivante.</p> */}
      </div>
    </div>
  );
};

export default Gallerie;
