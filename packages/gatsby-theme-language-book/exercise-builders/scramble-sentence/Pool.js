import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PoolPart from './PoolPart';
import { Container, PoolPartList } from './PoolStyledComponents';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const DropHere = styled(Paper)`
  z-index: 0;
  position: relative;
  background-color: ${props => props.theme.palette.grey[400]};
  height: 1%;
  padding: 1%;
  margin: 0 auto;

  &::after {
    content: '\\2193';
    position: absolute;
    top: 75%;
    left: 50%;
  }
`;

const Pool = ({ isDropDisabled, phrase, pool }) => {
  return (
    <Container isDropDisabled={isDropDisabled} done={pool.done.correct}>
      {!isDropDisabled && <DropHere square>Drop here</DropHere>}
      <Droppable
        droppableId={pool.id}
        direction="horizontal"
        isDropDisabled={isDropDisabled}
      >
        {(provided, snapshot) => (
          <PoolPartList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {phrase.map((part, index) => (
              <PoolPart part={part} index={index} key={part.id} />
            ))}
            {provided.placeholder}
          </PoolPartList>
        )}
      </Droppable>
    </Container>
  );
};

export default Pool;
