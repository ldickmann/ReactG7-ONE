/*
 * React: desenvolvendo com JavaScript | Programa Oracle ONE
 * Dev: Lucas Elias Dickmann
 */

import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";
import Time from "./components/Time";
import Footer from "./components/Footer";

function App() {
  // Array de objetos com os times e suas respectivas cores
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Front-end",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "DevOps",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  // Variável de estado para gerenciar dados de colaboradores e sua função setter.
  const [colaboradores, setColaboradores] = useState([]);

  // Adiciona um novo colaborador à lista existente de colaboradores
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Forms
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Footer
        socials={[
          { src: "./images/facebook.png", alt: "Facebook" },
          { src: "./images/instagram.png", alt: "Instagram" },
          { src: "./images/twitter.png", alt: "Twitter" },
        ]}
        logo={"./images/logo.png"}
        alt={"Logo"}
        text={"© Desenvolvido por Lucas Elias Dickmann | Oracle ONE & Alura"}
      />
    </div>
  );
}

export default App;
