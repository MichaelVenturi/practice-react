import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* instead of process.env like in CRA, use import.meta.env */}
        <div className="header-content-title">
          <h2>{import.meta.env.VITE_FAKE_VAR}</h2>
        </div>
        <nav className={`header-content-nav ${menuOpen ? "isMenu" : ""}`}>
          <ul>
            <li>
              <span className="link">page 1</span>
            </li>
            <li>
              <span className="link">page 2</span>
            </li>
            <li>
              <span className="link">page 3</span>
            </li>
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className="header-content-toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={handleClick} />
          ) : (
            <AiOutlineClose onClick={handleClick} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
