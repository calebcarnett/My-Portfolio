import React from "react";
import "../styles/styles/styles.css";

// because the portfolioContainer is exported
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="navigation">
      <div>
        <a
          href="#Home"
          onClick={() => handlePageChange("Home")}
          // Ternary operater is checking if the current page is the Home page, if it is on the blog it will make the nav-link active
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <img className="profile-photo" />
        </a>
      </div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="item">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange("AboutMe")}
              // Ternary operater is checking if the current page is the About me page, if it is on the blog it will make the nav-link active
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              About
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
