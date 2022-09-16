import React, {Component} from 'react';
import {TextField, Button, Container, Divider, AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import axios from 'axios';
import LinkIcon from '@material-ui/icons/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';
import { Link, useNavigate } from 'react-router-dom';
import AboutDetails from '../subComponents/AboutDetails';

function About () {


  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  const Navigate = useNavigate();
  const next = () =>{
Navigate('/About-Details');
  }
  const back = () =>{
    Navigate('/experience-Details')
  }

    return (
      <div>
      <div className="App">
      <AppBar position="static">
        <Toolbar className='color'>
          <IconButton
            edge="start"
            className="menubutton"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" id="title" >
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
     
      <div id='hei'>
      <Paper  >
        <Card>
          <CardHeader id="title" title="Skill Details" />
        </Card>
<AboutDetails   />

       
        <Container >
        <Row >
          <Col lg={3} xs={0} />
          <Col lg={5} xs={5}>
            <Button id="back"
              variant="contained"
              color="secondary"
              onClick={back}
              startIcon={<NavigateBeforeIcon />}
            >
              Back
            </Button>
            </Col>
          <Col lg={3} xs={5}>
            <Button id="next"
                variant="contained"
                color="secondary"
              onClick={next}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
              
          </Col>
          <Col lg={3} xs={5}>
          
        
          </Col>
          <Col lg={3} xs={1} />

        </Row>
      </Container>
       
      </Paper>
      
      </div>
  </div>
    )}
  
  


export default About
