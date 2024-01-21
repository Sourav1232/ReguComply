import React from "react";

function Footer() {
    return (
        <>
            <footer>
                <div className="box">
                    <h3>Get Know Us</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Ministries</li>
                        <li>Documents</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Let us Help You</h3>
                    <ul>
                        <li>Your Account</li>
                        <li>Terms and Conditions</li>
                        <li>Feedback</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Related Links</h3>
                    <ul>
                        <li>Notice</li>
                        <li>Sitemap</li>
                        <li>Tenders</li>
                        <li>Website Policies</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Social Media</h3>
                    <ul id="icons">
                        <li><a href="/"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-whatsapp"></i></a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer;