import React from 'react';
import styled from 'styled-components';
import isTouchDevice from 'is-touch-device';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  margin: 0 auto;
  border: 1px solid blue;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Row = styled.div`
  display: flex;
`;
const Col = styled.div`
  flex-basis: ${props => `${props.flexBasis}%`};
  flex-direction: column;
  border: 1px solid green;
  padding: 1rem;
`;

const AnswersParentCol = styled(Col)`
  /* it needs height to make it sticky */
  height: ${() => (isTouchDevice() ? '100vh' : '100%')};
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  overflow: auto;
`;

const AnswerCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ContentText = styled.p`
  margin-right: 1%;
`;

export { Container, Row, AnswerCol, ContentText, Col, AnswersParentCol };
