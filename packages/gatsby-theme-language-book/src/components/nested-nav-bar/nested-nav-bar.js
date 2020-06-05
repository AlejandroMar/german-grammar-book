import React from 'react';
import Accordion from '../accordion/accordion';
import { NavLink } from './nav-link';

const RenderNavLinks = ({ item, location, openNavbarNav }) => {
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
