import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "../picture/logo.png";
import Pic1 from "../picture/pic1.jpg"
import Pic2 from "../picture/pic2.png";
import G20 from "../picture/g20.png";
import Regucom from "../picture/company.jpg"
import "../App.css";

function Header() {

    const myElementRef = useRef(null);
    const bottomNav = useRef(null);

  useEffect(() => {

    const timeline = gsap.timeline();

    // Add animations to the timeline
    timeline.from(myElementRef.current, { opacity: 0, y: -70, duration: 1})
           .from(bottomNav.current, { 
            opacity: 0,
             duration: 0.3
            });
  }, []);
//   end of gsap

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    
    const hoverHandle1 = function () {
        setShow1(!show1);
    }
    const hoverHandle2 = function () {
        setShow2(!show2);
    }
    const hoverHandle3 = function () {
        setShow3(!show3);
    }
    const hoverHandle4 = function () {
        setShow4(!show4);
    }
    const hoverHandle5 = function () {
        setShow5(!show5);
    }
    return (
        <>
            <nav ref={myElementRef}>
                <div className="left">
                    <img id="logo" src={Logo} alt="" />
                    <img id="company" src={Regucom} alt="" />
                </div>
                <div className="right">
                    <img src={G20} alt="" />
                    <img src={Pic1} alt="" />
                    <img src={Pic2} alt="" />
                </div>
            </nav>
            <div className="bottomNav" ref={bottomNav}>
                <div className="navBox" onMouseEnter={hoverHandle1}>
                    <p>Ministry of Power</p>
                    <div className="contentBox" onMouseLeave={hoverHandle1} style={show1 === true ? { display: "block" } : { display: "none" }}>
                        <div className="item"><a href="/">Notice</a></div>
                        <div className="item"><a href="/">Tender</a></div>
                        <div className="item"><a href="/">Public Grivance</a></div>
                    </div>
                </div>
                <div className="navBox" onMouseEnter={hoverHandle2}>
                    <p>Ministry of Defence</p>
                    <div className="contentBox" onMouseLeave={hoverHandle2} style={show2 === true ? { display: "block" } : { display: "none" }}>
                        <div className="item"><a href="/">Notice</a></div>
                        <div className="item"><a href="/">Tender</a></div>
                        <div className="item"><a href="/">Public Grivance</a></div>
                    </div>
                </div>
                <div className="navBox" onMouseEnter={hoverHandle3}>
                    <p>Ministry of Security</p>
                    <div className="contentBox" onMouseLeave={hoverHandle3} style={show3 === true ? { display: "block" } : { display: "none" }}>
                        <div className="item"><a href="/">Notice</a></div>
                        <div className="item"><a href="/">Tender</a></div>
                        <div className="item"><a href="/">Public Grivance</a></div>
                    </div>
                </div>
                <div className="navBox" onMouseEnter={hoverHandle4}>
                    <p>Ministry of Finance</p>
                    <div className="contentBox" onMouseLeave={hoverHandle4} style={show4 === true ? { display: "block" } : { display: "none" }}>
                        <div className="item"><a href="/">Notice</a></div>
                        <div className="item"><a href="/">Tender</a></div>
                        <div className="item"><a href="/">Public Grivance</a></div>
                    </div>
                </div>
                <div className="navBox" onMouseEnter={hoverHandle5}>
                    <p>Ministry of Education</p>
                    <div className="contentBox" onMouseLeave={hoverHandle5} style={show5 === true ? { display: "block" } : { display: "none" }}>
                        <div className="item"><a href="/">Notice</a></div>
                        <div className="item"><a href="/">Tender</a></div>
                        <div className="item"><a href="/">Public Grivance</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;