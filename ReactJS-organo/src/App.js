/*
 * React: desenvolvendo com JavaScript | Programa Oracle ONE
 * Dev: Lucas Elias Dickmann
 */

import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";
import Time from "./components/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Forms
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nome="Programação" />
      <Time nome="Front-end" />
      <Time nome="Data Science" />
      <Time nome="DevOps" />
    </div>
  );
}

export default App;
