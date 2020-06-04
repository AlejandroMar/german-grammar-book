import React from 'react';
import SideBar from '../side-bar/side-bar';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const Main = styled.main`
  margin: 2% 5rem 2% 18rem;
  padding: 2rem;

  @media only screen and (max-width: 1140px) {
    margin: 6vh 8% 8% 8%;
    padding: inherit;
  }
  @media only screen and (max-width: 540px) {
    margin: 6vh 2% 2% 2%;
    padding: inherit;
  }
`;

const Layout = props => {
  return (
    <>
      <Helmet title="the language book" defer={false}>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <aside>
          <SideBar location={props.location} />
        </aside>

        <Main className="main">{props.children}</Main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
