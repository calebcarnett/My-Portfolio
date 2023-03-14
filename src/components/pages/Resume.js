import React from "react";
import "../../styles/styles/resume.css";
import resume from "../../styles/images/calebsresume.pdf";

export default function Resume() {
  return (
    <div class="container text-center">
      <a
        href={resume}
        download
        type="button"
        className="btn btn-outline-dark btn-floating m-1"
      >
        Download Resume
      </a>
      <div className="header">
        <h1>CALEB CARNETT</h1>
        <p>
          5454 Nicholson Ln, Kensington, MD 20895
          <br />
          carnett.caleb@gmail.com | (830)-312-8326
          <br />
          <a href="https://linkedin.com/in/calebcarnett">
            linkedin.com/in/calebcarnett
          </a>{" "}
          |{" "}
          <a href="https://calebcarnett.github.io/Portfolio">
            calebcarnett.github.io/Portfolio
          </a>{" "}
          |{" "}
          <a href="https://github.com/calebcarnett">github.com/calebcarnett</a>
        </p>
      </div>
      <div className="summary">
        <h2>SUMMARY</h2>
        <p>
          Completing a software development certification where I developed a
          strong foundation in Javascript programming language. In my previous
          position, I was known for my ability to solve problems and execute
          tasks effectively and on time. Seeking a software developer role where
          I can continue to apply my expertise through hands-on projects.
        </p>
      </div>
      <h2 className="skillsheader">SKILLS</h2>
      <ul className="skills">
        <li>JavaScript</li>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
        <li>Node.JS</li>
        <li>React</li>
        <li>GitHub</li>
        <li>Heroku</li>
        <li>jQuery</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>API's</li>
        <li>CSS</li>
        <li>Git</li>
        <li>Object Oriented Programming</li>
        <li>Mobile Responsive Design</li>
        <li>Git Bash</li>
        <li>Express.js</li>
      </ul>
      <div className="work">
        <h2>WORK &amp; LEADERSHIP EXPERIENCE</h2>

        <h3>
          The University of Texas at San Antonio Web Developer Certification
        </h3>
        <p>
          <em>Student, September 2022 - April 2023</em>
        </p>
        <h4>Projects:</h4>
        <ul>
          <li>
            PetAdoption - Developed and deployed a full stack application
            created using a MVC design that allows users to adopt or post a
            rescued pet. Saves user data with cookies and uses password
            authentication. Technologies included Javascript, Node.js, MySQL,
            Express.js, Heroku, Handlebars.js
          </li>
          <li>
            Movie Search - Front-end application utilizing Javascript and two
            REST APIs. Searches pull data from IMDB & Youtube APIs to display
            the most relevant movie facts, posters, and trailers for users’
            searches.
          </li>
        </ul>

        <h3>Meritage Homes</h3>
        <p>
          <em>Warranty Manager, February 2022 - November 2022</em>
        </p>
        <ul>
          <li>
            Managed and eliminated over 1500 warranty claims issues through
            Salesforce within 9 months
          </li>
          <li>
            Reduced total warranty claim backlog by over 50% within 6 months by
            collaborating with team members
          </li>
          <li>
            Increased customer satisfaction scores 8% by solving technical
            home-owner issues within 2 weeks
          </li>
        </ul>
        <h3>Pratt Industries </h3>
        <p>
          <em>Account Manager, July 2021 - february 2022</em>
        </p>
        <ul>
          <li>
            Led and maintained relationships with 2 accounts generating over
            $200,000 in monthly sales
          </li>
          <li>
            Increased warehouse space by 30% minimizing lost profits on aged
            inventory
          </li>
          <li>
            Grew company revenue by $15,000 each month by identifying customer
            needs and promoting new products
          </li>
        </ul>
        <h3>Avco Roofing </h3>
        <p>
          <em>Project Manager , January 2020 - July 2021</em>
        </p>
        <ul>
          <li>
            Collaborated on a sales campaign for $1,400,000 in revenue by
            designing refined sales strategies and techniques
          </li>
          <li>
            Managed and coordinated construction crews of up to 20 employees on
            residential properties
          </li>
          <li>
            Facilitated and initiated the project vision, planning, design, and
            implementation of projects
          </li>
        </ul>
        <div className="education">
          <h2>EDUCATION &amp; CERTIFICATIONS</h2>
          <p>
            The University of Texas at San Antonio
            <br />
            San Antonio, TX
            <br />
            Bachelor of Business Administration, concentration in Marketing
            <br />
            December 2019
          </p>
          <p>
            The University of Texas at San Antonio
            <br />
            Remote
            <br />
            Certificate of completion - Web Developer Bootcamp
            <br />
            October 2022 - April 2023
          </p>
        </div>
      </div>
    </div>
  );
}
