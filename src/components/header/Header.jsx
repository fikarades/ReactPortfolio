import React, { Component } from "react";
import CTA from "./CTA";
import Profile from '../../assets/me.png';
import HeaderSocials from "./HeaderSocials";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container header__container">
            <h5>Hallo I'm</h5>
            <h1>Moh Zulfikar</h1>
            <div className="text-light">Front End Developer</div>
            <CTA />
            <HeaderSocials />

            <div className="me">
              <img src={Profile} alt="Foto Profile" />
            </div>

            <a href="#contact" className="scroll__down">Scroll Down</a>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
