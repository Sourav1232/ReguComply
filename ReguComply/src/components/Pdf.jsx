import React, {useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PdfPic from "../picture/pdf.png";
import mop1 from "../pdfs/DRDO_tender5.pdf";
import mop2 from "../pdfs/mof2.pdf";
import mop3 from "../pdfs/mop3.pdf";
gsap.registerPlugin(ScrollTrigger);

function PdfPage() {

    const myElementRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".pdfBox1",
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
    
    //   end of gsap

    return(
        <>
            <div className="pdfBox1" ref={myElementRef}>
                <h3>Ministry of Defence</h3>
                <div className="pdfs">
                <a href={mop1} target="_blank" rel="noreferrer">
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>DRDO_tender5.pdf</h5>
                    </div>
                </a>
                <a href={mop2} target="_blank" rel="noreferrer">
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>mof2.pdf (1)</h5>
                    </div>
                </a>
                <a href={mop3} target="_blank" rel="noreferrer">
                    <div className="card">
                        <img id="pdfImg" src={PdfPic} alt="" />
                        <h5>Seeking_comments_on_draft_electricity_rights_of_consumers_rules_2020 (1)</h5>
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
export default PdfPage;