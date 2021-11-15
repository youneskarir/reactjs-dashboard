import { createGlobalStyle } from 'styled-components';
import { Fragment } from 'react';
 
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: gray;
  }
`;



function App() {
  return (
    <Fragment>
      <GlobalStyle />

    </Fragment>
  );
}

export default App;
