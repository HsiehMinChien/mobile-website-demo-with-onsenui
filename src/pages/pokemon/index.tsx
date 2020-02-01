import React from 'react';
import {
  Page,
  List,
  ListItem,
  Button,
} from 'react-onsenui';
import Styled from 'styled-components';
import {
  getPokemonNames,
  convertFirstAlphabetToUpperCase,
} from '../../utils';
import Detail from './detail';

const SytledFooter = Styled.div`
  padding: 10px;
  text-align: center;
`;

const QUERY_LIMIT = 20;

function Pokemon({
  navigator,
}: { navigator: any, }) {
  const [data, setData] = React.useState([]);
  const [triggerCount, setTriggerCoune] = React.useState(0);

  function _handleGetPokemonsData(values: Array<any>) {
    const nextData = [
      ...data,
      ...values,
    ];
    setData(nextData);
  }

  function _handleQuery() {
    getPokemonNames(_handleGetPokemonsData, triggerCount * QUERY_LIMIT);
    setTriggerCoune(triggerCount + 1);
  }

  function _renderFooter() {
    return <SytledFooter>
      <Button modifier='quiet' onClick={_handleQuery}>Load more</Button>
    </SytledFooter>
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
        <div className="center">{convertFirstAlphabetToUpperCase(data.name)}</div>
      </ListItem>
    );
  }

  return (
    <Page onInit={_handleQuery}>
      <List
        dataSource={data}
        renderRow={_renderListItem}
        renderFooter={_renderFooter}
      />
    </Page>
  );
}

export default Pokemon;
