import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styles from "./navbar.module.css"; // Importando o CSS Module

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [prevPos, setPrevPos] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.pageYOffset;
      setPrevPos(currentPos);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevPos]);

  return (
    <header>
      <nav id="navbar" className={styles.navigation}>
        {isMobile ? (
          <div className={styles.toggleIcon} onClick={toggleSidebar}>
            <FaBars size={40} color="white" />
          </div>
        ) : (
          <ul className={styles.navList}>
            <li>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="#about-me">
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="#projects">
                Projetos
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="#contact">
                Contato
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
