import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";

import styles from "./Favoritos.module.css";

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card
          id="2"
          titulo="Todo Poderoso"
          capa="https://i.pinimg.com/736x/3e/bd/09/3ebd096bad4640858ae9b9c748b046ea.jpg"
        />
      </section>
    </>
  );
}

export default Favoritos;
