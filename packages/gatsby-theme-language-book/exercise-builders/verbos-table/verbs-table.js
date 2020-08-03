import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.bg.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableRows = ({ table }) => {
  if (table && table.length) {
    return table.map((row, index) => {
      const keys = Object.keys(row);
      return (
        <TableRow key={`${index}-1`}>
          {keys.map((key, i) => (
            <TableCell key={`${i}-${[key]}`}>
              <Box letterSpacing={1}>{row[key]}</Box>
            </TableCell>
          ))}
        </TableRow>
      );
    });
  }
  return null;
};

const TableHeaders = ({ table }) => {
  if (table && table.length) {
    const keys = Object.keys(table[0]);
    return (
      <TableHead>
        <TableRow>
          {keys.map((key, i) => {
            return (
              <StyledTableCell key={i}>
                <Box letterSpacing={1}>{key.toUpperCase()}</Box>
              </StyledTableCell>
            );
          })}
        </TableRow>
      </TableHead>
    );
  }
  return null;
};

const VerbsTable = ({ table, displayHeader = true }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        {displayHeader && <TableHeaders table={table} />}
        <TableBody>
          <TableRows table={table} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VerbsTable;
