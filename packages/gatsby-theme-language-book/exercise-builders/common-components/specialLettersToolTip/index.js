import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  letterTool: {
    position: 'absolute',
    listStyle: 'none',
    marginTop: '2px',
    width: '7rem',
    padding: '0',
    zIndex: '1200',
    backgroundColor: theme.palette.info.light,
    opacity: '.8',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },

  letterToolItem: {
    textAlign: 'center',
    float: 'left',
    width: '1rem',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'white',
    },
  },
}));

const SpecialLettersToolTip = ({ fun, letters, name }) => {
  const classes = useStyles();
  return (
    <ul className={classes.letterTool}>
      {letters.map((letter, i) => (
        <li
          className={classes.letterToolItem}
          key={i}
          onMouseDown={e => fun(e, name)}
        >
          {letter}
        </li>
      ))}
    </ul>
  );
};

export default SpecialLettersToolTip;
