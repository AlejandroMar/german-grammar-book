import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
  List,
  ListItemText,
  ListItem as MuListItem,
  Card,
} from '@material-ui/core';
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

const SujetosColumn = ({ sujetos }) => {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          Sujetos:
        </Typography>

        <List>
          {sujetos.map((sujeto, i) => (
            <ListItem key={i}>
              <ListItemText primary={sujeto.name} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const VerbosColumn = ({ verbosPre, verbos }) => {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          Verbos:
        </Typography>
        <List>
          {verbosPre
            ? verbosPre.map((verbo, i) => (
                <ListItem key={i}>
                  <ListItemText key={i}>{verbo}</ListItemText>
                </ListItem>
              ))
            : verbos.map((verbo, i) => (
                <ListItem key={i}>
                  <ListItemText key={i}>{verbo.nombre}</ListItemText>
                </ListItem>
              ))}
        </List>
      </CardContent>
    </Card>
  );
};

const ComplementosColumn = ({ complementos }) => {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          Complementos:
        </Typography>
        <List>
          {complementos.map((complemento, i) => (
            <ListItem key={i}>
              <ListItemText>{complemento.texto}</ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const Pools = ({ verbosPre, sujetos, verbos, complementos }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SujetosColumn sujetos={sujetos} />
        </Grid>
        <Grid item xs={4}>
          <VerbosColumn verbosPre={verbosPre} verbos={verbos} />
        </Grid>
        <Grid item xs={4}>
          <ComplementosColumn complementos={complementos} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pools;
