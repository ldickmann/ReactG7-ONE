import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./toggleSidebar.module.css";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div
      id="sidebar"
      className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
      style={{
        width: isSidebarOpen ? "100%" : "0",
        opacity: isSidebarOpen ? "1" : "0",
      }}
    >
      <div className={styles.sidebarHeader}>
        <div className={styles.closeIcon} onClick={toggleSidebar}>
          <FaTimes size={40} color="white" />
        </div>
      </div>
      <Link to="/" className={styles.link} onClick={toggleSidebar}>
        Home
      </Link>
      <Link to="#about-me" className={styles.link} onClick={toggleSidebar}>
        Skills
      </Link>
      <Link to="#projects" className={styles.link} onClick={toggleSidebar}>
        Projetos
      </Link>
      <Link to="#contact" className={styles.link} onClick={toggleSidebar}>
        Contato
      </Link>
    </div>
  );
};

export default Sidebar;
