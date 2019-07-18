import React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import PokemonDetail from '../components/PokemonDetail';

class DetailContainer extends React.Component {
  componentDidMount() {
    const {
      isLoading,
      fetchPokemonDetails,
      slug,
    } = this.props;
    
    if (!isLoading) {
      fetchPokemonDetails({ slug })
    }
  }

  render() {
    const {
      isLoading,
      error,
      selected,
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

    if (selected) {
      return (
        <PokemonDetail {...selected} />
      );
    }

    return (
      <div>Empty</div>
    );
  }
}

const mapState = (state) => ({ ...state.pokemon });

const mapDispatch = ({ pokemon: { fetchPokemonDetails } }) => ({
  fetchPokemonDetails: ({ slug }) => fetchPokemonDetails({slug}),
});

export default connect(mapState, mapDispatch)(DetailContainer);
