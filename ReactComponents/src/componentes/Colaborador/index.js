import { AiFillCloseCircle } from "react-icons/ai";
import "./colaborador.css";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
  // Função para deletar o colaborador
  function deletarColaborador() {
    aoDeletar(colaborador.id);
  }

  return (
    <div className="colaborador">
      {/* Icon do botão de deletar */}
      <AiFillCloseCircle
        size={25}
        className="deletar"
        // Evento de clique para deletar o colaborador, chamando a função deletarColaborador
        onClick={deletarColaborador}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
