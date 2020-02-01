import React from 'react';
import {
  Navigator,
} from 'react-onsenui';
import Main from './pages/main';
import { PageTypes, } from './pages/config';

function App() {
  function _renderPage(route: { Component: any, key: string | number, passProps: any }, navigator: Navigator) {
    return (
      <route.Component
        key={route.key}
        navigator={navigator}
        {...route.passProps}
      />
    )
  }
  return (
    <Navigator
      renderPage={_renderPage}
      initialRoute={{
        Component: Main,
        key: PageTypes.MAIN,
      }}
    />
  );
}

export default App;
