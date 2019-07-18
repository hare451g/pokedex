import React from 'react';

import Grid from '@material-ui/core/Grid';
import PokemonCard from '../components/PokemonCard';

const PokemonGrid = ({ results }) => {
  if (results && results.length >= 1) {
    return (
      <Grid spacing={2} container>
        {results.map((pokemon) => (
          <Grid item xs={2} key={pokemon.id}>
            <PokemonCard {...pokemon} />
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <div>Empty list.</div>
  );
}

export default PokemonGrid;
