import { styled } from "styled-components";
import Title from "../../Title";

import photos from "./photos-popular.json";

const ColumnPhotos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 156px;
    height: 118px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const SectionTablet = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 24px;
`;

const Popular = () => {
  return (
    <SectionTablet>
      <Title $alignment="center">Populares</Title>
      <ColumnPhotos>
        {photos.map((photo) => (
          <Imagem key={photo.id} src={photo.path} alt={photo.alt} />
        ))}
      </ColumnPhotos>
      <Button>Ver Mais</Button>
    </SectionTablet>
  );
};

export default Popular;
