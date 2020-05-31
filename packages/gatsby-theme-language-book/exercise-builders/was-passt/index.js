import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'
/* import { DndProvider } from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch"; */

import Backend from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd'
import isTouchDevice from 'is-touch-device'

import { data } from './data'
import { shuffleArray, repeatedAnswer } from './utils'

import AnswerDrop from './AnswerDrop'
import AnswerParentBoxes from './AnswerParentBoxes'

import {
  Container,
  Row,
  ContentText,
  Col,
  AnswersParentCol,
} from './styledComponents/index'

const chooseBackend = isTouchDevice() ? TouchBackend : Backend

// Main component
function Index() {
  const [state, setState] = useImmer(data)

  useEffect(() => {
    setState(draft => {
      draft.shuffledAnswers = shuffleArray(Object.keys(draft.answers)).map(
        answer => {
          return { key: answer, text: draft.answers[answer] }
        }
      )
    })
  }, [])

  const checkIfCorrect = (draggedItem, index) => {
    if (state.questions[index].answers.includes(draggedItem.key)) {
      return true
    }
    return false
  }

  const setStateOnDrop = (droppedItem, index) => {
    // if answer is correct but already given don't setState
    if (repeatedAnswer(state.questions[index].responded, droppedItem)) {
      return
    }

    setState(draft => {
      draft.questions[index].responded.push(
        Object.assign({}, droppedItem.answer)
      )
      draft.questions[index].respondedCounter += 1
    })
  }

  return (
    <DndProvider backend={chooseBackend}>
      <Container>
        <Col flexBasis={70}>
          {state.questions.map((phrase, index) => {
            return (
              <Row key={index}>
                <Col flexBasis={40}>
                  <ContentText>{phrase.question}</ContentText>
                </Col>
                <Col flexBasis={60}>
                  <AnswerDrop
                    index={index}
                    checkIfCorrect={checkIfCorrect}
                    setStateOnDrop={setStateOnDrop}
                    respondedAnswers={phrase.responded}
                    respondedCounter={phrase.respondedCounter}
                    possibleAnswers={phrase.answers.length}
                  />
                </Col>
              </Row>
            )
          })}
        </Col>
        <AnswersParentCol flexBasis={30} className="sticky">
          <AnswerParentBoxes answers={state.shuffledAnswers} />
        </AnswersParentCol>
      </Container>
    </DndProvider>
  )
}

export default Index
