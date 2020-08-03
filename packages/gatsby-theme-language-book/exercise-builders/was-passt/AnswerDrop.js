import React from 'react';
import { useDrop } from 'react-dnd';
import styled, { css } from 'styled-components';
import { Types } from './reactDndTypes';
import { Paper } from '@material-ui/core';

const Info = styled(Paper)`
  padding: 4px;
  width: fit-content;
  margin: 0 0 0 auto;
  background-color: ${props => props.theme.palette.warning.light};
`;

const ContentText = styled(Paper)`
  margin-right: 1%;
  margin-bottom: 8px;
  padding: 4px;
  background-color: ${props => props.theme.palette.success.light};
`;

const AnswerDropBox = styled.div`
  border: 2px dashed lightgrey;
  margin-block-start: 1em;
  min-height: 3vh;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding: 0.8rem;

  ${props => {
    if (props.correct) {
      return css`
        background-color: ${({ theme }) => theme.palette.success.light};
      `;
    }
  }}
  ${props => {
    if (props.isOver) {
      return css`
        background-color: ${({ theme }) => theme.palette.info.light};
      `;
    }
    return css`
      background-color: #f9f9f9;
    `;
  }}
  background-clip: padding-box;
  flex-basis: 50%;

  ${({ theme }) => theme.breakpoints.down('xs')} {
    padding: 1rem;
  }
`;

const CorrectAnswers = ({ respondedAnswers }) => {
  return (
    respondedAnswers &&
    respondedAnswers.map((answer, index) => (
      <ContentText key={index}>{answer.text}</ContentText>
    ))
  );
};

const RenderDropBox = ({ drop, isOver, respondedCounter, possibleAnswers }) => {
  if (respondedCounter === possibleAnswers) {
    return null;
  }
  return <AnswerDropBox ref={drop} isOver={isOver} />;
};

const ProgressInfo = ({ respondedCounter, possibleAnswers }) => {
  return (
    <Info>
      {respondedCounter}/{possibleAnswers}
    </Info>
  );
};

const AnswerDrop = ({
  index,
  checkIfCorrect,
  setStateOnDrop,
  respondedAnswers,
  respondedCounter,
  possibleAnswers,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: Types.ANSWER,
    canDrop: item => checkIfCorrect(item.answer, index),
    drop: item => setStateOnDrop(item, index),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <>
      <RenderDropBox
        drop={drop}
        isOver={isOver}
        respondedCounter={respondedCounter}
        possibleAnswers={possibleAnswers}
      />
      <CorrectAnswers respondedAnswers={respondedAnswers} />
      <ProgressInfo
        respondedCounter={respondedCounter}
        possibleAnswers={possibleAnswers}
      />
    </>
  );
};

export default AnswerDrop;
