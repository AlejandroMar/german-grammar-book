import React from "react";
import { useDrop } from "react-dnd";
import styled, { css } from "styled-components";
import { Types } from "./reactDndTypes";

const ContentText = styled.p`
  margin-right: 1%;
`;

const AnswerDropBox = styled.div`
  border: 2px dashed lightgrey;
  margin-block-start: 1em;
  min-height: 3vh;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding: 0.5rem;

  ${(props) => {
    if (props.correct) {
      return css`
        background-color: lightgreen;
      `;
    }
  }}
  ${(props) => {
    if (props.isOver) {
      return css`
        background-color: lightblue;
      `;
    }
    return css`
      background-color: "#f9f9f9";
    `;
  }}
  background-clip: padding-box;
  flex-basis: 50%;

  @media only screen and (max-width: 600px) {
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
  return <AnswerDropBox ref={drop} isOver={isOver}></AnswerDropBox>;
};

const ProgressInfo = ({ respondedCounter, possibleAnswers }) => {
  return (
    <div>
      {respondedCounter}/{possibleAnswers}
    </div>
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
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: Types.ANSWER,
    canDrop: (item) => checkIfCorrect(item.answer, index),
    drop: (item) => setStateOnDrop(item, index),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <>
      <ProgressInfo
        respondedCounter={respondedCounter}
        possibleAnswers={possibleAnswers}
      />
      <RenderDropBox
        drop={drop}
        isOver={isOver}
        respondedCounter={respondedCounter}
        possibleAnswers={possibleAnswers}
      />
      <CorrectAnswers respondedAnswers={respondedAnswers} />
    </>
  );
};

export default AnswerDrop;
