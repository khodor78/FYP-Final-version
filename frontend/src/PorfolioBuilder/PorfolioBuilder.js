import React from 'react';
import './App.css';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import { Link, Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Profile from './components/Profile';
import Project from './subComponents/Project';
import Projects from './components/Projects';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
   
  };
  const { language } = useLocation();
  const name = new URLSearchParams(language).get("name");
  console.log(name);
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className='color'>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Portfolio Builder
          </Typography>
          <Button color="inherit">{userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  <div class="xx">
                 {userInfo.user.name}<i className="fa fa-caret-down"></i>{' '}
                 </div>
                </Link>
                
                <ul className="dropdown-content">
                  <li>
                    <Link className='signout' to="/" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}</Button>
        </Toolbar>
      </AppBar>
     
    </div>
  );
}

export default App;
