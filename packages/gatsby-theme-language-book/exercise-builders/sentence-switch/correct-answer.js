import { Box, Paper } from '@material-ui/core';
import cx from 'classnames';
import React from 'react';

const CorrectAnswerTip = ({ className, msg }) => (
  <Box component="span" className={className}>
    &#10003; {msg}
  </Box>
);

export const CorrectAnswer = ({
  classes,
  complementoLocal,
  msg,
  sujetoLocal,
  verboLocal,
}) => (
  <Paper className={classes.correctAnswer}>
    <Box component="span" className={cx(classes.answerPart, classes.sujeto)}>
      {sujetoLocal}
    </Box>
    <Box component="span" className={cx(classes.answerPart, classes.verbo)}>
      {verboLocal}
    </Box>
    <Box
      component="span"
      className={cx(classes.answerPart, classes.complemento)}
    >
      {complementoLocal}
    </Box>

    <CorrectAnswerTip className={classes.correct} msg={msg} />
  </Paper>
);
