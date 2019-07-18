import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PokemonContainer from '../containers/PokemonContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ResponsiveDrawer from '../components/ResponsiveDrawer';

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

  const {filterType, slug} = props.match.params;

  return (
    <div className={classes.root}>
      <ResponsiveDrawer>
        <PokemonContainer
          isSmallScreen={matches}
          filterType={filterType}
          slug={slug}
        />
      </ResponsiveDrawer>
    </div>
  );
}

export default ListScreen;
