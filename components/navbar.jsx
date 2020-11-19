import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles(theme => ({
  root       : {
    flexGrow : 1
  },
  menuButton : {
    marginRight : theme.spacing(2)
  },
  title      : {
    flexGrow : 1,
    color    : 'white'
  }
}));

export default function ButtonAppBar() {
  const router = useRouter();

  const classes = useStyles();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const onLogoutHandler = () => {
    logout();
    router.push('/');
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Test App
          </Typography>
          {isAuthenticated ? (
            <Button onClick={onLogoutHandler} color='inherit'>
              Logout
            </Button>
          ) : (
            <Button onClick={loginWithRedirect} color='inherit'>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
