/* Component de input de texto */

import "./InputText.css";

const InputText = (props) => {
  // Interpolação de string
  const placeholderModificada = `${props.placeholder}...`;

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input required={props.required} placeholder={placeholderModificada} />
    </div>
  );
};

export default InputText;