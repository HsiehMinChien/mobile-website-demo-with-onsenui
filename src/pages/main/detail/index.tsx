import React from 'react';
import {
  Page,
  Navigator,
} from 'react-onsenui';
import PageToolBar from '../../../components/page-tool-bar';

interface DetailPropsTypes {
  navigator: Navigator,
  title: string,
  cancelText: string,
  hasBackButton: boolean,
}

const defaultProps = {
  title: 'Detail Title',
  cancelText: 'Back',
}

function Detail({
  navigator,
  title,
  cancelText,
}: DetailPropsTypes) {
  function _renderToolbar() {
    return (
      <PageToolBar
        navigator={navigator}
        title={title}
        cancelText={cancelText}
        hasBackButton
      />
    );
  }

  return (
    <Page
      renderToolbar={_renderToolbar}
    >
      Detail
    </Page>
  );
}

Detail.defaultProps = defaultProps;

export default Detail;
