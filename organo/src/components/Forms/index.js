/* Component Forms */

import "./Forms.css";
import InputText from "../InputText";

const Forms = () => {
  return (
    <section className="forms">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText label="Nome" placeholder="Digite seu nome" />
        <InputText label="Cargo" placeholder="Digite seu cargo" />
        <InputText label="Imagem" placeholder="Digite a URL da imagem" />
      </form>
    </section>
  );
};

export default Forms;
