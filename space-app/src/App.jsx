import { styled } from "styled-components";
import StylesGlobals from "./components/StylesGlobals";

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
    </FundoGradiente>
  );
}

export default App;
