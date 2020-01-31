import React from 'react';
import {
  Page,
  Navigator,
} from 'react-onsenui';
import Styled from 'styled-components';
import PageToolBar from '../../../components/page-tool-bar';
import Spinner from '../../../components/spinner';
import { getPokemonDetail, } from '../../../utils';

const StyleImgContainer = Styled.div`
  text-align: center;
  & > img {
    height: 200px;
    width: 200px;
  }
`;

const StyledTypeBlock = Styled.div`
  &.types {
    display: flex;
    justify-content: center;
    & div {
      background-color: #eee;
      color: white;
      padding: 5px 10px;
      margin: 5px;
    }
    & .grass {
      background-color: #00cc00;
    }
    & .poison {
      background-color: black;
    }
    & .fire {
      background-color: red;
    }
    & .flying {
      background-color: blue;
    }
  }
`;

const StyledDescribe = Styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #222222;
  background-color: white;
  border-radius: 5px;
  font-size: 20px;
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
  const [speciesData, setSepciesData]: any = React.useState({});
  React.useEffect(() => {
    const { species = {}, } = detailData;
    const { url, } = species;
    if (url) {
      getPokemonDetail(url, setSepciesData);
    }
  }, [detailData]);
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
  console.log('speciesData', speciesData);

  const {
    types = [],
  } = detailData;
  const {
    flavor_text_entries = []
  } = speciesData
  const matchedData = flavor_text_entries.filter((flavor: any) => flavor.language.name === 'en');
  return (
    <Page
      onInit={() => getPokemonDetail(data.url, setDetailData)}
      renderToolbar={_renderToolbar}
    >
      <StyleImgContainer>
        <img src={`images/pokemon/sprites/${index + 1}.png`} />
      </StyleImgContainer>
      <StyledTypeBlock className="types">
        {types.map((type: any) => {
          const { type: { name = '', }, } = type;
          return <div className={name}>{name}</div>
        })}
      </StyledTypeBlock>
      {matchedData.length ? <StyledDescribe>{matchedData[0].flavor_text}</StyledDescribe> : <Spinner />}
    </Page >
  );
}

Detail.defaultProps = defaultProps;

export default Detail;
