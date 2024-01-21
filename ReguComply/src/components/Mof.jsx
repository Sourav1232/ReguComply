import React, {useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PdfPic from "../picture/pdf.png";
import mof1 from "../pdfs/mof1.pdf";
import mof3 from "../pdfs/mof3.pdf";
import mof2 from "../pdfs/mof2.pdf";
gsap.registerPlugin(ScrollTrigger);

function Mof()
{

    const myElementRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".pdfBox3",
            start: "top 90%",
            end: "bottom 70%",
            // markers: true,
            scrub: 0.7,
          },
        });
    
        timeline.from(myElementRef.current, {
          opacity: 0,
          duration: 1,
          y: 40,
        });
        
      }, [myElementRef]);

    return(
        <>
            <div className="pdfBox3" ref={myElementRef}>
                <h3>Ministry of Finance</h3>
                <div className="pdfs">
                <a href={mof1} target="_blank" rel="noreferrer">
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>Ministry of finance (1)</h5>
                    </div>
                </a>
                <a href={mof2} target="_blank" rel="noreferrer">
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>Ministry of finance (1)</h5>
                    </div>
                </a>
                <a href={mof3} target="_blank" rel="noreferrer">
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>Ministry of finance (1)</h5>
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
export default Mof;