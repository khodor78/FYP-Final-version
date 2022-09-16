import React, { Component } from 'react';
import {  Button, Container, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Card, CardHeader } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Row, Col } from 'react-bootstrap';
import { Paper} from '@material-ui/core';
import PersonalDetails from '../subComponents/PersonalDetailsScreen';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';
import 'bootstrap/dist/css/bootstrap.min.css';


function Profile(){
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  const Navigate = useNavigate();
  const next = () =>{
Navigate('/Project-Details');
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
      <Paper>
        <Card>
          <CardHeader id="title" title="Personal Details" />
        </Card>
        <PersonalDetails />

     
              <Container>
        <Row>
          <Col lg={3} xs={0} />
          <Col lg={5} xs={5}>
            <Button id="back"
              variant="contained"
              color="secondary"
            
              disabled
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
    );
  }


export default Profile
