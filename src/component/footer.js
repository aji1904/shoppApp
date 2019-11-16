import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom fontSize={30}>
          Footer
        </Typography>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={3}>
        <Typography className={classes.pos} color="textSecondary">
          adjective
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                Lizards are a widespread group of squama
        </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                Lizards are a widespread group of squama
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Grid>
      </Grid> 
      </CardContent>   
      <CardActions>
        <Button size="small">Copyright 2019</Button>
      </CardActions>
    </Card>
  );
}
