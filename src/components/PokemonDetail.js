import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  chip: {
    margin: 2,
  },
});

export default function PokemonDetail({name, sprites, stats, types, abilities}) {
  const classes = useStyles();

  return (
    <div >
      <Grid xs={12} item>
        <Typography gutterBottom variant="h2">
          {name}
        </Typography>
      </Grid>

      <Grid spacing={2}
        direction="row"
        className={classes.root}
        container
      >
        <Grid xs={12} item>
          <Typography gutterBottom variant="h5" component="h3">
            Images
          </Typography>
          <Divider />
        </Grid>
        <Grid xs={12} item>
          {
            Object.keys(sprites).map((key) => (
              <img src={sprites[key]} />
            ))
          }
        </Grid>

        <Grid xs={12} item>
          <Typography gutterBottom variant="h5" component="h3">
            Types
          </Typography>
          <Divider />
        </Grid>
        
        <Grid xs={12} item>
          {
            types.map(({ type }) => (
              <Chip label={type.name} color="primary" className={classes.chip}/>
            ))
          }
        </Grid>
        
        <Grid xs={12} item>
          <Typography gutterBottom variant="h5" component="h3">
            Abilities
          </Typography>
          <Divider />
        </Grid>
        
        <Grid xs={12} item>
          {
            abilities.map(({ ability }) => (
              <Chip label={ability.name} variant="outlined" className={classes.chip}/>
            ))
          }
        </Grid>

        <Grid xs={12} item>
          <Typography gutterBottom variant="h5" component="h3">
            Stats
          </Typography>
          <Divider />
        </Grid>
        {stats.map(({base_stat, stat}) => (
          <Grid xs={12} item>
            <Typography gutterBottom component="p">
              {stat.name} ({base_stat})
            </Typography>
            <LinearProgress variant="determinate" value={(base_stat - 0) * 100 / (300 - 0)} />
          </Grid>
        ))}
      </Grid>
      
      
      
    </div>
  );
}