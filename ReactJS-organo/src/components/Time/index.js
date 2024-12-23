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
    // Verifica se o componente possui digimons, se sim, renderiza o componente
    props.digimons.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="digimons">
          {props.digimons.map((digimon) => (
            <Digimons
              corDeFundo={props.corPrimaria}
              key={digimons.nome}
              cargo={digimons.cargo}
              imagem={digimons.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
