import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Writeups", path: "/writeups" },
  { name: "Projects", path: "/projects" },
  { name: "Research", path: "/research" },
  { name: "CV", path: "/cv" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClose = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }

      if (
        event.type === "mousedown" &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleClose);
    document.addEventListener("mousedown", handleClose);

    return () => {
      document.removeEventListener("keydown", handleClose);
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <header className="navbar" ref={navbarRef}>
      <button
        className={`menu-button ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((current) => !current)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="site-menu"
        aria-expanded={menuOpen}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`menu ${menuOpen ? "show" : ""}`} id="site-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
