import React from 'react';
import {
  Page,
  Navigator,
} from 'react-onsenui';
import Styled from 'styled-components';
import PageToolBar from '../../../components/page-tool-bar';
import { getPokemonDetail, } from '../../../utils';

const StyleImgContainer = Styled.div`
  text-align: center;
  & > img {
    height: 200px;
    width: 200px;
  }
`;

const StyledType = Styled.div`
  &.grass {
    background-color: #00cc00;
    color: white;
    padding: 5px 10px;
    margin: 5px;
  }
  &.poison {
    background-color: black;
    color: white;
    padding: 5px 10px;
    margin: 5px;
  }
`;

interface DetailPropsTypes {
  data: { url: string, name: string, },
  index: number,
  navigator: Navigator,
  title: string,
  cancelText: string,
  hasBackButton: boolean,
}

const defaultProps = {
  data: {},
  index: 0,
  title: 'Detail Title',
  cancelText: 'Back',
}

function Detail({
  data,
  index,
  navigator,
  cancelText,
}: DetailPropsTypes) {
  const [detailData, setDetailData]: any = React.useState({});
  function _renderToolbar() {
    return (
      <PageToolBar
        navigator={navigator}
        title={data.name}
        cancelText={cancelText}
        hasBackButton
      />
    );
  }
  console.log('detailData', detailData);
  const {
    types = [],
  } = detailData;
  return (
    <Page
      onInit={() => getPokemonDetail(data.url, setDetailData)}
      renderToolbar={_renderToolbar}
    >
      <StyleImgContainer>
        <img src={`images/pokemon/sprites/${index + 1}.png`} />
      </StyleImgContainer>
      <div style={{ justifyContent: 'center', display: 'flex', }}>
        {types.map((type: any) => <StyledType className={type.type.name}>{type.type.name}</StyledType>)}
      </div>
    </Page >
  );
}

Detail.defaultProps = defaultProps;

export default Detail;
