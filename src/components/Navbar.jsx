import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <h2>Sandip Cloud Tech</h2>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>

          <li>
            <a href="#certifications" onClick={closeMenu}>
              Certifications
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>

          <li>
            <a href="#experience" onClick={closeMenu}>Experience</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;