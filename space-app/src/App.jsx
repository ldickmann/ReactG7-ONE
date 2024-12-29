import { styled } from "styled-components";
import StylesGlobals from "./components/StylesGlobals";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import bannerImage from "./assets/banner.png";

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
      <Banner
        backgroundImage={bannerImage}
        title="A galeria mais completa de fotos do espaço!"
      />
    </FundoGradiente>
  );
}

export default App;
