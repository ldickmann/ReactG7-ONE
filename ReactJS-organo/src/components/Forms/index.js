/* Component Forms */

import "./Forms.css";
import { useState } from "react";
import InputText from "../InputText";
import DropdownList from "../DropdownList";
import Button from "../Button";

const Forms = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="forms">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <InputText
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <InputText
          label="Imagem"
          placeholder="Digite a URL da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <DropdownList
          required={true}
          label="Time"
          items={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button text="Criar card" />
      </form>
    </section>
  );
};

export default Forms;
