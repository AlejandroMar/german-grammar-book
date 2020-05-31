import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import { usePreview } from "react-dnd-preview";
import isTouchDevice from "is-touch-device";
import { Types } from "./reactDndTypes";

const ContentText = styled.div`
  border: 1px solid lightgray;
  padding: 4%;
  border-radius: 5px;
  background-color: white;
  flex-basis: 100%;
`;
const PreviewText = styled(ContentText)`
  padding: 1%;
  background-color: white;
`;

const DragPreviewForTouch = () => {
  const { display, itemType, item, style } = usePreview();
  if (!display) {
    return null;
  }
  return <PreviewText style={style}>{item.answer.text}</PreviewText>;
};

// Main Component
const AnswerDrag = ({ answer }) => {
  // hook from reactDnd
  const [, drag] = useDrag({
    item: { type: Types.ANSWER, answer },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <ContentText ref={drag}>{answer.text}</ContentText>
      {isTouchDevice() && <DragPreviewForTouch />}
    </>
  );
};

export default AnswerDrag;
