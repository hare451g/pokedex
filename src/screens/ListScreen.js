import React from 'react';
import PokemonList from '../containers/PokemonList';

class ListScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div>
          <PokemonList />
        </div>
      </div>
    );
  }
};

export default ListScreen;
