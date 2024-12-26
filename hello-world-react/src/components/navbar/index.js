import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "./navbar.css";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [prevPos, setPrevPos] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState({
    top: "0",
    backgroundColor: "transparent",
    opacity: "1",
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.pageYOffset;
      if (prevPos > currentPos) {
        setNavbarStyle((prevStyle) => ({
          ...prevStyle,
          top: "0",
        }));
      } else {
        setNavbarStyle((prevStyle) => ({
          ...prevStyle,
          top: "-15vw",
        }));
      }

      setPrevPos(currentPos);

      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        setNavbarStyle((prevStyle) => ({
          ...prevStyle,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }));
      } else {
        setNavbarStyle((prevStyle) => ({
          ...prevStyle,
          backgroundColor: "transparent",
        }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevPos]);

  return (
    <nav id="navbar" style={navbarStyle}>
      {!isSidebarOpen && (
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#hard-skills">Hard Skills</a>
          </li>
          <li>
            <a href="#soft-skills">Soft Skills</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      )}
      <div id="hamburger-icon" onClick={toggleSidebar}>
        <FaBars size={40} color="white" />
      </div>
    </nav>
  );
};

export default Navbar;
