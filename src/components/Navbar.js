import React, { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";
import ukFlag from "../images/ukFlag.png";
import frenchFlag from "../images/frenchFlag.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };

  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Home
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/cv" className="nav-links" onClick={closeMobileMenu}>
                Curriculum Vitae
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/experiences"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/hobbies"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Hobbies
              </Link>
            </li>
            <li className="nav-item">
              <img src={frenchFlag} alt="fr" width={40} />
              <Switch
                defaultChecked
                onClick={() => {
                  language === "en"
                    ? switchLanguage("fr")
                    : switchLanguage("en");
                }}
              />
              <img src={ukFlag} alt="eng" width={40} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
