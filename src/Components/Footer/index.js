import React from "react";
import './style.css'
import { FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container" id="contact">
      <div className="over"></div>
      <footer className="footer">
        <div className="part1">
          <h1>Amali</h1>
          <p>
            Amali is dedicated to helping athletes gain<br/>financial support for them to excel in their career.
          </p>
          <div className="social-links">
            <a href="mailto:angethherjok@gmail.com" data-testid="mail-link">
              <FaEnvelope />
            </a>
            <a href="https://twitter.com" data-testid="twitter-link">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" data-testid="linkedin-link">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="part2">
          <h1>Useful Links</h1>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="part3">
          <h1>Contact Information</h1>
          <p>+254 759 942 644</p>
          <p>Nairobi, Kenya</p>
        </div>
      </footer>
       <hr className="section-divide" />
      <p className="copyright">CopyRight &copy; 2022 Amali. All Rights Reserved</p>
    </div>
  );
};

export default Footer;