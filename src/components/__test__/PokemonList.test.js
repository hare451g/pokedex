import React from 'react';
import { render, shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import PokemonList from '../PokemonList';

// mock pokemon object
const mockPokemon = [{
  name: 'Bulbasaur',
  url: '/pokemon/bulbasaur',
  id: 1,
  avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
}];

describe('Pokemon Grid Test', () => {
  it('renders empty list', () => {
    const pokemonList = shallow(<PokemonList />);
    expect(pokemonList).toEqual(shallow(<div>Empty list.</div>));
  });

  it('renders one item', () => {
    const pokemonList = shallow(<PokemonList results={mockPokemon}/>);
    expect(pokemonList).toMatchSnapshot();
  });

});
