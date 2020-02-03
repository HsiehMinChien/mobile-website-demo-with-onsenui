import React from 'react';
import { Page, Tabbar, Tab, Toolbar, } from 'react-onsenui';
import Pokemon from '../pokemon';
import Others from '../others';
import { PageTypes, } from '../config';

function Main({
  navigator,
}: { navigator: any }) {
  const [pokemonData, setPokemonData] = React.useState([])
  function _renderHeader() {
    return <Toolbar>
      <div className="center">Demo Project</div>
    </Toolbar>
  }
  function _renderTabs() {
    const caughtPokemon = pokemonData.filter(pokemon => pokemon.caught);
    return [
      {
        content: <Pokemon key={PageTypes.POKEMON} navigator={navigator} pokemonData={pokemonData} setPokemonData={setPokemonData} />,
        tab: <Tab key={PageTypes.POKEMON} label={`Caught ${caughtPokemon.length} ${PageTypes.POKEMON}`} />
      },
      {
        content: <Others key={PageTypes.OTHERS} />,
        tab: <Tab key={PageTypes.OTHERS} label={PageTypes.OTHERS} />
      },
    ];
  }
  return (
    <Page renderToolbar={_renderHeader}>
      <Tabbar
        position='auto'
        index={0}
        renderTabs={_renderTabs}
      />
    </Page>
  );
}

export default Main;