import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '.5%',
    padding: '1%',
    margin: '2% 0',
  },



  inputAndLettersWrap: {
    display: 'inline-block',
    width: '20%',
    position: 'relative',
    margin: ' 1% 5px',
  },

  correctAnswer: {
    width: '60%',
  },

  answerPart: {
    padding: '2% 2%',
    display: 'inline-block',
    color: 'white',
  },

  subject: {
    backgroundColor: theme.palette.primary.dark,
  },
  verb: {
    backgroundColor: theme.palette.warning.dark,
  },
  complement: {
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
