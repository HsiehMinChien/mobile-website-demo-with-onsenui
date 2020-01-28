import React from 'react';
import Styled from 'styled-components';
import {
  Page,
} from 'react-onsenui';
import './App.css';

const StyledDiv = Styled.div`
  color: red;
`;

function App() {
  return (
    <Page
      renderFixed={() => <div>fixed</div>}
      renderToolbar={() => <div>...</div>}
      contentStyle={{ padding: 40 }}>
      <div> Page content </div>
    </Page>
  );
}

export default App;
