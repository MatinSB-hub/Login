import React from "react";
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import insatgram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
    return(
        <div className="footer">

            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Cantact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
               <div class="social-links">
		<div id="twitter" class="social-btn flex-center"> <img src={insatgram_icon} alt="" />
			<svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"></svg><span>insatgram</span>
		</div>
	
		<div id="linkedin" class="social-btn flex-center">
        <img src={pintester_icon} alt="" />
			<svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"></svg><span>pintester</span>
		</div>

		<div id="github" class="social-btn flex-center">
        <img src={whatsapp_icon} alt="" />
			<svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"></svg><span>whatsapp</span>
	</div>
</div>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer