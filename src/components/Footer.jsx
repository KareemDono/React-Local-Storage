import React from "react";
import { FaGithub, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="content-container">
      <div className="footer">
        <div className="icons">
          <div className="icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} color="#333" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} color="#333" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={25} color="#333" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={25} color="#333" />
            </a>
          </div>
        </div>
        <div className="copyright">
          Copyright @ kareem jumaa & tayeb haj yehya
        </div>
      </div>
    </div>
  );
};

export default Footer;
