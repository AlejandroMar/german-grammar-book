import React from 'react';
import Accordion from '../accordion/accordion';
import { NavItem } from '../styledComponents/NavItem';
import { StyledGatsbyLink } from '../styledComponents/StyledGatsbyLink';

const NavLink = ({ item, openNavbarNav }) => {
  return (
    <NavItem className="nav-item">
      <StyledGatsbyLink
        to={item.path}
        activeStyle={{ color: 'purple' }}
        onClick={openNavbarNav}
      >
        {item.name}
      </StyledGatsbyLink>
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
