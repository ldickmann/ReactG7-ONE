// import SobreMim from "./paginas/SobreMim";

// Exemplo de uso do objeto window.location no console do navegador
/* console.log(window.location); */

// Variável que armazena o componente a ser renderizado, com base na URL
/* const pagina = window.location.pathname === "/" ? <Inicio /> : <SobreMim />; */

// Biblioteca React para rotas 'react-router-dom'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        {/* O '*' funciona como se fosse um seletor coringa,
          que captura qualquer URL que não foi definida anteriormente
        */}
        <Route path="*" element={<div>Página não encontrada...</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
