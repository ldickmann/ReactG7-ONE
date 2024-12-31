import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Images from "./Images";

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

// eslint-disable-next-line react/prop-types
const Gallery = ({ photos }) => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImageContainer>
            {photos.map((photo) => (
              <Images key={photo.id} photo={photo} />
            ))}
          </ImageContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
