import { styled } from "styled-components";
import TextInput from "../TextInput";

const HeaderStylized = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }

  @media (max-width: 768px) {
    padding: 2.8rem 1.5rem;
  }
`;

// eslint-disable-next-line react/prop-types
const Header = ({ setFilter }) => {
  return (
    <HeaderStylized>
      <img src="/images/logo.png" alt="" />
      <TextInput setFilter={setFilter} />
    </HeaderStylized>
  );
};

export default Header;
