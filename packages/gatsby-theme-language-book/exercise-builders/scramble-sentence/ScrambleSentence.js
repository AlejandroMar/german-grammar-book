import React, { Component } from 'react';
import { initialData } from './data';
import produce from 'immer';
import styled, { withTheme } from 'styled-components';
import ParentPhrase from './ParentPhrase';
import { DragDropContext } from 'react-beautiful-dnd';

import Pool from './Pool';
import PoolDone from './PoolDone';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* @media (max-width: 768px) {
    width: 95%;
  } */
`;

class ScrambleSentence extends Component {
  state = {
    ...initialData,
    ...this.props.phraseData,
  };

  componentDidMount() {
    console.log('component did mount');
    // for each answer give me a pool
    const pools = Object.keys(this.state.answers).reduce(
      (acc, answer, index) => {
        acc[`pool-${index + 1}`] = {
          id: `pool-${index + 1}`, // same as name
          phrasePartIds: [],
          title: String,
          text: String,
          isDropppable: false,
          done: {
            correct: false,
            answerId: String, // answers.answer
          },
        };
        return acc;
      },
      {}
    );

    const newInitialOrder = [...this.state.initialPhraseOrder];

    const newState = produce(this.state, draft => {
      draft.parentPhrase.phrasePartIds = newInitialOrder;
      draft.pools = pools;
    });

    this.setState(newState);
  }

  checkSolution = (partIds, answers) => {
    //console.log("answers: ", Object.keys(answers));
    //console.log("parts: ", partIds);
    const solution = {
      answerId: null,
      correct: false,
    };
    Object.keys(answers)
      .map((currentAnswer, index) => {
        return answers[currentAnswer].pattern.map((part, index) => {
          //console.log("part: ", part);
          //console.log("partfrom index: ", partIds[index]);
          if (part === partIds[index]) {
            //console.log("match");
            return { correct: true, id: answers[currentAnswer].id };
          }
          return { correct: false, id: null };
        });
      })
      .forEach((answer, index) => {
        if (answer.every(val => val.correct === true)) {
          //console.log("each answer: ", answer[0].id);
          solution.answerId = answer[0].id;
          solution.correct = true;
        }
      });

    //console.log(solution);

    return solution;
  };

  setStateIfCorrect = async (answerId, pool) => {
    await this.setState({ repeatedAnswerMsg: null });
    const repeatedAnswer = this.state.answers[answerId].done;

    if (repeatedAnswer) {
      this.setState({
        repeatedAnswerMsg: 'You gave this answer already, please try again.',
      });
      return;
    }

    const newInitialOrder = [...this.state.initialPhraseOrder];
    const newState = produce(this.state, draft => {
      draft.isDroppableIndex = draft.isDroppableIndex + 1;
      draft.completedPhrases = draft.completedPhrases + 1;
      draft.parentPhrase.phrasePartIds = newInitialOrder;
      draft.answers[answerId].done = true;
      draft.pools[pool.id].done.correct = true;
      draft.pools[pool.id].done.answerId = answerId;
    });

    this.setState(newState, () => {
      if (
        this.state.completedPhrases === Object.keys(this.state.answers).length
      ) {
        this.setState({ allCompleted: true });
      }
    });
  };

  // on end
  onDragEnd = result => {
    //console.log(result);

    const { destination, source, draggableId } = result;
    // if dropped nowhere
    if (!destination) return;
    // if dropped in same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start =
      source.droppableId === 'parent-id'
        ? this.state.parentPhrase
        : this.state.pools[source.droppableId];

    const finish = this.state.pools[destination.droppableId];

    // if start and finish are the same just reorder
    if (start.id === finish.id) {
      const newStart = Array.from(start.phrasePartIds);
      newStart.splice(source.index, 1);
      newStart.splice(destination.index, 0, draggableId);

      const newState = produce(this.state, draft => {
        draft.pools[start.id].phrasePartIds = newStart;
      });

      this.setState(newState, () => {
        const { correct, answerId } = this.checkSolution(
          newStart,
          this.state.answers
        );
        if (correct) {
          this.setStateIfCorrect(answerId, this.state.pools[start.id]);
        }
      });

      return;
    }
    // if dropped in another pool
    //console.log("start: ", start, "finins: ", finish);
    const newStart = Array.from(start.phrasePartIds);
    newStart.splice(source.index, 1);

    const newFinish = Array.from(finish.phrasePartIds);
    newFinish.splice(destination.index, 0, draggableId);

    const newState = produce(this.state, draft => {
      draft.parentPhrase.phrasePartIds = newStart;
      draft.pools[finish.id].phrasePartIds = newFinish;
    });

    this.setState(newState, () => {
      const { correct, answerId } = this.checkSolution(
        newFinish,
        this.state.answers
      );
      if (correct) {
        this.setStateIfCorrect(answerId, this.state.pools[finish.id]);
      }
    });
  };

  render() {
    const phrase = this.state.parentPhrase.phrasePartIds.map((part, index) => {
      return this.state.phrase[part];
    });

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <ParentPhrase
          phrase={phrase}
          allCompleted={this.state.allCompleted}
          repeatedAnswerMsg={this.state.repeatedAnswerMsg}
        />
        <Container>
          {Object.keys(this.state.pools).length &&
            Object.keys(this.state.pools).map((currentPool, index) => {
              const pool = this.state.pools[currentPool];
              //console.log("pool: ", pool);
              const phrase = pool.phrasePartIds.map(
                (part, index) => this.state.phrase[part]
              );

              const isDropDisabled = this.state.isDroppableIndex !== index;
              const completedPool = pool.done.correct;
              if (completedPool) {
                console.log('completed');
                return <PoolDone key={pool.id} phrase={phrase} pool={pool} />;
              }

              return (
                <Pool
                  key={pool.id}
                  phrase={phrase}
                  pool={pool}
                  index={index}
                  isDropDisabled={isDropDisabled}
                />
              );
            })}
        </Container>
      </DragDropContext>
    );
  }
}

export default withTheme(ScrambleSentence);
