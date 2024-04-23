import React, { useState, useEffect } from 'react';
import style from './style.module.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
    }, 4000); // Troca de slide a cada 3 segundos

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth >= 768) {
        setSlideWidth(100 / 3); // Definir 3 slides por linha em telas maiores que 768px
      } else {
        setSlideWidth(100); // Definir 1 slide por linha em telas menores que 768px
      }
    };

    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);

  return (
    <div className={style.carousel}>
      <div className={style.carouselInner} style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}>
        {images.map((image, index) => (
          <div key={index} style={{ width: `${slideWidth}%` }}>
            <img src={image} alt={`Slide ${index}`} className={style.carouselSlide} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
