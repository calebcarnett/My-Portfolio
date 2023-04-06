import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./elements/Footer";
import "../styles/styles/styles.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
