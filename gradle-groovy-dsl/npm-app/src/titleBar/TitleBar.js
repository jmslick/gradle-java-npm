import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../logo.svg';
import Home from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
    // backgroundColor: 'salmon',
  }
}));

export default function TitleBar() {
  const classes = useStyles();
  const [location, setLocation] = React.useState('titlebar');

  const reload = event => {    
    window.location.href = 'http://localhost:8080/ripout.html';
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <Home onClick={event => reload(event)} />
          </IconButton>
          <img src={logo} className="not_App-logo" alt="logo" width="50px" height="50px"/>
          <Typography variant='h4' className={classes.title}>
            LDS
          </Typography>
          <Typography className={classes.Toolbar}>
            Logged User: jslick9
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
