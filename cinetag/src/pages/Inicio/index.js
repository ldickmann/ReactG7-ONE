import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import videos from "json/db.json";

import styles from "./Inicio.module.css";

function Inicio() {
  // const { videos, musicas } = db;

  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
      {/* Exercicio 1
        
      <Titulo>
        <h1>Trilhas Sonoras</h1>
      </Titulo>
      <section className={styles.container}>
        {musicas.map((musica) => {
          return <Card {...musica} key={musica.id} />;
        })}
      </section> */}
      <Rodape />
    </>
  );
}

export default Inicio;
