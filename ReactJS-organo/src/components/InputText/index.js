/* Component de input de texto */

import { useState } from "react";
import "./InputText.css";

const InputText = (props) => {
  // Interpolação de string
  const placeholderModificada = `${props.placeholder}...`;

  // let valor = "Lucas E. Dickmann";

  const [valor, setValor] = useState("");

  const aoDigitar = (event) => {
    setValor(event.target.value);
    console.log(valor);
  };

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigitar}
        required={props.required}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default InputText;
