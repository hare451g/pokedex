import React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Avatar } from '@material-ui/core';

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
      return (
        <div>
          <List>
            {results.map(({name, url, id, avatar}) => (
              <ListItem key={id} button>
                <ListItemAvatar>
                  <Avatar alt={name} src={avatar}/>
                </ListItemAvatar>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
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
