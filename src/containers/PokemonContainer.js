import React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import PokemonGrid from '../components/PokemonGrid';
import PokemonList from '../components/PokemonList';

class PokemonContainer extends React.Component {
  componentDidMount() {
    const {
      isLoading,
      fetchPokemon,
      filterType='pokemon-species',
      slug='',
    } = this.props;
    
    if (!isLoading) {
      fetchPokemon({ filterType, slug });
    }
  }

  render() {
    const {
      isLoading,
      error,
      results,
    } = this.props;

    if (error) {
      return (
        <Paper>Something went wrong</Paper>
      );
    }

    if (isLoading) {
      return (
        <Paper>Loading contents . . .</Paper>
      );
    }
    
    if (results && results.length >= 1) {
      if (this.props.isSmallScreen) {
        return (<PokemonList results={results} />);
      }
      return (<PokemonGrid results={results} />);
    }

    return (
      <div>Empty list.</div>
    );
  }
}

const mapState = (state) => ({ ...state.pokemon });

const mapDispatch = ({ pokemon: { fetchPokemon } }) => ({
  fetchPokemon: ({filterType, slug}) => fetchPokemon({filterType, slug}),
});

export default connect(mapState, mapDispatch)(PokemonContainer);
