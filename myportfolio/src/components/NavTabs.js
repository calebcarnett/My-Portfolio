import React from "react";

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
  },
};

// because the portfolioContainer is exported
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.main}>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
        <div>
          <a
            href="#Home"
            onClick={() => handlePageChange("Home")}
            // Ternary operater is checking if the current page is the Home page, if it is on the blog it will make the nav-link active
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            {/* <img
            src={require("../../src/styles/images/headshot.jpg")}
            className="img-fluid mw-300"
            alt="Responsive image"
          /> */}
          </a>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange("AboutMe")}
              // Ternary operater is checking if the current page is the About me page, if it is on the blog it will make the nav-link active
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              // Ternary operater is checking if the current page is the portfolio page, if it is on the blog it will make the nav-link active
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              // Ternary operater is checking if the current page is the the contact page, if it is on the blog it will make the nav-link active
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              // Ternary operater is checking if the current page is the the blog page, if it is on the blog it will make the nav-link active
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTabs;
