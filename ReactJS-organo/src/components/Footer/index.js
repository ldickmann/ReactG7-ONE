/*
 * Desafio do Módulo: React: desenvolvendo com JavaScript | Programa Oracle ONE
 * Dev e Aluno: Lucas Elias Dickmann
 */

/* Component Footer */

import "./Footer.css";

const Footer = ({ socials, alt, logo, subTitle, text }) => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url("./images/footer-react.png")` }}
    >
      <div className="container-social-media">
        {socials.map((social, index) => (
          <img key={index} src={social.src} alt={social.alt} />
        ))}
      </div>
      <img src={logo} alt={alt} />
      <p>{text}</p>
      <div className="container-subtitle">
        <h5>{subTitle}</h5>
      </div>
    </footer>
  );
};

export default Footer;
