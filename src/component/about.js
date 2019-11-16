import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import imgArticle from '../img/img3.jpg';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Nav from './navbar'
import Iframe from 'react-iframe'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
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
    paddingTop: 20,
    height: 'auto',
  },
  card: {
    [theme.breakpoints.down('xs')]: {
      width: 0,
      padding:0
  },
    paddingLeft: 50,
    paddingRight: 50,   
    width: 'auto',
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <div style={{marginTop: 80}}>
      </div>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={12} sm={6} className={classes.card}>
        <CardActionArea style={{marginTop: 50, marginBottom: 50,}}>
                <CardMedia
                component="img"
                alt="img"
                width="auto"
                height='300'
                image={imgArticle}
                className={classes.imgcard}
                title="img"
                />
            </CardActionArea>
        </Grid>
        <Grid item xs={12} md={12} sm={6} className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
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
            <CardActionArea style={{marginTop: 50, marginBottom:50}}>
                <Iframe url="http://www.youtube.com/embed/0yjKUNolmTY"
                    height="500"
                    width="100%"
                    className={classes.imgcard}/>
            </CardActionArea>
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
        </Grid>
      </Grid>
    </div>
  );
}
