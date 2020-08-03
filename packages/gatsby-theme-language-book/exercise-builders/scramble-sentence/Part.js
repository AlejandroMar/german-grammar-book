import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Paper } from '@material-ui/core';

const Container = styled(Paper)`
  padding: 1%;
  margin: 0.5%;
  min-width: fit-content;
  min-height: fit-content;
  background-color: ${props =>
    props.isDragging ? props.theme.palette.success.light : 'white'};
`;

const Part = ({ index, part }) => {
  return (
    <Draggable draggableId={part.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {part.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Part;
