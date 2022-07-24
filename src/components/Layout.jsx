import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import Footer from './Footer';

import logo from '../assets/starbucks_logo.png';
import marker from '../assets/marker.svg';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'server/store/slices/userSlice';
import { useDispatch } from 'react-redux';

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function navToggle() {
  btn.classList.toggle('open');
  nav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

export default function Header() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/">
              <img src={logo} alt="Starbucks" />
            </Link>
          </div>
          <ul className="navbar-nav-left">
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/rewards">Rewards</Link>
            </li>
            <li>
              <Link to="/cards">Gift Cards</Link>
            </li>
          </ul>

          <ul className="navbar-nav-right">
            <li>
              <Link to="/">
                <img src={marker} alt="" />
                <span>Find a store</span>
              </Link>
            </li>
            <li>Hello, {email} </li>
            <li>
              <button className="btn" onClick={() => dispatch(removeUser())}>
                {' '}
                Sign out{' '}
              </button>
            </li>
          </ul>
          <button type="button" className="hamburger" id="menu-btn" onClick={() => navToggle()}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      <div className="container">
        <Outlet />
        <div className="divider"></div>
        <Footer />
      </div>

    </div>
  ) : (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/">
              <img src={logo} alt="Starbucks" />
            </Link>
          </div>
          <ul className="navbar-nav-left">
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/rewards">Rewards</Link>
            </li>
            <li>
              <Link to="/cards">Gift Cards</Link>
            </li>
          </ul>

          <ul className="navbar-nav-right">
            <li>
              <Link to="/">
                <img src={marker} alt="" />
                <span>Find a store</span>
              </Link>
            </li>
            <li>
              <Link className="btn btn-dark-outline" to="/auth">
                Sign in
              </Link>
            </li>
            <li>
              <Link className="btn " to="/signup">
                Join now
              </Link>
            </li>
          </ul>
          <button type="button" className="hamburger" id="menu-btn" onClick={() => navToggle()}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      <div className="container">
        <Outlet />
      </div>

      <div className="divider"></div>
      <Footer />
    </div>
  );
}
