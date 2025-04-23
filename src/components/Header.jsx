import React, { useState, useEffect } from 'react';
import imgBanner1 from '../assets/banner1.png';
import imgBanner2 from '../assets/banner2.png';
import imgBanner3 from '../assets/banner3.png';
import imgBanner4 from '../assets/banner4.png';
import imgBanner5 from '../assets/banner5.png';

export default function Header() {
  const images = [imgBanner1, imgBanner2, imgBanner3, imgBanner4, imgBanner5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true); // Controla a visibilidade da imagem

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageVisible(false); // Oculta a imagem atual
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsImageVisible(true); // Torna a nova imagem visível
      }, 500); // Tempo de transição antes de mudar a imagem (500ms)
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [images]);

  return (
    <header className="bg-violet-500">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <nav className="bg-violet-500 flex justify-between items-center shadow-lg">
            <div className="w-full h-auto overflow-hidden relative">
              <img
                src={images[currentImageIndex]}
                alt="Banner"
                className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isImageVisible ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
