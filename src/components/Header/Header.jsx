import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* instead of process.env like in CRA, use import.meta.env */}
        <div
          className="header-content-title"
          onClick={() => {
            navigate("/");
          }}
        >
          <h2>{import.meta.env.VITE_FAKE_VAR}</h2>
        </div>
        <nav className={`header-content-nav ${menuOpen ? "isMenu" : ""}`}>
          <ul>
            <li>
              <Link to="one" className="link">
                page 1
              </Link>
            </li>
            <li>
              <Link to="two" className="link">
                page 2
              </Link>
            </li>
            <li>
              <Link to="three" className="link">
                page 3
              </Link>
            </li>
          </ul>
          <Button
            onClick={() => {
              navigate("about");
            }}
          >
            About Page
          </Button>
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
