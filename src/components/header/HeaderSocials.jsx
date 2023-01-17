import React, { Component } from "react";
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

class HeaderSocials extends Component {

    render(){
        return (
            <>
            <div className="header__socials">
                <a href="http://linkedin.com " target="_blank" rel="noreferrer"><BsLinkedin/></a>
                <a href="http://github.com" target="_blank" rel="noreferrer"><FaGithub/></a>
                <a href="http://dribble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>
            </div>
            </>
        )
    }
}

export default HeaderSocials