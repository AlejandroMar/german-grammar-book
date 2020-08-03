import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Part from './Part';
import { Box, Paper } from '@material-ui/core';

const Container = styled(Box)`
  position: relative;
  display: block;
  margin: 2% auto;
  min-height: 10vh;
  border-radius: 2px;
  background-color: ${props => props.theme.palette.primary.dark};

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const PartList = styled.div`
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: center;
    padding: 0.8%;
  }
`;
const msg = styled(Paper)`
  padding: 0.8%;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  text-align: center;
  color: white;
`;

const Success = styled(msg)`
  background-color: ${({ theme }) => theme.palette.success.main};
`;
const RepeatedAnswer = styled(msg)`
  background-color: ${({ theme }) => theme.palette.warning.dark};
`;

const ParentPhrase = ({ allCompleted, phrase, repeatedAnswerMsg }) => {
  return (
    <Container border={1} borderColor="grey.500">
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
          {provided => (
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
};

export default ParentPhrase;
