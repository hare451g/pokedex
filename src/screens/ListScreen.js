import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PokemonContainer from '../containers/PokemonContainer';
import NavigationBar from '../components/NavigationBar';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  pokemonGrid: {
    paddingTop: 12,
  }
}));

const ListScreen = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <div className={classes.root}>
      <NavigationBar />
      <Grid className={classes.pokemonGrid} container>
        <Grid xs={12} item>
          <PokemonContainer isSmallScreen={matches} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ListScreen;
