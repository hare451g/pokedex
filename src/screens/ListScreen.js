import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PokemonContainer from '../containers/PokemonContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ResponsiveDrawer from '../components/ResponsiveDrawer';

const useStyles = makeStyles(theme => ({
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
      <PokemonContainer
        isSmallScreen={matches}
        filterType={filterType}
        slug={slug}
      />
    </div>
  );
}

export default ListScreen;
