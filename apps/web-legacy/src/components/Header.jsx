// src/components/Header.jsx
import React from "react";
import logo from "/assets/images/MsquaredLogo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav className="nav">
        {/* Left: logo (always visible) */}
        <img
          src={logo}
          alt="Logo for Malachi Muhic"
          className="nav-logo"
        />

        {/* Desktop: name + links */}
        <div className="nav-text">
          <a href="#hero" className="nav-name">
            Malachi Muhic
          </a>

          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: hamburger button */}
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="nav-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="nav-mobile-link"
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;