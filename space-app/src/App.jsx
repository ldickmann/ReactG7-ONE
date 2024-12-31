import { styled } from "styled-components";
import StylesGlobals from "./components/StylesGlobals";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import bannerImage from "./assets/banner.png";
import Gallery from "./components/Gallery";

import photos from "./photos.json";
import { useEffect, useState } from "react";
import DialogZoom from "./components/DialogZoom";
import Footer from "./components/Footer";

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

const App = () => {
  const [fotosDaGaleria, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);
  const [photoWithZoom, setPhotoWithZoom] = useState(null);

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

  return (
    <FundoGradiente>
      <StylesGlobals />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter} />
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
