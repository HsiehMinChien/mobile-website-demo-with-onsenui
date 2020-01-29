import React from 'react';
import {
  Navigator,
} from 'react-onsenui';
import MainPage from './pages/main';
import { PageTypes, } from './pages/config';

import './App.css';

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
        Component: MainPage,
        key: PageTypes.MAIN_PAGE,
      }}
    />
  );
}

export default App;
