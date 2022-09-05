import React, {Component} from 'react';
import Profile from './Profile';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Extras from './Extras';
import SocialMedia from '../subComponents/SocialMedia';
import Social from './Social';

export class Resume extends Component {
  state = {
    step: 1,
    // Personal Profile Details...
    
   

  
  };

  nextStep = () => {
    const {step} = this.state;
    this.setState ({
      step: step + 1,
    });
  };

  prevStep = () => {
    const {step} = this.state;
    this.setState ({
      step: step - 1,
    });
  };

 

  render () {
    const {step} = this.state;
    
   
    switch (step) {
    
     case 1:
      return (
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center">
            <Profile
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      );
      case 2:
        return (
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto text-center">
              <Social 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
              />
            </div>
          </div>
        );
     //case 2 is removied
   //case 2 is removied
      case 3:
        return (
          <div className="App mt-3">
            <div className="container col-lg-8 mx-auto text-center">
              <Projects 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto text-center">
              <Experience
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto text-center">
              <Extras
                prevStep={this.prevStep}
                handleChange={this.handleChange}
              />
            </div>
          </div>
        );
      default: return <div/>;
      }
  }
}

export default Resume;
