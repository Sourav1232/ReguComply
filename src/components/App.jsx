import React, { useEffect, useRef } from "react";
import "../App.css";
import Header from "./Header";
import PdfPage from "./Pdf";
import Mod from "./Mod";
import Mof from "./Mof";
import PDFSearchComponent from './PDFSearchComponent';

import { gsap } from "gsap";
import Footer from "./Footer";

function App() {
    
    const myElementRef = useRef(null);

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
            <PDFSearchComponent />
            </div>
            <PdfPage />
            <Mod />
            <Mof />
            <Footer />
        </>
    )
}
export default App;