import React from 'react';
import styled from 'styled-components';

const NavBarHamWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: 3.5%;
  display: none;
  background-color: rgb(92, 3, 92);
  border: none;
  border-radius: 4px;
  cursor: pointer;

  & span {
    display: block;
    width: 33px;
    height: 2px;
    margin: 5px;
    position: relative;
    background-color: white;
    z-index: 1;
  }

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.values.lg}) {
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
