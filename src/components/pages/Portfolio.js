import React from "react";
import "../../styles/styles/styles.css";
export default function Portfolio() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 m-5">
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
                className="btn btn-outline-dark btn-floating m-1"
                href="https://pawfriends.herokuapp.com/"
              >
                Live Site
              </a>
              <a
                type="button"
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
                className="btn btn-outline-dark btn-floating m-1"
                href="https://calebcarnett.github.io/Movie-Search-Application"
              >
                Live Site
              </a>
              <a
                type="button"
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
                className="btn btn-outline-dark btn-floating m-1"
                href="https://takenotes.herokuapp.com/"
              >
                Live Site
              </a>
              <a
                type="button"
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
                className="card-img-top img-fluid profilegenerator zoom"
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Profile Generator</h4>
              <p className="card-text">
                Node.js command-line application that generates an HTML webpage
                that displays summaries for each person on a software
                engineering team.
              </p>
              <a
                type="button"
                className="btn btn-outline-dark btn-floating m-1"
                href="https://github.com/calebcarnett/Profile-Generator"
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
                className="btn btn-outline-dark btn-floating m-1"
                href="https://calebcarnett.github.io/Weather-App/"
              >
                Live Site
              </a>
              <a
                type="button"
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
                className="btn btn-outline-dark btn-floating m-1"
                href="https://calebcarnett.github.io/Quiz-Game/"
              >
                Live Site
              </a>
              <a
                type="button"
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
