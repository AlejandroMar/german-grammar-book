import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 0.5%;
  border: 2px dashed lightgrey;
  min-height: 10vh;
  border-radius: 2px;
  background-clip: padding-box;
  background-color: white;

  ${(props) => {
    // If its droppable display first

    if (!props.isDropDisabled) {
      return css`
        order: 0;
      `;
    }
    return css`
      order: 2;
    `;
  }}

  ${(props) =>
    props.done &&
    css`
      order: 1;
    `};
`;

const PoolPartList = styled.div`
  display: flex;
  min-height: 10vh;
  align-items: center;
  padding: 1%;
  ${(props) =>
    props.isDraggingOver &&
    css`
      background-color: lightblue;
    `};
  ${(props) =>
    props.done &&
    css`
      background-color: lightgreen;
    `};
`;

const PoolPartContainer = styled.div`
  border: 1px solid lightgrey;
  padding: 2%;
  border-radius: 5px;
  margin: 0.5%;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
  &:first-child::first-letter {
    text-transform: capitalize;
  }

  ${(props) =>
    props.isDragging &&
    css`
      padding: inherit;
    `};
`;

export { Container, PoolPartContainer, PoolPartList };
