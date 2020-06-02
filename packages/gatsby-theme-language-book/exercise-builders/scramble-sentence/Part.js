import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 1%;
  border-radius: 5px;
  margin: 0.5%;
  min-width: fit-content;
  min-height: fit-content;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

class Part extends Component {
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

export default Part;
