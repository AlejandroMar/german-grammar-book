import { Box, Paper } from '@material-ui/core';
import cx from 'classnames';
import React from 'react';

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

    <Box component="span" className={classes.correct}>
      &#10003; {msg}
    </Box>
  </Paper>
);
