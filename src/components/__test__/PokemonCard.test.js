import React from 'react';
import ReactDOM from 'react-dom';

import PokemonCard from '../PokemonCard';
// mock pokemon object
const mockPokemon = {
  name: 'Bulbasaur',
  url: '/pokemon/bulbasaur',
  id: 1,
  avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
};

describe('Pokemon Card Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PokemonCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with provided props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PokemonCard {...mockPokemon} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
