import { styled } from "styled-components";
import TextInput from "../TextInput";

const HeaderStylized = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Header = () => {
  return (
    <HeaderStylized>
      <img src="/images/logo.png" alt="" />
      <TextInput />
    </HeaderStylized>
  );
};

export default Header;
