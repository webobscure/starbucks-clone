import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Form.module.css';
import logo from '../../assets/starbucks_logo.png';
import { setUser } from '../../server/store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    console.log(email,password);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        navigate('/menu')
    })
    .catch((e) => alert(e));
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
      <div  className={classes.Auth}>
        <div className={classes.content}>
          <div className={classes.loginForm}>
            <div className={classes.title}>Login</div>
            <div className={classes.inputBoxes}>
              <div className={classes.inputBox}>
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  value={email}
                  onChange = {(e) => setEmail(e.target.value)}
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
                onClick={handleLogin}>
               Login
              </button>
              <div>
                Don't have an account?{' '}
                <label htmlFor="flip">
                  {' '}
                  <Link to="/signup"> Sign up Now</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
