import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../img/logo.png';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import PermMediaIcon from '@material-ui/icons/PermMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 0,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
      width: 50,
      height: 'auto',
  },
  list: {
    width: 300,
  },
  space: {
    paddingRight: 20,
  }
}));


export default function ButtonAppBar() {
  const classes = useStyles();
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [side]: open });
  };
  
  const [state, setState] = React.useState({
    right: false,
  });

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem>
            <ListItemText color="inherit" primary="Menu" align="center"/>
          </ListItem>
          <hr />
          <ListItem>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem>
            <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
            <ListItemText primary="Product" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PermMediaIcon/></ListItemIcon>
            <ListItemText primary="Article" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PersonIcon/></ListItemIcon>
            <ListItemText primary="About US" />
          </ListItem>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={Logo} className={classes.logo} alt="logo" />
          </Typography>
          <Hidden only={['xs']}>
            <Button color="inherit" className={classes.space}>home</Button>
            <Button color="inherit" className={classes.space}>product</Button>
            <Button color="inherit" className={classes.space}>article</Button>
            <Button color="inherit" className={classes.space}>about us</Button>
          </Hidden>

          <Hidden only={['md', 'lg','sm']}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('right', true)}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
              {sideList('right')}
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}


