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
      nome: "Social",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Navi",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Tool",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "System",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "Game",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      nome: "Entame",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Life",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  // Variável de estado para gerenciar dados dos digimons e sua função setter.
  const [digimons, setDigimons] = useState([]);

  // Adiciona um novo digimon à lista existente de digimons
  const aoNovoDigimonAdicionado = (digimon) => {
    debugger;
    setDigimons([...digimons, digimon]);
  };

  return (
    <div className="App">
      <Banner />
      <Forms
        times={times.map((time) => time.nome)}
        aoDigimonCadastrado={(digimon) => aoNovoDigimonAdicionado(digimon)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          digimons={digimons.filter((digimons) => digimons.time === time.nome)}
        />
      ))}
      <Footer
        socials={[
          {
            name: "linkedin",
            link: "https://www.linkedin.com/in/lucas-dickmann",
            alt: "Facebook",
          },
          {
            name: "github",
            link: "https://github.com/ldickmann",
            alt: "Github",
          },
          {
            name: "instagram",
            link: "https://www.instagram.com/luksdickmann",
            alt: "Instagram",
          },
        ]}
        logo={"./images/logo-organo.png"}
        alt={"Logo"}
        text={"Oracle ONE & Alura"}
        subTitle={"© Desenvolvido por Lucas Elias Dickmann"}
      />
    </div>
  );
}

export default App;
