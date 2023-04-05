import React from "react";
import "../../styles/styles/styles.css";

export default function Portfolio() {
  return (
    <div>
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Projects
      </h2>
      <hr></hr>

      <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 m-2 projects">
        <div className="col">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top img-fluid cool-beans zoom"
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Cool-Beans E-commerce</h4>
              <p className="card-text">
                Cool-Beans is a full-stack application built with React,
                Express, MongoDB, and Node.js. Our site provides a seamless
                shopping experience for coffee lovers who want to buy
                high-quality beans from the comfort of their own home.
              </p>
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
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top img-fluid pawfriends zoom"
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">PawFriends</h4>
              <p className="card-text">
                PawFriends is a MVC full stack application where users can
                upload/delete and view other rescued animals posted by users.
              </p>
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
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top img-fluid movienight zoom"
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Movie Night</h4>
              <p className="card-text">
                Movie Night is a Javascript front-end application created using
                Youtube and OMDB API's.
              </p>
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
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top takenotes img-fluid zoom"
                alt="Card image cap"
              />
            </div>

            <div className="card-body">
              <h4 className="card-title">Note Taker</h4>
              <p className="card-text">
                This application uses Express.js and will save and retrieve note
                data from a JSON file.
              </p>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://takenotes.herokuapp.com/"
              >
                Live Site
              </a>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://github.com/calebcarnett/Take-Notes"
              >
                Code Repository
              </a>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top img-fluid weather zoom"
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Weather App</h4>
              <p className="card-text">
                Front end application using a third party API to retrieve the
                local weather. Technologies used: Javscript, API, HTML, and CSS.
              </p>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://calebcarnett.github.io/Weather-App/"
              >
                Live Site
              </a>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://github.com/calebcarnett/Weather-App"
              >
                Code Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top img-fluid codequiz"
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Code Quiz</h4>
              <p className="card-text">
                Quiz game that features dynamically updated HTML and CSS powered
                by JavaScript
              </p>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://calebcarnett.github.io/Quiz-Game/"
              >
                Live Site
              </a>
              <a
                type="button"
                target="_blank"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://github.com/calebcarnett/Quiz-Game"
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
