import Slider from "react-slick";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Img from '../img/img.jpg'
import Img2 from '../img/img2.jpg'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.down('xs')]: {
        height: 'auto',
        width: 'auto',
    },
    height: 500,
    width: 'auto',
    margin: 10,
    borderRadius: 10,
  },
  imageSlider: {
    [theme.breakpoints.down('xs')]: {
        height: 120,
        width: '100%',
    },
    height: 250,
    width: 'auto',
  },
  slider: {
    overflowX: 'auto',
  }
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  const settings = {
    dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
  }

  return (
        <Slider className={classes.slider} {...settings}>
        <div>
          <Link to="/produk-detail" style={{textDecoration: 'none'}}>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="img"
                height=""
                image={Img}
                className={classes.imageSlider}
                title="img"
                />
            </CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Laptop
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
            </Card>
            </Link>
        </div> 
        <div>
        <Link to="/produk-detail" style={{textDecoration: 'none'}}>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="img"
                height="auto"
                image={Img2}
                className={classes.imageSlider}
                title="img"
                />
            </CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Laptop
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
            </Card>
            </Link>
        </div> 
        <div>
        <Link to="/produk-detail" style={{textDecoration: 'none'}}>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="img"
                height="auto"
                image={Img}
                className={classes.imageSlider}
                title="img"
                />
            </CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Laptop
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
            </Card>
            </Link>
        </div> 
        <div>
        <Link to="/produk-detail" style={{textDecoration: 'none'}}>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="img"
                height="auto"
                image={Img2}
                className={classes.imageSlider}
                title="img"
                />
            </CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Laptop
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
            </Card>
            </Link>
        </div> 
        </Slider>

  );
}