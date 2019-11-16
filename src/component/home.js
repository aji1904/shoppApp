import React, { Component } from 'react';
import Nav from './navbar';
import Slide from './carousel'
import SliderHighlight from './homeHighlight';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Article from './homeArticle';
import Contact from './homeContact';
import Footer from './footer';
import { Link } from "react-router-dom";

class Home extends Component {
    render() { 
        return (  
            <div>
                <Nav />
                <Slide />
                <Typography component="div">
                  <Box textAlign="center" m={1} fontSize={20}>
                      Product Highlight
                  </Box>
                </Typography>
                <hr style={{marginLeft: 10, marginRight: 10}}/>
                <SliderHighlight />
                <Typography component="div">
                  <Box textAlign="center" m={1} fontSize={20}>
                    <Link to="/produk" style={{textDecoration: 'none'}}>
                    <Button variant="contained" color="primary">
                      See More Product
                    </Button>
                    </Link>
                  </Box>
                </Typography>
                <Typography component="div" style={{marginTop: 100}}>
                  <Box textAlign="center" m={1} fontSize={20}>
                      Recent Article
                  </Box>
                </Typography>
                <hr style={{marginLeft: 10, marginRight: 10}}/>
                <Article />
                <Typography component="div" style={{marginTop: 100}}>
                  <Box textAlign="center" m={1} fontSize={20}>
                      Contact US
                  </Box>
                </Typography>
                <hr style={{marginLeft: 10, marginRight: 10}}/>
                <Contact />
                <Typography component="div" style={{marginTop: 100}}>
                  <hr style={{marginLeft: 10, marginRight: 10}}/>
                </Typography>
                <Footer />
            </div>
        );
    }
}
 
export default Home;