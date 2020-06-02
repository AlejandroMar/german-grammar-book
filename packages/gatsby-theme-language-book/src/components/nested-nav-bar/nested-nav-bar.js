import React from 'react';
import { Link } from 'gatsby';
import Accordion from '../accordion/accordion';
import styled from 'styled-components';
//this Component renders the nav links

const NavItem = styled.li`
  width: 80%;
  padding: 0.5rem;
  border-bottom: 1px solid #818185;
`;

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '2rem',
  color: '#b6b6b6',
  textDecoration: 'none',
  transition: '600ms',
};

const NavLink = ({ item, openNavbarNav }) => {
  return (
    <NavItem className="navItem">
      <Link
        to={item.path}
        style={linkStyle}
        activeStyle={{ color: 'purple' }}
        onClick={openNavbarNav}
      >
        {item.name}
      </Link>
    </NavItem>
  );
};

const RenderNavLinks = ({ item, location, openNavbarNav }) => {
  return item.items !== null ? (
    <>
      {/* if there are items it means there is a array of nested links*/}
      <Accordion content={item} location={location} />
    </>
  ) : (
    <NavLink item={item} location={location} openNavbarNav={openNavbarNav} />
  );
};

// this is the main recursion to render the nested NavLinks
const NestedNavBar = ({ content, location, openNavbarNav }) => {
  return Array.isArray(content) ? (
    content.map((item, i) => (
      <RenderNavLinks
        item={item.node ? item.node : item}
        key={i}
        location={location}
        openNavbarNav={openNavbarNav}
      />
    ))
  ) : (
    <RenderNavLinks
      item={content.node ? content.node : content}
      location={location}
      openNavbarNav={openNavbarNav}
    />
  );
};

export default NestedNavBar;
