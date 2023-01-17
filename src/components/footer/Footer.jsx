import React, { Component } from "react";
import {AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <a href="#" className="footer__logo">MOZKAR</a>

          <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>

          <div className="footer__socials">
            <a href="https://facebook.com"><AiOutlineFacebook /></a>
            <a href="https://instagram.com"><AiOutlineInstagram /></a>
            <a href="https://twitter.com"><AiOutlineTwitter /></a>
          </div>

          <div className="footer__copyright">
            <small>&copy; I'm training build Web Portfolio with React.js, Tutorial From EGATOR Youtube</small>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
