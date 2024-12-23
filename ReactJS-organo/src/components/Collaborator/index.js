/* Component Collaborator */

// Importação do CSS
import "./Collaborator.css";

const Collaborator = ({ nome, imagem, cargo }) => {
  return (
    <div className="collaborator">
      <div className="header">
        <img src={imagem} alt={nome} />
      </div>
      <div className="footer">
        <h4>{nome}</h4>
        <h6>{cargo}</h6>
      </div>
    </div>
  );
};

export default Collaborator;
