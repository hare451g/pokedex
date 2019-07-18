import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const PokemonList = ({ results }) => {
  if (results && results.length >= 1) {
    return (
      <List>
        {results.map(({name, id, avatar}) => (
          <ListItem key={id} component="a" href={`/${name}`} button>
            <ListItemAvatar>
              <Avatar alt={name} src={avatar}/>
            </ListItemAvatar>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    )
  }
  return (
    <div>Empty list.</div>
  );
}

export default PokemonList;
