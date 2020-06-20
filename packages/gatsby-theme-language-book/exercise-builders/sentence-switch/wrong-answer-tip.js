import { Box } from '@material-ui/core';
import React from 'react';

export const WrongAnswerTip = ({ classes, msg }) => (
  <>
    {msg && (
      <Box component="span" className={classes.wrong}>
        &#10007; {msg}
      </Box>
    )}
  </>
);
