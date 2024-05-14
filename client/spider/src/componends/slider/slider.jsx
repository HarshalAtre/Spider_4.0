import React, { useState, useEffect } from 'react';
import './slider.css';

const Slider = () => {
  const images = ['bnr1.webp', 'bnr2.webp', 'bnr3.webp', 'bnr4.webp', 'bnr5.webp', 'bnr6.webp','bnr1.webp', 'bnr2.webp', 'bnr3.webp', 'bnr4.webp', 'bnr5.webp', 'bnr6.webp'];
  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < totalImages) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
    }, 3000); 
  
    return () => clearInterval(interval);
  }, [totalImages]);
  

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={` ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
