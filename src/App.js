import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme/globalStyle';
import Finder from './components/Finder';

const Application = styled.div`
  background-color: ${theme.bg};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Application>
          <Finder />
        </Application>
      </ThemeProvider>
    );
  }
}

export default App;
