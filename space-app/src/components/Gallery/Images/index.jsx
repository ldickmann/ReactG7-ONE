/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import ButtonIcon from "../../ButtonIcon";

const Figure = styled.figure`
  width: ${(props) => (props.$spread ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Images = ({ photo, spread = false, requestToZoom, toggleFavorite }) => {
  return (
    <Figure $spread={spread} id={`photo-${photo.id}`}>
      <img src={photo.path} alt={photo.alt} />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <Footer>
          <h4>{photo.fonte}</h4>
          <ButtonIcon onClick={() => toggleFavorite(photo)}>
            <img src="/icons/favorito.png" alt="Icone de favorito" />
          </ButtonIcon>
          {!spread && (
            <ButtonIcon
              aria-hidden={spread}
              onClick={() => requestToZoom(photo)}
            >
              <img src="/icons/expandir.png" alt="Icone de expandir" />
            </ButtonIcon>
          )}
        </Footer>
      </figcaption>
    </Figure>
  );
};

export default Images;
