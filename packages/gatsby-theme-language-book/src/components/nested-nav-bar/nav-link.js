import { NavItem } from '../styledComponents/NavItem';
import { StyledGatsbyLink } from '../styledComponents/StyledGatsbyLink';
import React from 'react';

export const NavLink = ({ onClickFunc, path, name }) => {
  return (
    <NavItem className="nav-item">
      <StyledGatsbyLink
        to={path}
        activeStyle={{ color: 'green' }}
        onClick={onClickFunc}
      >
        {name}
      </StyledGatsbyLink>
    </NavItem>
  );
};
