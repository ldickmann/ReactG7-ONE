import { styled } from "styled-components";
import ItemNavigation from "./ItemNavigation";

const StyledSidebar = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <StyledSidebar>
          <ItemNavigation
            activeIcon="/icons/home-active.png"
            inactiveIcon="/icons/home-inactive.png"
            active={true}
          >
            Início
          </ItemNavigation>
          <ItemNavigation
            activeIcon="/icons/mais-vistas.png"
            inactiveIcon="/icons/mais-vistas-inativo.png"
          >
            Mais Vistas
          </ItemNavigation>
        </StyledSidebar>
      </nav>
    </aside>
  );
};

export default Sidebar;
