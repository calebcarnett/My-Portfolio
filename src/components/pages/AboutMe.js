import React from "react";
import "../../styles/styles/styles.css";
export default function AboutMe() {
  return (
    <div>
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        About Me
      </h2>
      <div className="main">
        <div>
          <div>
            <img className="profile-photo" />
          </div>
          <p>
            <i className="bi bi-geo-alt-fill"></i>North Bethesda, Maryland
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i>{" "}
            <a className="link" href="mailto:carnett.caleb@gmail.com">
              Carnett.caleb@gmail.com
            </a>
          </p>
          <p>
            <i className="bi bi-linkedin"></i>{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/calebcarnett/"
            >
              in/calebcarnett
            </a>
          </p>
        </div>
        <section className="about-section">
          <h2 className="description">Hello, I'm Caleb</h2>
          <hr></hr>
          <div>
            <p>Full Stack Developer</p>
          </div>

          <div>
            <p>
              Completing a software development certification where I developed
              a strong foundation in Javascript programming language. In my
              previous position, I was known for my ability to solve problems
              and execute tasks effectively and on time. Seeking a software
              developer role where I can continue to apply my expertise through
              hands-on projects.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

{
  /* <div className="homeanimation"> </div>
      <div className="mountain"></div>
      <div className="cloud"></div>
      <div className="cloud2"></div> */
}
