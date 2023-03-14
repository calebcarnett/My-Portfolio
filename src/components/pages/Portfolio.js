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
                className="card-img-top img-fluid pawfriends"
                src="src\styles\images\pawfriends.png"
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
              <button type="button" className="btn btn-light-blue btn-md">
                Live Site
              </button>
              <button type="button" className="btn btn-light-blue btn-md">
                Code Repository
              </button>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top img-fluid movienight"
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
              <button type="button" className="btn btn-light-blue btn-md">
                Live Site
              </button>
              <button type="button" className="btn btn-light-blue btn-md">
                Code Repository
              </button>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top takenotes img-fluid"
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Note Taker</h4>
              <p className="card-text">
                This application uses Express.js and will save and retrieve note
                data from a JSON file.
              </p>
              <button type="button" className="btn btn-light-blue btn-md">
                Live Site
              </button>
              <button type="button" className="btn btn-light-blue btn-md">
                Code Repository
              </button>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top img-fluid"
                alt="Card image cap"
                src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
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
              <button type="button" className="btn btn-light-blue btn-md">
                Live Site
              </button>
              <button type="button" className="btn btn-light-blue btn-md">
                Code Repository
              </button>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top img-fluid"
                alt="Card image cap"
                src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button type="button" className="btn btn-light-blue btn-md">
                Live Site
              </button>
              <button type="button" className="btn btn-light-blue btn-md">
                Code Repository
              </button>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top img-fluid"
                alt="Card image cap"
                src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button type="button" className="btn btn-light-blue btn-md">
                Live Site
              </button>
              <button type="button" className="btn btn-light-blue btn-md">
                Code Repository
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
