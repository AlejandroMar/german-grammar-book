import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

const NavBarHamWrapper = styled(Box)`
  position: absolute;
  right: 5%;
  top: 3%;
  display: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;

  & span {
    display: block;
    border-radius: 5px;
    width: 33px;
    height: 2px;
    margin: 6px;

    position: relative;
    background-color: ${({ theme }) => theme.palette.common.white};
    z-index: 1;
  }
  ${props => props.theme.breakpoints.down('md')} {
    display: block;
  }
`;

const NavHamburger = ({ openNavbarNav }) => (
  <NavBarHamWrapper onClick={openNavbarNav} className="navBarButton">
    <span>{''}</span>
    <span>{''}</span>
    <span>{''}</span>
  </NavBarHamWrapper>
);
export default NavHamburger;
