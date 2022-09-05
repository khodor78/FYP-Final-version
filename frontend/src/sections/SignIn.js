import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../SignIn.css';
import { register, signin } from '../actions/userActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { Button, Nav } from 'react-bootstrap';
import Signup from './Signup';
import {GoogleLogin} from 'react-google-login';
function SignIn() {
  const navigate = useNavigate();
  const [switchToggle, setSwitchToggled] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const location = useLocation();
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: sign in action
    dispatch(signin(email, password));
  };
  const googleSuccess = (resp) => {
    const email = resp?.profileObj?.email;
    const name = resp?.profileObj?.name;
    const token = resp?.tokenId;
    const googleId = resp?.googleId;
    const result = { email, name, token, googleId };
   
  };
  const googleFailure = (error) => {
    toast.error(error);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupname, setNamesignup] = useState('');
  const [signupemail, setEmailsignup] = useState('');
  const [signuppass, setPasssignup] = useState('');
  const [signupconfrim, setConfirmpasssignup] = useState('');
  const ToggleSwicth = () => {
    switchToggle ? setSwitchToggled(false) : setSwitchToggled(true);
    console.log(switchToggle);
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/Profile-Details');
      window.location.reload();
    }
  }, [userInfo, navigate, location]);

  const signupsubmitHandler = (e) => {
    e.preventDefault();
    if (signuppass !== signupconfrim) {
      alert('Password and confirm password are not match');
    } else dispatch(register(signupname, signupemail, signuppass));
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
          <Signup />
          <div className="sign-in">
            <form onSubmit={submitHandler}>
              <h1> Sign in </h1>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
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
              <br/>
              <br/>
            
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
  );
}

export default SignIn;
