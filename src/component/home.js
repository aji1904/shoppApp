import React, { Component } from 'react';
import Nav from './navbar';
import Slide from './carousel'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from "react-slick";

class Home extends Component {
    render() { 
        var settings = {
            dots: true,
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
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        }
        return (  
            <div>
                <Nav />
                <Slide />
                <Typography Component="div">
                    <Box textAlign="center">
                        Product Highlights
                    </Box>
                </Typography>
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
                </Slider>
            </div>
        );
    }
}
 
export default Home;