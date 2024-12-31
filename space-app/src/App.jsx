import { useEffect, useState } from "react";
import { styled } from "styled-components";
import StylesGlobals from "./components/StylesGlobals";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import DialogZoom from "./components/DialogZoom";
import Footer from "./components/Footer";

import bannerImage from "./assets/banner.png";
import photos from "./photos.json";

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

/**
 * The main component of the application.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * return <App />;
 *
 * @description
 * This component manages the state and layout of the application. It includes:
 * - State variables for gallery photos, filter, tag, photo with zoom, and tablet view detection.
 * - An effect to handle window resize events and update the tablet view state.
 * - An effect to filter photos based on the selected tag and filter text.
 * - A function to toggle the favorite status of a photo.
 * - A function to render the layout for tablet view.
 * - The main render function that conditionally renders the layout based on the tablet view state.
 *
 * @function
 * @name App
 */
const App = () => {
  const [fotosDaGaleria, setGalleryPhotos] = useState(photos);
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);
  const [photoWithZoom, setPhotoWithZoom] = useState(null);

  // State variable to determine if the current window width is less than or equal to 768 pixels.
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle =
        !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase());
      return filterByTag && filterByTitle;
    });
    setGalleryPhotos(filteredPhotos);
  }, [filter, tag]);

  const toToggleFavorite = (photo) => {
    if (photo.id === photoWithZoom?.id) {
      setPhotoWithZoom({
        ...photoWithZoom,
        favorite: !photoWithZoom.favorite,
      });
    }
    setGalleryPhotos(
      fotosDaGaleria.map((photoGallery) => {
        return {
          ...photoGallery,
          favorite:
            photoGallery.id === photo.id
              ? !photo.favorite
              : photoGallery.favorite,
        };
      })
    );
  };

  // Function to render the layout for tablet view.
  const renderTabletLayout = () => {
    return (
      <MainContainer style={{ flexDirection: "column" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <Sidebar />
          <Banner
            backgroundImage={bannerImage}
            title="A galeria mais completa de fotos do espaço!"
          />
        </div>
        <GalleryContent style={{ width: "100%" }}>
          <Gallery
            photos={fotosDaGaleria}
            setTag={setTag}
            whenSelectPhoto={(photo) => setPhotoWithZoom(photo)}
            toggleFavorite={toToggleFavorite}
          />
        </GalleryContent>
      </MainContainer>
    );
  };

  // Main render function that conditionally renders the layout
  return (
    <FundoGradiente>
      <StylesGlobals />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter} />
        {isTablet ? (
          renderTabletLayout()
        ) : (
          <MainContainer>
            <Sidebar />
            <GalleryContent>
              <Banner
                backgroundImage={bannerImage}
                title="A galeria mais completa de fotos do espaço!"
              />
              <Gallery
                photos={fotosDaGaleria}
                setTag={setTag}
                whenSelectPhoto={(photo) => setPhotoWithZoom(photo)}
                toggleFavorite={toToggleFavorite}
              />
            </GalleryContent>
          </MainContainer>
        )}
      </AppContainer>
      <DialogZoom
        photo={photoWithZoom}
        whenClosing={() => setPhotoWithZoom(null)}
        toggleFavorite={toToggleFavorite}
      />
      <Footer />
    </FundoGradiente>
  );
};

export default App;
