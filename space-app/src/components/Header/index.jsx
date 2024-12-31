import { styled } from "styled-components";
import TextInput from "../TextInput";
import { FaBars } from "react-icons/fa";
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

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1.5rem;
    img {
      max-width: 120px;
    }
    justify-content: flex-end;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  margin-right: auto;
  @media (max-width: 425px) {
    display: block;
  }
`;

// eslint-disable-next-line react/prop-types
const Header = ({ setFilter, isMobile, toggleSidebar }) => {
  return (
    <HeaderStylized>
      {isMobile && (
        <MenuIcon onClick={toggleSidebar}>
          <FaBars size={24} />
          <img src="/images/logo.png" alt="logo" />
        </MenuIcon>
      )}
      <img src="/images/logo.png" alt="logo" />
      <TextInput setFilter={setFilter} />
    </HeaderStylized>
  );
};

export default Header;
