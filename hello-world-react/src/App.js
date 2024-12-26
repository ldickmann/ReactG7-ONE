import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

// Exemplo de uso do objeto window.location no console do navegador
console.log(window.location);

// Variável que armazena o componente a ser renderizado, com base na URL
const pagina = window.location.pathname === "/" ? <Inicio /> : <SobreMim />;

function App() {
  return pagina;
}

export default App;
