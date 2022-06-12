import React from 'react'
import classes from './Form.module.css'
export default function Form() {
    return (
        <div >
            <form action="#" className={classes.Auth}>
                <div className="login-form">
                    <div className="title">Login</div>
                    <div className="input-boxes">
                        <div className="input-box">
                            <i className="fas fa-envelope"></i>
                            <input type="text" name="email" id="email" placeholder='Enter your email' required />
                        </div>
                        <div className="input-box">
                            <i className="fas fa-solid fa-key"></i>
                            <input type="text" name="password" id="password" placeholder='Enter your password' required />
                        </div>
                        <div className="text"><a href="#">Forgot password?</a></div>
                        <div className="button input-box">
                            <input type="submit" value="Submit"  />
                        </div>
                        <div>Don't have an account? <label htmlFor="#">Signup Now</label></div>
                    </div>
                </div>
                <div className="signup-form">
                    <div className="title">Signup</div>
                    <div className="input-boxes">
                    <div className="input-box">
                            <i className="fas fa-user"></i>
                            <input type="text" name="username" id="username" placeholder='Enter your username' required />
                        </div>
                        <div className="input-box">
                            <i className="fas fa-envelope"></i>
                            <input type="text" name="email" id="email" placeholder='Enter your email' required />
                        </div>
                        <div className="input-box">
                            <i className="fas fa-solid fa-key"></i>
                            <input type="text" name="password" id="password" placeholder='Enter your password' required />
                        </div>
                        <div className="button input-box">
                            <input type="submit" value="Submit"  />
                        </div>
                        <div>Already have an account? <label htmlFor="#">Sign in Now</label></div>

                    </div>
                </div>
            </form>
            </div>
    )
}
