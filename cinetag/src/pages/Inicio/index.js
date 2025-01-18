import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Card
        id="1"
        titulo="Todo Poderoso"
        capa="https://i.pinimg.com/736x/3e/bd/09/3ebd096bad4640858ae9b9c748b046ea.jpg"
      />
      <Rodape />
    </>
  );
}

export default Inicio;
