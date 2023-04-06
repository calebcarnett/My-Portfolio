import React from "react";
import "../../styles/styles/styles.css";

export default function Footer() {
  return (
    <footer className="text-center mt-5">
      <hr></hr>
      <div className="container p-4">
        <section className="mb-4">
          <a
            target="_blank"
            className="btn btn-outline-dark btn-floating m-1"
            href="https://www.linkedin.com/in/calebcarnett/"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            target="_blank"
            className="btn btn-outline-dark btn-floating m-1"
            href="https://github.com/calebcarnett"
            role="button"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            target="_blank"
            className="btn btn-outline-dark btn-floating m-1"
            href="mailto:carnett.caleb@gmail.com"
            role="button"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </section>
        <p>© 2023 Caleb Carnett | All rights reserved.</p>
      </div>
    </footer>
  );
}
