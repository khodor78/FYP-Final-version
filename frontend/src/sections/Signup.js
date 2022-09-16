import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import axios from 'axios';

function Signup() {
 
  useEffect(() => {
    function start() {
    gapi.client.init({
    clientId:"733192424933-fghi5qrv0cbn8gigjmc1cv2ngcp4ovra.apps.googleusercontent.com",
    scope: 'email',
      });
       }
      gapi.load('client:auth2', start);
       }, []);
    
       const onSuccess = response => {
        console.log('SUCCESS', response);
        const result = response?.profileObj;
        

          dispatch(register(result.givenName, result.email, result.googleId));
        }

      
      

        
        
        const onFailure = response => {
          console.log('FAILED', response);
          };
         const onLogoutSuccess = () => {
          console.log('SUCESS LOG OUT');
           };

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [signupname, setNamesignup] = useState('');
  const [signupemail, setEmailsignup] = useState('');
  const [signuppass, setPasssignup] = useState('');
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  const [signupconfrim, setConfirmpasssignup] = useState('');
  const signupsubmitHandler = (e) => {
    e.preventDefault();
    if (signuppass !== signupconfrim) {
      alert('Password and confirm password are not match');
    } else dispatch(register(signupname, signupemail, signuppass));
  };

  return (
    <div className="sign-up">
      <form onSubmit={signupsubmitHandler}>
        <h1>Create Account</h1>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <GoogleLogin
   clientId={"733192424933-fghi5qrv0cbn8gigjmc1cv2ngcp4ovra.apps.googleusercontent.com"}
  onSuccess={onSuccess}
  onFailure={onFailure}
    />
        <p> or use your email for registiration</p>
        <input
          type="nmae"
          name="signupname"
          onChange={(e) => setNamesignup(e.target.value)}
          placeholder="Name"
          required
        />
        <br />
        <input
          type="email"
          name="signupemail"
          onChange={(e) => setEmailsignup(e.target.value)}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPasssignup(e.target.value)}
          name="signuppass"
          placeholder="Password"
          required
        />
        <br />
        <input
          type="password"
          onChange={(e) => setConfirmpasssignup(e.target.value)}
          name="confrimpass"
          placeholder=" Confirm Password"
          required
        />
        <br />
        <button>Sign-Up</button>
      </form>
    </div>
  );
}

export default Signup;
