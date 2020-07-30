import {
  Card,
  List,
  ListItem as MuListItem,
  ListItemText,
} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';

const ListItem = styled(MuListItem)`
  padding-bottom: 0;
  padding-top: 0;
`;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  item: {
    height: '100%',
  },
}));

const SubjectsColumn = ({ subjects }) => {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          Sujetos:
        </Typography>

        <List>
          {subjects.map((subject, i) => (
            <ListItem key={i}>
              <ListItemText primary={subject.name} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const VerbsColumn = ({ predefinedVerbs, verbs }) => {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          Verbos:
        </Typography>
        <List>
          {predefinedVerbs
            ? predefinedVerbs.map((verb, i) => (
                <ListItem key={i}>
                  <ListItemText key={i}>{verb}</ListItemText>
                </ListItem>
              ))
            : verbs.map((verb, i) => (
                <ListItem key={i}>
                  <ListItemText key={i}>{verb.nombre}</ListItemText>
                </ListItem>
              ))}
        </List>
      </CardContent>
    </Card>
  );
};

const ComplementsColumn = ({ complements }) => {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          Complementos:
        </Typography>
        <List>
          {complements.map((complement, i) => (
            <ListItem key={i}>
              <ListItemText>{complement.texto}</ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const Pools = ({ predefinedVerbs, subjects, verbs, complements }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SubjectsColumn subjects={subjects} />
        </Grid>
        <Grid item xs={4}>
          <VerbsColumn predefinedVerbs={predefinedVerbs} verbs={verbs} />
        </Grid>
        <Grid item xs={4}>
          <ComplementsColumn complements={complements} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pools;
