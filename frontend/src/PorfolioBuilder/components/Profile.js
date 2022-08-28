import React, { Component, useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row, Col } from 'react-bootstrap';
import { Paper, withStyles, Grid } from '@material-ui/core';
import SocialMedia from '../subComponents/SocialMedia';
import PersonalDetails from '../subComponents/PersonalDetailsScreen';
import { Navigate } from 'react-router-dom';

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit *0.1,
  },
  padding: {
    padding: theme.spacing.unit*0.1,
  },
});

class Profile extends Component {
  
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
    this.navigate('/x')
  };

  render() {
    const { values } = this.props;
    const { classes } = this.props;
    
    return (
      <div className='hei'>
      <Paper className={classes.padding}>
        <Card>
          <CardHeader title="Personal Details" />
        </Card>
        <PersonalDetails props={classes.margin} />

     
              <Container className={classes.margin}>
        <Row>
          <Col lg={3} xs={0} />
          <Col lg={3} xs={5}>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.nextStep}
              disabled
              startIcon={<NavigateBeforeIcon />}
            >
              Back
            </Button>
            </Col>
          <Col lg={3} xs={5}>
            <Button
                variant="contained"
                color="secondary"
                onClick={this.continue}
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
        <p className="text-center text-muted">Page 1 </p>
      </Paper>
      
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
