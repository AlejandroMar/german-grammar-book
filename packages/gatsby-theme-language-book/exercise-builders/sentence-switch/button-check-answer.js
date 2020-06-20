import Button from '@material-ui/core/Button';
import React from 'react';

export const ButtonCheckAnswer = ({ classes, onClick }) => (
  <Button
    variant="contained"
    type="submit"
    onClick={onClick}
    className={classes.submit}
    size="medium"
  >
    salvar
  </Button>
);
