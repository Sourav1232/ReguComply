// File: src/components/ImageSlider.js
import React, { useState } from 'react';
import './ImageSlider.css';  // Create a separate CSS file for ImageSlider

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slider-image" />
      <div className="slide-controls">
        <button onClick={prevSlide}>&lt; </button>
        <button onClick={nextSlide}> &gt;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
