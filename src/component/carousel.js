import Slider from "react-slick";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Img from '../img/img.jpg'
import Img2 from '../img/img2.jpg'

const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.down('xs')]: {
        height: 200,
        width: 'auto',
    },
    height: 400,
    width: 'auto',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 70,
    marginBottom: 20,
    borderRadius: 10,
  },
  imageSlider: {
      marginBottom: 10,
  }
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  }

  return (
    <Card className={classes.card}>
        <Slider className={classes.slider} {...settings}>
        <div>
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
        </div>
        <div>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="img"
                height="auto"
                image={Img2}
                title="img"
                className={classes.imageSlider}
                />
            </CardActionArea>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        </Slider>
    </Card>
  );
}