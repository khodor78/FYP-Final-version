import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

function Signup() {
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
    } else 
    
      dispatch(register(signupname, signupemail, signuppass));

    
   
  };
  return (
    <div className="sign-up">
    <form onSubmit={signupsubmitHandler}>
      <h1>Create Account</h1>
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
<input
        type="password"
        onChange={(e) => setConfirmpasssignup(e.target.value)}
        name="confrimpass"
        placeholder=" Confirm Password"
        required
      />
      <button>Sign-Up</button>
    </form>
  </div>
  )
}

export default Signup