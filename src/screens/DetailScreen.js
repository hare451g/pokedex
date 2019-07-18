import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DetailContainer from '../containers/DetailContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  pokemonGrid: {
    paddingTop: 12,
  }
}));

const DetailScreen = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');

  const {filterType, slug} = props.match.params;

  return (
    <div className={classes.root}>
      <DetailContainer
        isSmallScreen={matches}
        filterType={filterType}
        slug={slug}
      />
    </div>
  );
}

export default DetailScreen;
