import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PokemonList from '../containers/PokemonList';
import SearchAppBar from '../components/SearchAppBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const ListScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchAppBar />
      <Grid>
        <Grid xs={12}>
          <PokemonList />
        </Grid>
      </Grid>
    </div>
  );
}

export default ListScreen;
