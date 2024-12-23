/* Component Time */

// Importação do CSS
import "./Time.css";

const Time = (props) => {
  /* Outra alternativa para a estilização do componente */
  // const css = {
  //   backgroundColor: props.corSecundaria,
  // };

  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    </section>
  );
};

export default Time;
