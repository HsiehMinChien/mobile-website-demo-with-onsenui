import React from 'react';
import {
  Page,
  Navigator,
} from 'react-onsenui';
import Styled, { keyframes, } from 'styled-components';
import PageToolBar from '../../../components/page-tool-bar';
import Spinner from '../../../components/spinner';
import { getPokemonDetail, convertFirstAlphabetToUpperCase, } from '../../../utils';

const jump = keyframes`
  0%   {transform: translate3d(0, 0, 0);}
  25%  {transform: translate3d(0, -6px, 0);}
  50%  {transform: translate3d(0, 0, 0);}
  75%  {transform: translate3d(0, -6px, 0);}
  100% {transform: translate3d(0, 0, 0);}
`;

const StyleImgContainer = Styled.div`
  text-align: center;
  & > img {
    height: 200px;
    width: 200px;
    -webkit-animation: 0.5s ease-in 0.4s ${jump};
    animation: 0.5s ease-in 0.4s ${jump};
  }
`;

const StyledTypeBlock = Styled.div`
  &.types {
    display: flex;
    justify-content: center;
    & div {
      background-color: #eee;
      font-weight: 900;
      color: white;
      padding: 8px 10px;
      margin: 10px;
      cursor: pointer;
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
    & .water {
      background-color: #157EFC;
    }
    & .bug {
      background-color: #A8DB0A;
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

const StyledWieghtAndHeightBlock = Styled.div`
  & {
    display: flex;
    justify-content: center;
    & > div {
      margin: 20px;
      text-align: center;
      & .item-name {
        font-weight: 600;
        margin-bottom: 5px;
      }
    }
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
        title={convertFirstAlphabetToUpperCase(data.name)}
        cancelText={cancelText}
        hasBackButton
      />
    );
  }
  console.log('speciesData', speciesData);

  const {
    types = [],
    height = 0,
    weight = 0,
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
          return <div className={name}>{convertFirstAlphabetToUpperCase(name)}</div>
        })}
      </StyledTypeBlock>
      <StyledWieghtAndHeightBlock>
        <div>
          <div className="item-name">Weight</div>
          <div>{weight / 10}kg</div>
        </div>
        <div>
          <div className="item-name">Height</div>
          <div>{height / 10}m</div>
        </div>
      </StyledWieghtAndHeightBlock>
      {matchedData.length ? <StyledDescribe>{matchedData[0].flavor_text}</StyledDescribe> : <Spinner />}
    </Page >
  );
}

Detail.defaultProps = defaultProps;

export default Detail;
