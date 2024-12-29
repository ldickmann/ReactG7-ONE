import { styled } from "styled-components";

const StyledFigure = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  max-width: 100%;
  min-height: 328px;
  display: flex;
  margin: 0;
  border-radius: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  flex-grow: 1;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-align: center;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 300px;
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
