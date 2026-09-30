import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);

      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const homeClass = ({ isActive }) =>
    `nav-link ${isActive && location.pathname === "/" ? "active" : ""}`;

  return (
    <header className="navbar">
      <div className="wrap navbar-inner">

        {/* Logo */}
        <NavLink
          to="/"
          className="logo"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Arjun PA
        </NavLink>

        {/* Desktop / Mobile Navigation */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <button
            className="nav-section-link"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Projects
          </NavLink>

          <button
            className="nav-section-link"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;