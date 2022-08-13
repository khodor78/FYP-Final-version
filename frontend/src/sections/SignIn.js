
import React, { useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import "../SignIn.css"


function SignIn() {
    const [switchToggle, setSwitchToggled] = useState(false);

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [signupname, setNamesignup] = useState('');
const [signupemail, setEmailsignup] = useState('');
const [signuppass, setPasssignup] = useState('');
const ToggleSwicth = () => {
    switchToggle ? setSwitchToggled(false) : setSwitchToggled(true);
    console.log(switchToggle);
  };
  return (
   
    <div>
      <div className="body">
        <div
          className={
            switchToggle ? ' container' : ' container right-panel-active'
          }
          id="main"
        >
          <div className="sign-up">
            <form >
              <h1>Create Account</h1>
              <div className="social-container">
                <Link to="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
              <p> or use your email for registiration</p>
              <input
                type="nmae"
                name="signupname"
                onChange={(e) => setNamesignup(e.target.value)}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="signupemail"
                onChange={(e) => setEmailsignup(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type="password"
                onChange={(e) => setPasssignup(e.target.value)}
                name="signuppass"
                placeholder="Password"
                required
              />

              <button>Sign-Up</button>
            </form>
          </div>
          <div className="sign-in">
            <form >
              <h1> Sign in </h1>
              <div className="social-container">
                <Link to="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
              <p> or use your Account</p>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="pswd"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />

              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-left">
                <h1> Welcome back!</h1>
                <p> To keep connected with us please submit</p>
                <button id="SignIn" onClick={ToggleSwicth}>
                  Signs In
                </button>
              </div>
              <div className="overlay-right">
                <h1> Hello, Friend</h1>
                <p> Enter Your personal details</p>

                <button onClick={ToggleSwicth} id="SignUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default SignIn