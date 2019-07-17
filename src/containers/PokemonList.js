import React from 'react';
import { connect } from 'react-redux';

class PokemonList extends React.Component {
  componentDidMount() {
    const {
      isLoading,
      fetchPokemon,
    } = this.props;
    
    if (!isLoading) {
      fetchPokemon();
    }
  }

  render() {
    const {
      isLoading,
      error,
      results,
      next,
      prev,
      count,
    } = this.props;

    if (error) {
      return (
        <div>Something went wrong</div>
      );
    }

    if (isLoading) {
      return (
        <div>Loading contents . . .</div>
      );
    }

    if (results && results.length >= 1) {
      return (
        <div>
          <p>Total registered: {count}</p>
          <ul>
            {results.map(({name, url}) => (
              <li>{name}</li>
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div>Empty list.</div>
    );
  }
}

const mapState = (state) => ({ ...state.pokemon });

const mapDispatch = ({ pokemon: { fetchPokemon } }) => ({
  fetchPokemon: () => fetchPokemon({}),
});

export default connect(mapState, mapDispatch)(PokemonList);
