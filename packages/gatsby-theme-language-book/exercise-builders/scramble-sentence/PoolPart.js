import React from 'react';
import { PoolPartContainer as Container } from './PoolStyledComponents';
import { Draggable } from 'react-beautiful-dnd';

const PoolPart = ({ index, part }) => {
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

export default PoolPart;
