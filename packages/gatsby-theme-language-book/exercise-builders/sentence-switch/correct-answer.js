import { Box, Paper } from '@material-ui/core';
import cx from 'classnames';
import React from 'react';

const CorrectAnswerTip = ({ className, msg }) => (
  <Box component="span" className={className}>
    &#10003; {msg}
  </Box>
);

export const CorrectAnswer = ({ classes, localComplement, msg, localSubject, localVerb, }) => (
  <Paper className={classes.correctAnswer}>
    <Box component="span" className={cx(classes.answerPart, classes.subject)}>
      {localSubject}
    </Box>
    <Box component="span" className={cx(classes.answerPart, classes.verb)}>
      {localVerb}
    </Box>
    <Box
      component="span"
      className={cx(classes.answerPart, classes.complement)}
    >
      {localComplement}
    </Box>

    <CorrectAnswerTip className={classes.correct} msg={msg} />
  </Paper>
);
