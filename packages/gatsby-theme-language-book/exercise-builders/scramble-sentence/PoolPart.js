import React, { Component } from "react";
import { PoolPartContainer as Container } from "./PoolStyledComponents";
import { Draggable } from "react-beautiful-dnd";

class PoolPart extends Component {
  state = {};
  render() {
    const { part, index } = this.props;
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
  }
}

export default PoolPart;
