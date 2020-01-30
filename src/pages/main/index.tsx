import React from 'react';
import {
  Page,
  List,
  ListItem,
  Button,
} from 'react-onsenui';
import Styled from 'styled-components';
import PokemonList from '../../datas/pokemon';
import { getPokemonNames, } from '../../utils';
import Detail from './detail';

const StyledHeader = Styled.div`
  padding: 10px;
  text-align: center;
`;

const SytledFooter = StyledHeader;

function Main({
  navigator,
}: { navigator: any, }) {
  const [data, setData] = React.useState([]);
  console.log('data', data);

  function _renderHeader() {
    return <StyledHeader> Pokemon List </StyledHeader>
  }

  function _renderFooter() {
    return <SytledFooter>My demo project</SytledFooter>
  }

  function _handleClickListItem(data: { name: string, url: string, }, index: number) {
    const pushParams = {
      Component: Detail,
      key: 'detail',
      passProps: {
        data,
        index,
        hasBackButton: true,
      },
    };
    navigator.pushPage(pushParams);
  }

  function _renderListItem(data: { name: string, url: string, }, idx: number) {
    return (
      <ListItem
        key={idx}
        modifier="chevron"
        lockOnDrag
        tappable
        tapBackgroundColor="#eee"
        onClick={() => _handleClickListItem(data, idx)}
      >
        <div className='left'>
          <img
            src={`images/pokemon/icons/${idx + 1}.png`}
            className='list-item__thumbnail'
          />
        </div>
        <div className="center">{data.name}</div>
      </ListItem>
    );
  }

  return (
    <Page
      onInit={() => getPokemonNames(setData)}
    >
      <List
        dataSource={data}
        renderHeader={_renderHeader}
        renderRow={_renderListItem}
        renderFooter={_renderFooter}
      />
    </Page>
  );
}

export default Main;
