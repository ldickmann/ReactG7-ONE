import { styled } from "styled-components";
import StylesGlobals from "./components/StylesGlobals";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const FundoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <FundoGradiente>
      <StylesGlobals />
      <Header />
      <Sidebar />
    </FundoGradiente>
  );
}

export default App;
