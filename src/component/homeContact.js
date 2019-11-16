import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
import Iframe from 'react-iframe'
import {Link} from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: 10,
  },
  imgcard: {
    [theme.breakpoints.down('xs')]: {
        height: 200,
        width: '100%',
    },
    borderRadius: 10,
  },
  content:{
    [theme.breakpoints.down('xs')]: {
        height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        height: 'auto',
    },
    height: 330,
  },
  card: {
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
  },
  paddingRight: 20
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper style={{margin: 10,}}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.card}>
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{paddingBottom: 20}}>
                  Laptop
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
              </Typography>
              </CardContent>
              <CardActions >
                  <Link to="/contact" style={{textDecoration: 'none', marginBottom: 20}}>
                  <Button variant="contained" color="primary">See Contact</Button>
                  </Link>
              </CardActions>
        </Grid>
        <Grid item xs={12} sm={6}>
            <CardActionArea>
              <Iframe url="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d3984.627989759914!2d104.72857401503619!3d-2.922844240425757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e0!4m0!4m4!2s-2.923767725224557%2C%20104.73135812066538!3m2!1d-2.9237677!2d104.7313581!5e0!3m2!1sen!2sid!4v1573862866492!5m2!1sen!2sid"
                width="100%"
                height="500"
                display="initial"
                position="relative"
                className={classes.imgcard}
              />
            </CardActionArea>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}
