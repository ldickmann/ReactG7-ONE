/* Component Forms */

import "./Forms.css";
import InputText from "../InputText";
import DropdownList from "../DropdownList";
import Button from "../Button";

const Forms = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="forms">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText label="Nome" placeholder="Digite seu nome" />
        <InputText label="Cargo" placeholder="Digite seu cargo" />
        <InputText label="Imagem" placeholder="Digite a URL da imagem" />
        <DropdownList label="Time" items={times} />
        <Button text="Criar card" />
      </form>
    </section>
  );
};

export default Forms;
