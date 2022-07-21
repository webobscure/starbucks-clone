import { useState } from 'react';
import classes from './Form.module.css';
import classNames from 'classnames';
import logo from '../../assets/starbucks_logo.png';
const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <div className={classes.Auth}>
        <div className={classes.content}>
          <div className={classes.loginForm}>
            <div className={classes.title}>{title}</div>
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
              <button
                className={classNames(classes.inputBox, classes.button)}
                onClick={() => handleClick(email, password)}>
                {title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Form };
