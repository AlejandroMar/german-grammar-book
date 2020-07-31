import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  submit: {
    transform: 'translate(20%, 40%)',
    color: 'white',
    textTransform: 'none',
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.light,
    },
  },
}));

const ButtonCheckAnswer = ({ onClick }) => {
  const classes = useStyles();
  return (
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
};

export default ButtonCheckAnswer;
