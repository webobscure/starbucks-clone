import React from 'react'
import logo from '../assets/starbucks_logo.png'

export default function Login() {
    return (
        <>
            <div className="background">
                <div className="registration">
                <img src={logo} alt="logo" width={100} height={100} />

                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder='Enter your Email' required />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="text" placeholder='Enter your Password' required />
                            </div>
                        </div>
                        <button className="button" type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
