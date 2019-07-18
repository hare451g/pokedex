import React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';

class DetailContainer extends React.Component {
  componentDidMount() {
    const {
      isLoading,
    } = this.props;
    
    if (!isLoading) {
      // do fetch pokemon
    }
  }

  render() {
    const {
      isLoading,
      error,
      details,
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

    return (
      <div>Empty .</div>
    );
  }
}

const mapState = (state) => ({ ...state.pokemon });

const mapDispatch = ({ pokemon: { fetchPokemon } }) => ({
  fetchPokemon: ({filterType, slug}) => fetchPokemon({filterType, slug}),
});

export default connect(mapState, mapDispatch)(DetailContainer);
