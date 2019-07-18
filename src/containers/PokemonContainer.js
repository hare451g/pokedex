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

  handleNextPage = () => {
    const {
      next,
      fetchPokemonNext,
      filterType='pokemon-species',
      slug='',
      isLoading
    } = this.props;
    if (!isLoading && next) {
      fetchPokemonNext({ next, filterType, slug })
    }
  }

  render() {
    const {
      isLoading,
      error,
      results,
      next,
    } = this.props;

    if (error) {
      return (
        <Paper>Something went wrong</Paper>
      );
    }
    
    if (results && results.length >= 1) {
      if (this.props.isSmallScreen) {
        return (
          <PokemonList
            results={results}
            handleNextPage={this.handleNextPage}
            isLoading={isLoading}
            next
          />
        );
      }
      return (
        <PokemonGrid
          results={results}
          handleNextPage={this.handleNextPage}
          isLoading={isLoading}
          next
        />
      );
    }

    return (
      <div>Empty list.</div>
    );
  }
}

const mapState = (state) => ({ ...state.pokemon });

const mapDispatch = ({ pokemon: { fetchPokemon } }) => ({
  fetchPokemon: ({filterType, slug}) => fetchPokemon({filterType, slug}),
  fetchPokemonNext: ({next}) => fetchPokemon({next}),
});

export default connect(mapState, mapDispatch)(PokemonContainer);
