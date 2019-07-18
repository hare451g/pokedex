import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PokemonList from '../containers/PokemonList';
import NavigationBar from '../components/NavigationBarr';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const ListScreen = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavigationBar />
      <Grid>
        <Grid xs={12}>
          <PokemonList />
        </Grid>
      </Grid>
    </div>
  );
}

export default ListScreen;
