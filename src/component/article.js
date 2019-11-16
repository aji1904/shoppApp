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
import Nav from './navbar'
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';

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
    height: 120,
  },
  card: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
  },
  paddingLeft: 20
  },
  paddingArea: {
      padding: 5,
      marginTop: 80,
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <Grid container className={classes.container}>
          <GridList cols={12} cellHeight={'auto'}>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className={classes.paddingArea}>
                    <Paper>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="img"
                            width="auto"
                            height='250'
                            image={imgArticle}
                            className={classes.imgcard}
                            title="img"
                            />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Laptop
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions >
                    <Link to="/artikel-detail" style={{textDecoration: 'none', color: 'white', width: '100%'}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}}>Read More</Button>
                    </Link>
                    </CardActions>
                    </Paper>
                </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className={classes.paddingArea}>
                    <Paper>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="img"
                            width="auto"
                            height='250'
                            image={imgArticle}
                            className={classes.imgcard}
                            title="img"
                            />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Laptop
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions >
                    <Link to="/artikel-detail" style={{textDecoration: 'none', color: 'white', width: '100%'}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}}>Read More</Button>
                    </Link>
                    </CardActions>
                    </Paper>
                </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className={classes.paddingArea}>
                    <Paper>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="img"
                            width="auto"
                            height='250'
                            image={imgArticle}
                            className={classes.imgcard}
                            title="img"
                            />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Laptop
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions >
                    <Link to="/artikel-detail" style={{textDecoration: 'none', color: 'white',  width: '100%'}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}}>Read More</Button>
                    </Link>
                    </CardActions>
                    </Paper>
                </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className={classes.paddingArea}>
                    <Paper>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="img"
                            width="auto"
                            height='250'
                            image={imgArticle}
                            className={classes.imgcard}
                            title="img"
                            />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Laptop
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions >
                    <Link to="/artikel-detail" style={{textDecoration: 'none', color: 'white',  width: '100%'}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}}>Read More</Button>
                    </Link>
                    </CardActions>
                    </Paper>
                </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className={classes.paddingArea}>
                    <Paper>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="img"
                            width="auto"
                            height='250'
                            image={imgArticle}
                            className={classes.imgcard}
                            title="img"
                            />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Laptop
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions >
                    <Link to="/artikel-detail" style={{textDecoration: 'none', color: 'white',  width: '100%'}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}}>Read More</Button>
                    </Link>
                    </CardActions>
                    </Paper>
                </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className={classes.paddingArea}>
                    <Paper>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="img"
                            width="auto"
                            height='250'
                            image={imgArticle}
                            className={classes.imgcard}
                            title="img"
                            />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Laptop
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions >
                    <Link to="/artikel-detail" style={{textDecoration: 'none', color: 'white',  width: '100%'}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}}>Read More</Button>
                    </Link>
                    </CardActions>
                    </Paper>
                </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className={classes.paddingArea}>
                    <Paper>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="img"
                            width="auto"
                            height='250'
                            image={imgArticle}
                            className={classes.imgcard}
                            title="img"
                            />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Laptop
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions >
                    <Link to="/artikel-detail" style={{textDecoration: 'none', color: 'white',  width: '100%'}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}}>Read More</Button>
                    </Link>
                    </CardActions>
                    </Paper>
                </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className={classes.paddingArea}>
                    <Paper>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="img"
                            width="auto"
                            height='250'
                            image={imgArticle}
                            className={classes.imgcard}
                            title="img"
                            />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Laptop
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions >
                    <Link to="/artikel-detail" style={{textDecoration: 'none', color: 'white',  width: '100%'}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}}>Read More</Button>
                    </Link>
                    </CardActions>
                    </Paper>
                </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className={classes.paddingArea}>
                    <Paper>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="img"
                            width="auto"
                            height='250'
                            image={imgArticle}
                            className={classes.imgcard}
                            title="img"
                            />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Laptop
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions >
                    <Link to="/artikel-detail" style={{textDecoration: 'none', color: 'white',  width: '100%'}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}}>Read More</Button>
                    </Link>
                    </CardActions>
                    </Paper>
                </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <div className={classes.paddingArea}>
                    <Paper>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="img"
                            width="auto"
                            height='250'
                            image={imgArticle}
                            className={classes.imgcard}
                            title="img"
                            />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Laptop
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions >
                    <Link to="/artikel-detail" style={{textDecoration: 'none', color: 'white', width: '100%'}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}}>Read More</Button>
                    </Link>
                    </CardActions>
                    </Paper>
                </div>
            </Grid>
            
            
            
            
            
        </GridList>
      </Grid>
    </div>
  );
}
