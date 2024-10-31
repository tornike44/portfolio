// src/components/layout/Header.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cvFile from "../../assets/images/CV Tornike ZARDIASHVILI.pdf";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle smooth scroll for anchor links
  const handleNavClick = (e, targetId) => {
    // Only handle anchor links on home page
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "CV_Tornike_ZARDIASHVILI.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">TornikeZ</Link>
      </div>

      <div
        className="burger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`burger-icon ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`header-sections mobile-menu ${isMenuOpen ? "active" : ""}`}>
        {location.pathname === "/" ? (
          <>
            <a
              href="#competences"
              className="header-section"
              onClick={(e) => handleNavClick(e, "competences")}
            >
              Compétences
            </a>
            <a
              href="#projets"
              className="header-section"
              onClick={(e) => handleNavClick(e, "projets")}
            >
              Projets
            </a>
            <a
              href="#parcours"
              className="header-section"
              onClick={(e) => handleNavClick(e, "parcours")}
            >
              Parcours
            </a>
          </>
        ) : (
          <>
            <Link to="/#competences" className="header-section">
              Compétences
            </Link>
            <Link to="/#projets" className="header-section">
              Projets
            </Link>
            <Link to="/#parcours" className="header-section">
              Parcours
            </Link>
          </>
        )}

        <Link to="/blog" className="header-section">
          Blog
        </Link>
        <Link to="/contact" className="header-section">
          Contact
        </Link>

        <button className="download-btn" onClick={handleDownloadCV} aria-label="Télécharger mon CV">
          Télécharger mon CV
        </button>
      </div>
    </header>
  );
};

export default Header;
