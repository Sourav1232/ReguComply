// File: src/App.js
import React from 'react';
import UploadPDF from './components/UploadPdf';
import ImageSlider from './components/ImageSlider';
import './styles.css';  // Import the CSS file

function App() {
  const sliderImages = [
    '	https://mod.gov.in/sites/default/files/styles/wide/public/MoD_30523_new.jpg?itok=Wvr1B1EX',
    'https://mod.gov.in/sites/default/files/Ba_05012024.jpeg',
    'https://mod.gov.in/sites/default/files/AFFDF_Banner.jpeg',
  ];

  return (
    <div className="App">
      <header>
        <h1>Ministry of Defense</h1>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <ImageSlider images={sliderImages} />
        <UploadPDF />
      </main>
      <footer>
        <div className="footer-content">
        <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@govwebsite.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Address</h3>
            <p>123 Government Street</p>
            <p>Cityville, GV 12345</p>
          </div>
          <div className="footer-section">
            <h3>Connect with Us</h3>
            <ul className="social-icons">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
        </div>
        <p className='copyright'>&copy; 2024 Ministry of Defense</p>
      </footer>
    </div>
  );
}

export default App;
