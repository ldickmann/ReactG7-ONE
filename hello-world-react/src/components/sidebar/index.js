import React from "react";
import { FaTimes } from "react-icons/fa";
import "./toggleSidebar.css";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div
      id="sidebar"
      style={{
        width: isSidebarOpen ? "100%" : "0",
        opacity: isSidebarOpen ? "1" : "0",
      }}
    >
      <div id="close-icon" onClick={toggleSidebar}>
        <FaTimes size={40} color="white" />
      </div>
      <a href="#home" onClick={toggleSidebar}>
        Home
      </a>
      <a href="#about" onClick={toggleSidebar}>
        Sobre
      </a>
      <a href="#hard-skills" onClick={toggleSidebar}>
        Hard Skills
      </a>
      <a href="#soft-skills" onClick={toggleSidebar}>
        Soft Skills
      </a>
      <a href="#projects" onClick={toggleSidebar}>
        Projetos
      </a>
      <a href="#contact" onClick={toggleSidebar}>
        Contato
      </a>
    </div>
  );
};

export default Sidebar;
