import React, {useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PdfPic from "../picture/pdf.png";
import mod1 from "../pdfs/mod1.pdf";
import mod3 from "../pdfs/mod 3.pdf";
import mod2 from "../pdfs/mod2.pdf";
gsap.registerPlugin(ScrollTrigger);

function Mod()
{

    const myElementRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".pdfBox2",
            start: "top 90%",
            end: "bottom 70%",
            // markers: true,
            scrub: 0.7,
          },
        });
    
        timeline.from(myElementRef.current, {
          opacity: 0,
          duration: 1,
          y: 70,
        });
    
      }, [myElementRef]);

    return(
        <>
            <div className="pdfBox2" ref={myElementRef}>
                <h3>Ministry of Defence</h3>
                <div className="pdfs">
                <a href={mod2} target="_blank" rel="noreferrer">
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>Ministry-Of-Defence-Recruitment-2022 (2) (1)</h5>
                    </div>
                </a>
                <a href={mod1} target="_blank" rel="noreferrer">
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>Ministry-Of-Defence-Recruitment-2022 (2) (1)</h5>
                    </div>
                </a>
                <a href={mod3} target="_blank" rel="noreferrer">
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>Ministry-Of-Defence-Recruitment-2022 (2) (1)</h5>
                    </div>
                </a>
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>Name</h5>
                    </div>
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>Name</h5>
                    </div>
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>Name</h5>
                    </div>
                    
                </div>
                <div id="button">
                    <a href="/">Show More</a>
                </div>
            </div>
        </>
    )
}
export default Mod;