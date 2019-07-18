import React from 'react';
import ReactDOM from 'react-dom';
import { render, shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import PokemonGrid from '../PokemonGrid';
// mock pokemon object
const mockPokemon = [{
  name: 'Bulbasaur',
  url: '/pokemon/bulbasaur',
  id: 1,
  avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
}];

describe('Pokemon Grid Test', () => {
  it('renders empty list', () => {
    const pokemonGrid = shallow(<PokemonGrid />);
    expect(pokemonGrid).toEqual(shallow(<div>Empty list.</div>));
  });

  it('renders one item', () => {
    const pokemonGrid = shallow(<PokemonGrid results={mockPokemon}/>);
    expect(pokemonGrid).toMatchSnapshot();
  });

});
