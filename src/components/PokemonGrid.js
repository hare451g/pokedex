import React from 'react';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Waypoint } from 'react-waypoint';
import PokemonCard from '../components/PokemonCard';

const PokemonGrid = ({ results, isLoading, handleNextPage, next }) => {
  if (results && results.length >= 1) {
    return (
      <Grid spacing={2} container>
        {results.map((pokemon) => (
          <Grid item xs={2} key={pokemon.id}>
            <PokemonCard {...pokemon} />
          </Grid>
        ))}

        <Grid justify="center" container>
          <Grid item>
            { isLoading &&
              <CircularProgress />
            }
            { next && <Waypoint onEnter={handleNextPage}/>}
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <div>Empty list.</div>
  );
}

export default PokemonGrid;
