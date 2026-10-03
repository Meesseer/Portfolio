import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="nav-logo">
        AK<span>.</span>
      </div>

      <nav className="nav-links">
        <button onClick={() => scrollToSection("work")}>Work</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>

      <button
        className="nav-cta"
        onClick={() => scrollToSection("contact")}
      >
        Let's Talk
      </button>
    </header>
  );
};

export default Navbar;