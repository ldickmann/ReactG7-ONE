import { styled } from "styled-components";
import StylesGlobals from "./components/StylesGlobals";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import bannerImage from "./assets/banner.png";
import Gallery from "./components/Gallery";

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

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  return (
    <FundoGradiente>
      <StylesGlobals />
      <AppContainer>
        <Header />
        <MainContainer>
          <Sidebar />
          <GalleryContent>
            <Banner
              backgroundImage={bannerImage}
              title="A galeria mais completa de fotos do espaço!"
            />
            <Gallery />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
