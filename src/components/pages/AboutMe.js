import React from "react";
import "../../styles/styles/styles.css";
import resume from "../../styles/images/calebsresume.pdf";

export default function AboutMe() {
  return (
    <div>
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        About Me
      </h2>
      <hr></hr>
      <div className="main">
        <div className="my-information">
          <div>
            <img className="profile-photo" />
          </div>
          <p>
            <i className="bi bi-geo-alt-fill"></i>North Bethesda, Maryland
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i>{" "}
            <a
              className="link"
              target="_blank"
              href="mailto:carnett.caleb@gmail.com"
            >
              Carnett.caleb@gmail.com
            </a>
          </p>
          <p>
            <i className="bi bi-linkedin"></i>{" "}
            <a
              className="link"
              target="_blank"
              href="https://www.linkedin.com/in/calebcarnett/"
            >
              in/calebcarnett
            </a>
          </p>
        </div>
        <section className="about-section">
          <h2 className="description">Hello, I'm Caleb Carnett</h2>
          <hr></hr>
          <div>
            <h4>Full Stack Developer</h4>
          </div>

          <div>
            <p>
              Completed a software development certification where I developed a
              strong foundation in Javascript programming language, React,
              Node.js, MongoDB, and Express. In my previous position, I was
              known for my ability to solve problems and execute tasks
              effectively and on time. Seeking a software developer role where I
              can continue to apply my expertise through hands-on projects.
            </p>
          </div>
          <p>
            When I'm not coding I enjoy being outdoors, going on hikes, or
            playing pickleball with my wife.
          </p>
          <div className="project-resume">
            {/* <a
              href="/Projects"
              type="button"
              className="btn btn-outline-dark btn-floating m-3 "
            >
              Projects
            </a> */}
            <a
              href={resume}
              download
              type="button"
              className="btn btn-outline-dark btn-floating  m-3  "
            >
              Resume
            </a>
          </div>
        </section>
      </div>
      <hr></hr>
      <p className="text-center mt-5">A few of my skills.</p>
      <div className="skillsGrid">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="The logo icon for react"
          title="React"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="The logo icon for HTML 5"
          title="HTML 5"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="The logo icon for CSS3"
          title="CSS 3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt="The logo icon for TailwindCSS"
          title="Twilwind CSS"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="The logo icon for Bootstrap"
          title="Bootstrap"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="The logo icon for Express"
          title="Express"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="The logo icon for GitHub"
          title="GitHub"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          alt="The logo icon for Git"
          title="Git"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg"
          alt="The logo icon for Heroku"
          title="Heroku"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="The logo icon for Javascript"
          title="JavaScript"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
          alt="The logo icon for jQuery"
          title="jQuery"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          alt="The logo icon for MongoDB"
          title="Mongo DB"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          alt="The logo icon for MySQL"
          title="MySQL"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          alt="The logo icon for NPM"
          title="NPM"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="The logo icon for NodeJS"
          title="Node JS"
        />
      </div>
    </div>
  );
}
