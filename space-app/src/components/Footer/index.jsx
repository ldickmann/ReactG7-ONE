import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.footer`
  max-width: 100%;
  height: 5rem;
  background-color: #04244f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white;
  margin-top: 5rem;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    margin-right: 1.5rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.625rem;

    &:hover {
      color: #ccc;
    }
  }
`;

const FooterText = styled.div`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </IconsContainer>
      <FooterText>Desenvolvido por Alura | Aluno: Lucas E. Dickmann</FooterText>
    </FooterContainer>
  );
};

export default Footer;
