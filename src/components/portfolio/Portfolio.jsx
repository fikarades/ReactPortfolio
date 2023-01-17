import React, { Component } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    Image: IMG1,
    github: "https://github.com",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    demo: "#",
  },
  {
    id: 2,
    Image: IMG2,
    github: "https://github.com",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    demo: "#",
  },
  {
    id: 3,
    Image: IMG3,
    github: "https://github.com",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    demo: "#",
  },
  {
    id: 4,
    Image: IMG4,
    github: "https://github.com",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    demo: "#",
  },
  {
    id: 5,
    Image: IMG5,
    github: "https://github.com",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    demo: "#",
  },
  {
    id: 6,
    Image: IMG6,
    github: "https://github.com",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    demo: "#",
  },
];
class Portfolio extends Component {
  render() {
    return (
      <>
        <section id="portfolio">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>

          <div className="container portfolio__container">
            {data.map((value, index) => {
              return (
                <article className="portfolio__item" key={index}>
                  <div className="portfolio__item-image">
                    <img src={value.Image} alt="" />
                  </div>
                  <h3>This is a portfolio item title</h3>
                  <div className="portfolio__item-cta">
                    <a href={value.github} className="btn">
                      Github
                    </a>
                    <a
                      href={value.demo}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;
