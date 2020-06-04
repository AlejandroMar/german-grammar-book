import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NestedNavBar from '../nested-nav-bar/nested-nav-bar';
import { NavItem } from '../styledComponents/NavItem';
import { StyledGatsbyLink } from '../styledComponents/StyledGatsbyLink';

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
      <NavItem className="nav-item">
        <StyledGatsbyLink
          to={props.content.path}
          onClick={expandAccordion}
          activeStyle={{ color: 'purple' }}
        >
          {props.content.name}
        </StyledGatsbyLink>
      </NavItem>
      {openAccordion && <NestedList content={props.content.items} />}
    </>
  );
};

export default Accordion;
