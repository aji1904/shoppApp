import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import imgArticle from '../img/img3.jpg';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Nav from './navbar';
import {Link} from 'react-router-dom';

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
    height: 150,
  },
  card: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
  },
  paddingLeft: 20
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <div style={{marginTop: 100}}></div>
      <Paper style={{marginLeft: 15, marginRight:15, marginBottom: 30, marginTop: 30}}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
          <CardActionArea>
              <CardMedia
                component="img"
                alt="img"
                width="100%"
                height='300'
                image={imgArticle}
                className={classes.imgcard}
                title="img"
                />
              </CardActionArea>
          </Grid>
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
              <Link to="/produk-detail" style={{textDecoration: 'none', color: 'white'}}>
                  <Button variant="contained" color="primary">Read More</Button>
              </Link>
              </CardActions>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{marginLeft: 15, marginRight:15, marginBottom: 70, marginTop: 70}}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
          <CardActionArea>
              <CardMedia
                component="img"
                alt="img"
                width="100%"
                height='300'
                image={imgArticle}
                className={classes.imgcard}
                title="img"
                />
              </CardActionArea>
          </Grid>
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
              <Link to="/produk-detail" style={{textDecoration: 'none', color: 'white'}}>
                  <Button variant="contained" color="primary">Read More</Button>
              </Link>
              </CardActions>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{marginLeft: 15, marginRight:15, marginBottom: 30, marginTop: 30}}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
          <CardActionArea>
              <CardMedia
                component="img"
                alt="img"
                width="100%"
                height='300'
                image={imgArticle}
                className={classes.imgcard}
                title="img"
                />
              </CardActionArea>
          </Grid>
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
              <Link to="/produk-detail" style={{textDecoration: 'none', color: 'white'}}>
                  <Button variant="contained" color="primary">Read More</Button>
              </Link>
              </CardActions>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{marginLeft: 15, marginRight:15, marginBottom: 70, marginTop: 70}}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
          <CardActionArea>
              <CardMedia
                component="img"
                alt="img"
                width="100%"
                height='300'
                image={imgArticle}
                className={classes.imgcard}
                title="img"
                />
              </CardActionArea>
          </Grid>
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
              <Link to="/produk-detail" style={{textDecoration: 'none', color: 'white'}}>
                  <Button variant="contained" color="primary">Read More</Button>
              </Link>
              </CardActions>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{marginLeft: 15, marginRight:15, marginBottom: 30, marginTop: 30}}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
          <CardActionArea>
              <CardMedia
                component="img"
                alt="img"
                width="100%"
                height='300'
                image={imgArticle}
                className={classes.imgcard}
                title="img"
                />
              </CardActionArea>
          </Grid>
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
              <Link to="/produk-detail" style={{textDecoration: 'none', color: 'white'}}>
                  <Button variant="contained" color="primary">Read More</Button>
              </Link>
              </CardActions>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{marginLeft: 15, marginRight:15, marginBottom: 70, marginTop: 70}}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
          <CardActionArea>
              <CardMedia
                component="img"
                alt="img"
                width="100%"
                height='300'
                image={imgArticle}
                className={classes.imgcard}
                title="img"
                />
              </CardActionArea>
          </Grid>
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
              <Link to="/produk-detail" style={{textDecoration: 'none', color: 'white'}}>
                  <Button variant="contained" color="primary">Read More</Button>
              </Link>
              </CardActions>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
