import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../server/store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Form.module.css';
import logo from '../../assets/starbucks_logo.png';
import classNames from 'classnames';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(console.log).catch(console.error);
  };

  return (
    <div className={classes.Form}>
      <div className={classes.cover}>
        <img src={logo} alt="logo" className={classes.logo} />
        <div className={classes.possibility}>
          <h2 className={classes.text}>After logining in your account:</h2>
          <div className={classes.possibilities}>
            <i className="fas fa-wallet"></i>
            You can see history of your orders.
          </div>
          <div className={classes.possibilities}>
            <i className="fas fa-history"></i>
            You can repeat your order.
          </div>
          <div className={classes.possibilities}>
            <i className="fas  fa-comment-dollar"></i>
            You can activate and gaing you cashback.
          </div>
        </div>
      </div>
      <form action="#" className={classes.Auth}>
        <div className={classes.content}>
          <div className={classes.loginForm}>
            <div className={classes.title}>Register</div>
            <div className={classes.inputBoxes}>
              <div className={classes.inputBox}>
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={classes.inputBox}>
                <i className="fas fa-solid fa-key"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className={classes.text}>
                <a href="vk.com">Forgot password?</a>
              </div>
              <button
                className={classNames(classes.inputBox, classes.button)}
                onClick={() => console.log(handleRegister)}>
                Register
              </button>
              <div>
                Already have an account?{' '}
                <label htmlFor="flip">
                  {' '}
                  <Link to="/auth"> Sign in Now</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
