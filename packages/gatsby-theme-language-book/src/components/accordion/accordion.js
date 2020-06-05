import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NestedNavBar from '../nested-nav-bar/nested-nav-bar';
import { NavLink } from '../nested-nav-bar/nav-link';

const ListRoot = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const NestedList = ({ content }) => {
  return (
    <ListRoot className="nestedListRoot">
      {content.map((item, i) => (
        //this is another recursion call
        <NestedNavBar content={item} key={i} />
      ))}
    </ListRoot>
  );
};

const Accordion = props => {
  // If openAccordion = true open sub menu
  const [openAccordion, setOpenAccordion] = useState(false);

  const expandAccordion = () => {
    setOpenAccordion(!openAccordion);
  };

  useEffect(() => {
    if (
      props.location &&
      String(props.location.pathname).includes(props.content.path)
    ) {
      //TODO: try to be more specific qith the matching
      //console.log(props.location.pathname)
      //console.log(props.content)
      expandAccordion(!openAccordion);
    }
  }, []);

  return (
    <>
      <NavLink
        path={props.content.path}
        name={props.content.name}
        onClickFunc={expandAccordion}
      />

      {openAccordion && <NestedList content={props.content.items} />}
    </>
  );
};

export default Accordion;
