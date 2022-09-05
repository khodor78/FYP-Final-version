import React, {Component} from 'react';
import {TextField, Button, Container, Divider, AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import axios from 'axios';
import DateRangeIcon from '@material-ui/icons/DateRange';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import LinkIcon from '@material-ui/icons/Link';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import Project from '../subComponents/Project';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';
import MenuIcon from '@material-ui/icons/Menu';




function Projects() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  const Navigate = useNavigate();
  const next = () =>{
Navigate('/Experience-Details');
  }
  const back = () =>{
    Navigate('/Profile-Details')
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

    <div className='hei'>
      <Paper >
        <Card>
          <CardHeader id="title" title="Project Developed" />
        </Card>
        <Project  />
       
        <Container >
          
        <Row >
 
          <Col lg={3} xs={0} />
          <Col lg={5} xs={5}>
          
            <Button id="back"
              variant="contained"
              onClick={back}
            
              
              startIcon={<NavigateBeforeIcon />}
            >
              Back
            </Button>
            </Col>
            <h4 id="pages" className="text-center">Page 2 </h4>
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


export default Projects
