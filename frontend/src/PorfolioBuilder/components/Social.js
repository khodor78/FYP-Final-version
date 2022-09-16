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

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 1,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Social extends Component {
     continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };

  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };

  render() {
    const { values } = this.props;
    const { classes } = this.props;
    
    return (
      <Paper className={classes.padding}>
        
        <SocialMedia classes={ classes.margin}/>

     
              <Container className={classes.margin}>
        <Row>
          <Col lg={3} xs={0} />
          <Col lg={3} xs={5}>
          <Button
                variant="contained"
                color="secondary"
                onClick={this.back}
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
          <Col lg={3} xs={1} />
        </Row>
      </Container>
      </Paper>
    );
  }
}

export default withStyles(styles)(Social);
