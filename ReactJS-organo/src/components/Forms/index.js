/* Component Forms */

import "./Forms.css";
import { useState } from "react";
import InputText from "../InputText";
import DropdownList from "../DropdownList";
import Button from "../Button";

const Forms = (props) => {
  const [nome, setNome] = useState("");
  const [grade, setGrade] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      grade,
      imagem,
      time,
    });
    // Limpa os campos do formulário
    setNome("");
    setGrade("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="forms">
      <form onSubmit={aoSalvar}>
        <h2>Preencha od dados do Digimon que quer adicionar</h2>
        <InputText
          required={true}
          label="Nome"
          placeholder="Digite o nome do Digimon"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <InputText
          required={true}
          label="Grade"
          placeholder="Digite a ordem de desenvolvimento"
          valor={grade}
          aoAlterado={(valor) => setGrade(valor)}
        />
        <InputText
          label="Imagem"
          placeholder="Digite a URL da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <DropdownList
          required={true}
          label="Tipo"
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
