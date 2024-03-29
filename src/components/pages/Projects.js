import React from "react";
import "../../styles/styles/styles.css";

export default function Projects() {
  return (
    <div>
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Projects
      </h2>
      <hr></hr>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 m-2 projects">
        <div className="col">
          <div className="card project-cards">
            <div className="view overlay">
              <a
                target="_blank"
                href="https://cool-beans-ecommerce.herokuapp.com/"
              >
                <img
                  className="card-img-top img-fluid cool-beans zoom"
                  alt="Card image cap"
                />

                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Cool-Beans E-commerce</h4>
              <p className="card-text">
                Designed to provide coffee lovers with the convenience of
                shopping for premium quality beans from the comfort of their own
                home. Our site is fully equipped with user-friendly features,
                including the ability to browse and add items to your cart, read
                and leave reviews, and securely checkout with ease.
              </p>
              <h6>
                Technologies used: React, Express, MongoDB, and Node.js Stripe
                API, FormSpree API
              </h6>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://cool-beans-ecommerce.herokuapp.com/"
              >
                Live Site
              </a>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://github.com/hmustain/Cool-Beans.git"
              >
                Code Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card project-cards">
            <div className="view overlay">
              <a target="_blank" href="https://pawfriends.herokuapp.com/">
                <img
                  className="card-img-top img-fluid pawfriends zoom"
                  alt="Card image cap"
                />
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">PawFriends</h4>
              <p className="card-text">
                PawFriends provides a platform for individuals to post and
                discover rescued pets, fostering the opportunity for these
                animals to find loving forever homes. This valuable resource not
                only connects pets with new families, but also offers a chance
                for individuals to make a positive impact by giving a rescued
                animal a second chance at life.
              </p>
              <h6>
                Technologies used: MySQL, Sequelize, MVC Design, Handlebars.js,
                Express.js, Node.js
              </h6>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://pawfriends.herokuapp.com/"
              >
                Live Site
              </a>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://github.com/calebcarnett/pawfriends"
              >
                Code Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card project-cards">
            <div className="view overlay">
              <a
                target="_blank"
                href="https://calebcarnett.github.io/Movie-Search-Application"
              >
                <img
                  className="card-img-top img-fluid movienight zoom"
                  alt="Card image cap"
                />
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Movie Night</h4>
              <p className="card-text">
                Elevate your movie-watching experience with our innovative
                application. Our user-friendly platform allows you to easily
                search for any movie and access its trailer and interesting
                facts. Whether you're a casual movie-goer or simply love
                discovering new films, our application is the perfect tool to
                expand your cinematic knowledge and find your next favorite
                movie.
              </p>
              <h6>
                Technologies used: Javascript, HTML, CSS, Youtube API, OMDB API
              </h6>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://calebcarnett.github.io/Movie-Search-Application"
              >
                Live Site
              </a>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://github.com/calebcarnett/Movie-Search-Application"
              >
                Code Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
