import React, { useEffect, useRef ,useState} from "react";
import "../App.css";
import Header from "./Header";
import PdfPage from "./Pdf";
import Mod from "./Mod";
import Mof from "./Mof";

import { gsap } from "gsap";
import Footer from "./Footer";
import axios from 'axios';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const myElementRef = useRef(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/pdf/${searchTerm}`, {
        responseType: 'arraybuffer',
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      // Open the PDF in a new tab or an iframe
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  useEffect(() => {
    // Basic animation example
    gsap.from(myElementRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5
    });
  }, []);

  return (
    <>
    <Header />
<div className="search">
                <form action="/"ref={myElementRef}>
                    <input type="text" placeholder="Search PDF" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  />
                    <button id="submit" type="submit" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
            <PdfPage />
            <Mod />
            <Mof />
            <Footer />
            </>
            );
        };

export default App;







