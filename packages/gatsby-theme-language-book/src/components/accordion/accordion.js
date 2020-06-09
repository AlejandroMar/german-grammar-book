import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NestedNavBar from '../nested-nav-bar/nested-nav-bar';
import { NavItem } from '../styledComponents/NavItem';
import { ListItemText } from '@material-ui/core';

const ListRoot = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Span = styled.span`
  display: flex;
  margin-left: 20px;
  margin-top: 1%;
  transition: transform 0.2s linear;
  transform: ${props => (props.accordionArrow ? 'rotate(90deg)}' : '')};
`;

const AccordionParentItem = styled(NavItem)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.grey[400]};
  text-decoration: none;
  transition: 600ms;
  cursor: pointer;
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
  const [accordionArrow, rotateAccordionArrow] = useState(false);

  const expandAccordion = () => {
    setOpenAccordion(!openAccordion);
    rotateAccordionArrow(!accordionArrow);
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
      <AccordionParentItem onClick={expandAccordion}>
        <ListItemText>{props.content.name}</ListItemText>
        <Span accordionArrow={accordionArrow}>&gt;</Span>
      </AccordionParentItem>

      {openAccordion && <NestedList content={props.content.items} />}
    </>
  );
};

export default Accordion;
