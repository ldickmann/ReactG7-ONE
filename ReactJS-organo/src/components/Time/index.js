/* Component Time */

// Importação do CSS
import "./Time.css";

// Importações de componentes
import Collaborator from "../Collaborator";

const Time = (props) => {
  /* Outra alternativa para a estilização do componente */
  // const css = {
  //   backgroundColor: props.corSecundaria,
  // };

  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Collaborator
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
