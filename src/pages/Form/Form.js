import React from 'react';
import classes from './Form.module.css';
import classNames from 'classnames';
export default function Form() {
  return (
    <div className={classes.Form}>
        <input type="checkbox" id="flip" />
        <div className={classes.cover}></div>
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
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className={classes.text}>
                <a href="#">Forgot password?</a>
              </div>
              <div className={classNames(classes.inputBox, classes.button)}>
                <input type="submit" value="Submit" />
              </div>
              <div>
                Don't have an account? <label htmlFor="flip">Signup Now</label>
              </div>
            </div>
          </div>
          <div className={classes.signupForm}>
            <div className={classes.title}>Signup</div>
            <div className={classes.inputBoxes}>
              <div className={classes.inputBox}>
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className={classes.inputBox}>
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  name="email"
                  id="email"
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
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className={classNames(classes.inputBox, classes.button)}>
                <input type="submit" value="Submit" />
              </div>
              <div className={classes.text}>
                Already have an account? <label htmlFor="flip">Sign in Now</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
