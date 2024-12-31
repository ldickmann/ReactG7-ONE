import { styled } from "styled-components";

const Title = styled.h1`
  color: #7b78e5;
  font-size: 2rem;
  text-align: ${(props) => (props.$alignment ? props.$alignment : "left")};
`;

export default Title;