import React from "react";
import "../../styles/styles/styles.css";

export default function Footer() {
  return (
    <footer>
      <footer className="bg-light text-center">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="https://www.linkedin.com/in/calebcarnett/"
              role="button"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="https://github.com/calebcarnett"
              role="button"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="mailto:carnett.caleb@gmail.com"
              role="button"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3">© 2023 Copyright:</div>
      </footer>
    </footer>
  );
}
