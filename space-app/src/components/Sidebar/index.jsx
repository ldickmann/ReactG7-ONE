import { styled } from "styled-components";

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
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/maisvistas">Mais Vistas</a>
          </li>
        </StyledSidebar>
      </nav>
    </aside>
  );
};

export default Sidebar;
