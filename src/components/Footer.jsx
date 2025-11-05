import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../App.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Releva Physiotherapy</h4>
            <p>
              Your partners in pain relief and physical recovery. Contact us
              today to start your journey towards a pain-free, active life.
            </p>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>School junction, Erumad, Tamil Nadu 643239</p>
            <p>contactreleva@gmail.com</p>
            <p>+91 62353 62320</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/releva_physiotherapy_clinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <FaInstagram />
              </a>
              <p className="mt-1 text-gray-400">
                Designed & Developed by{" "}
                <a
                  href="https://github.com/codewith-lionel"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "orange", textDecoration: "none" }}
                >
                  Lionel
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Releva Physiotherapy Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
