import React from 'react';
import SideBar from '../side-bar/side-bar';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const Main = styled(Box)`
  margin: 2% 5rem 2% 18rem;
  padding: 2rem;
  ${props => props.theme.breakpoints.down('md')} {
    margin: 6vh 8% 8% 8%;
    padding: inherit;
  }
  ${props => props.theme.breakpoints.down('sm')} {
    margin: 6vh 2% 2% 2%;
    padding: inherit;
  }
`;

const Layout = props => {
  return (
    <>
      <Helmet title="the language book" defer={false}>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Box component="aside">
            <SideBar location={props.location} />
          </Box>

          <Main className="main" component="main">
            {props.children}
          </Main>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
};

export default Layout;
