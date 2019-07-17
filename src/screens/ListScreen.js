import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PokemonList from '../containers/PokemonList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const ListScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Pokedex</h1>
      <Grid>
        <Grid xs={12}>
          <PokemonList />
        </Grid>
      </Grid>
    </div>
  );
}

export default ListScreen;
