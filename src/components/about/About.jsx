import React, { Component } from "react";
import './About.css';
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
class About extends Component {
  render() {
    return (
      <>
        <section id="about">
          <h5>Get To Know</h5>
          <h2>About Me</h2>

          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="" />
              </div>
            </div>
            
            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Experiance</h5>
                  <small>0 Years Working</small>
                </article>

                <article className="about__card">
                  <FiUsers className="about__icon" />
                  <h5>Clients</h5>
                  <small>200+ Worldwide</small>
                </article>

                <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>Project</h5>
                  <small>80+ Completed</small>
                </article>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo necessitatibus harum veniam illo a facere reiciendis, distinctio exercitationem assumenda quas iste sint molestiae omnis nobis corrupti, inventore eaque porro.
              </p>

              <a href="#contact">Let's Talk</a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
