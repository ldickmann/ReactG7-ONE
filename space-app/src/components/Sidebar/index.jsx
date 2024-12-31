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
            activeIcon="/icons/mais-vistas-ativo.png"
            inactiveIcon="/icons/mais-vistas-inativo.png"
          >
            Mais Vistas
          </ItemNavigation>
          <ItemNavigation
            activeIcon="/icons/mais-curtidas-ativo.png"
            inactiveIcon="/icons/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </ItemNavigation>
          <ItemNavigation
            activeIcon="/icons/novas-ativo.png"
            inactiveIcon="/icons/novas-inativo.png"
          >
            Novas
          </ItemNavigation>
          <ItemNavigation
            activeIcon="/icons/surpreenda-me-ativo.png"
            inactiveIcon="/icons/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </ItemNavigation>
        </StyledSidebar>
      </nav>
    </aside>
  );
};

export default Sidebar;
