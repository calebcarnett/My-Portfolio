import React from "react";

// because the portfolioContainer is exported
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <div>
        <h1>Caleb Carnett</h1>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            // Ternary operater is checking if the current page is the home page, if it is on the blog it will make the nav-link active
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("AboutMe")}
            // Ternary operater is checking if the current page is the about -age, if it is on the blog it will make the nav-link active
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
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
      </ul>
    </div>
  );
}

export default NavTabs;
