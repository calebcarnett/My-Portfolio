import React from "react";
import "../../styles/styles/styles.css";
export default function Portfolio() {
  return (
    <div>
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Portfolio
      </h2>
      <section className="projects"></section>
      <div className="card mb-3 portfolio">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid pawfriends"
              alt="pawfriends application"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pet Adoption</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 portfolio">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid pawfriends"
              alt="pawfriends application"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pet Adoption</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
