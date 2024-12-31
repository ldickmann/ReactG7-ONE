import { styled } from "styled-components";

const StyledFigure = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  max-width: 99%;
  min-height: 328px;
  flex-shrink: 0;
  display: flex;
  margin: 0;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-grow: 1;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 300px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// eslint-disable-next-line react/prop-types
const Banner = ({ backgroundImage, title }) => {
  return (
    <StyledFigure $backgroundImage={backgroundImage}>
      <StyledTitle>{title}</StyledTitle>
    </StyledFigure>
  );
};

export default Banner;