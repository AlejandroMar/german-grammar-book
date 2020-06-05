import React, { useContext } from 'react';
import Accordion from '../accordion/accordion';
import { NavLink } from './nav-link';
import { NavBarContext } from '../side-bar/side-bar';

const RenderNavLinks = ({ item, location }) => {
  const openNavbarNav = useContext(NavBarContext);

  return item.items !== null ? (
    <>
      {/* if there are items it means there is a array of nested links*/}
      <Accordion content={item} location={location} />
    </>
  ) : (
    <NavLink path={item.path} name={item.name} onClickFunc={openNavbarNav} />
  );
};

// this is the main recursion to render the nested NavLinks
const NestedNavBar = ({ content, location }) => {
  return Array.isArray(content) ? (
    content.map((item, i) => (
      <RenderNavLinks
        item={item.node ? item.node : item}
        key={i}
        location={location}
      />
    ))
  ) : (
    <RenderNavLinks
      item={content.node ? content.node : content}
      location={location}
    />
  );
};

export default NestedNavBar;
