import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '.5%',
    padding: '1%',
    margin: '2% 0',
  },

  inputSujeto: {
    //borderBottom: '1px solid turquoise',
  },
  inputVerbo: {
    //borderBottom: '1px solid wheat',
  },
  inputComplemento: {
    //borderBottom: '1px solid teal',
  },

  inputAndLettersWrap: {
    display: 'inline-block',
    width: '20%',
    position: 'relative',
    margin: ' 1% 5px',
  },

  submit: {
    transform: 'translate(20%, 40%)',
    color: 'white',
    textTransform: 'none',
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.light,
    },
  },

  correctAnswer: {
    width: '60%',
  },

  answerPart: {
    padding: '2% 2%',
    display: 'inline-block',
    color: 'white',
  },

  sujeto: {
    backgroundColor: theme.palette.primary.dark,
  },
  verbo: {
    backgroundColor: theme.palette.warning.dark,
  },
  complemento: {
    backgroundColor: theme.palette.info.dark,
  },

  correct: {
    color: theme.palette.success.light,
    marginLeft: '5%',
    display: 'inline-block',
    textAlign: 'center',
  },

  wrong: {
    marginLeft: '3%',
    display: 'inline-block',
    color: theme.palette.error.light,
    [theme.breakpoints.up('md')]: {
      transform: 'translateY(50%)',
    },
  },
}));
