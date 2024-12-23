/* Component Time */

// Importação do CSS
import "./Time.css";

// Importações de componentes
import Digimons from "../Digimons";

const Time = (props) => {
  /* Outra alternativa para a estilização do componente */
  // const css = {
  //   backgroundColor: props.corSecundaria,
  // };

  return (
    // Verifica se o componente possui colaboradores, se sim, renderiza o componente
    props.digimons.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Digimons
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
