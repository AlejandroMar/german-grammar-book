import { NavItem } from '../styledComponents/NavItem';
import { StyledGatsbyLink } from '../styledComponents/StyledGatsbyLink';
import React from 'react';
import { ListItemText } from '@material-ui/core';

export const NavLink = ({ onClickFunc, path, name }) => {
  return (
    <NavItem className="nav-item">
      <StyledGatsbyLink
        to={path}
        activeStyle={{ color: 'purple' }}
        onClick={onClickFunc}
      >
        <ListItemText>{name}</ListItemText>
      </StyledGatsbyLink>
    </NavItem>
  );
};
