import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Part from './Part';

const Container = styled.div`
  display: block;
  margin: 2% auto;
  border: 1px solid lightgray;
  /* width: 60%; */
  min-height: 10vh;
  border-radius: 2px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const PartList = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 8px; */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const msg = styled.p`
  padding: 8px;
  text-align: center;
  color: white;
`;

const Success = styled(msg)`
  background-color: green;
`;
const RepeatedAnswer = styled(msg)`
  background-color: orangered;
`;

class ParentPhrase extends Component {
  state = {};
  render() {
    const { phrase, allCompleted, repeatedAnswerMsg } = this.props;
    return (
      <Container>
        {repeatedAnswerMsg && (
          <RepeatedAnswer>{repeatedAnswerMsg}</RepeatedAnswer>
        )}
        {allCompleted ? (
          <Success>Bravo you did it!</Success>
        ) : (
          <Droppable
            droppableId="parent-id"
            direction="horizontal"
            isDropDisabled={true}
          >
            {(provided, snapshot) => (
              <PartList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDropDisabled={true}
              >
                {phrase.map((part, index) => (
                  <Part part={part} index={index} key={part.id} />
                ))}
                {provided.placeholder}
              </PartList>
            )}
          </Droppable>
        )}
      </Container>
    );
  }
}

export default ParentPhrase;
