import { styled } from "styled-components";

const StyledItemNavigation = styled.li``;

const ItemNavigation = ({
  children,
  activeIcon,
  inactiveIcon,
  active = false,
}) => {
  return (
    <StyledItemNavigation>
      <img src={active ? activeIcon : inactiveIcon} alt="" />
      {children}
    </StyledItemNavigation>
  );
};

export default ItemNavigation;
