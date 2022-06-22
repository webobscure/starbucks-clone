import React, { useState } from 'react';
import classes from './Form.module.css';
import classNames from 'classnames';
import logo from '../../assets/starbucks_logo.png';
import { Link } from 'react-router-dom';

export default function Form({title, handleClick}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
            <div className={classes.title}>Login</div>
            <div className={classes.inputBoxes}>
              <div className={classes.inputBox}>
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={classes.inputBox}>
                <i className="fas fa-solid fa-key"></i>
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className={classes.text}>
                <a href="vk.com">Forgot password?</a>
              </div>
              <button className={classNames(classes.inputBox, classes.button)} onClick={() => handleClick( email , password )}>
                {title}
              </button>
              <div>
                Don't have an account?{' '}
                <label htmlFor="flip">
                  {' '}
                  <Link to="/signup"> Sign in Now</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
