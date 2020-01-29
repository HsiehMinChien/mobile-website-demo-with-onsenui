import React from 'react';
import {
  Toolbar,
  BackButton,
  Navigator,
} from 'react-onsenui';

interface PageToolBarPropsTypes {
  navigator: Navigator,
  title: string,
  cancelText: string,
  hasBackButton: boolean,
}

const defaultProps = {
  navigator: {},
  cancelText: 'Go Back',
  title: '',
  hasBackButton: false,
}

function PageToolBar({
  cancelText,
  navigator,
  title,
}: PageToolBarPropsTypes) {
  return (
    <Toolbar>
      <div className='left'>
        <BackButton onClick={() => navigator.popPage()}>
          {cancelText}
        </BackButton>
      </div>
      <div className="center">
        {title}
      </div>
    </Toolbar>
  );
}

PageToolBar.defaultProps = defaultProps;

export default PageToolBar;