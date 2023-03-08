import React from "react";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// because the portfolioContainer is exported
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // Ternary operater is checking if the current page is the home page, if it is on the blog it will make the nav-link active
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          //  TODO: Add a comment explaining what this logic is doing
          // Ternary operater is checking if the current page is the about -age, if it is on the blog it will make the nav-link active
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange("Blog")}
          //  TODO: Add a comment explaining what this logic is doing
          // Ternary operater is checking if the current page is the the blog page, if it is on the blog it will make the nav-link active
          className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
          // Ternary operater is checking if the current page is the the contact page, if it is on the blog it will make the nav-link active
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
