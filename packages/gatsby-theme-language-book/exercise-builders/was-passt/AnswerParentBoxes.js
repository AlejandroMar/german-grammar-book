import React from "react";
import AnswerDrag from "./AnswerDrag";
import { AnswerCol } from "./styledComponents/index";

const AnswerParentBoxes = ({ answers }) => {
  return answers.map((answer, index) => (
    <AnswerCol key={index}>
      <AnswerDrag answer={answer} />
    </AnswerCol>
  ));
};

export default AnswerParentBoxes;
