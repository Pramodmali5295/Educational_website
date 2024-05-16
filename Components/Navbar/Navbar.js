import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../Assets/Navbarlogo.png";
import menu_icon from "../../Assets/menu-icon.png";

function Navbar() {
  const [sticky, setStickey] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 650 ? setStickey(true) : setStickey(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Navbar logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={-260} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-180} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            className="btn"
          >
            Conatct us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="menu-icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
}

export default Navbar;
