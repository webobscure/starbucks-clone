import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import Footer from './Footer';

import logo from '../assets/starbucks_logo.png';
import marker from '../assets/marker.svg';
import cart from '../assets/cart.svg';

import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'server/store/slices/userSlice';
import { useDispatch } from 'react-redux';

let btn = document.getElementById('menu-btn');
let nav = document.getElementById('menu');

function navToggle() {
  console.log(btn.classList);
  btn.classList.toggle('open');
  nav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

export default function Header(props) {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return (
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
          {isAuth 
          ? <ul className="navbar-nav-right">
          <li>
            <Link to="/">
              <img src={marker} alt="find a store" />
              <span>Find a store</span>
            </Link>
          </li>
          <li className="shopping-cart">
            <Link to="/cart" id="cart">
              <img src={cart} alt="cart" className="cart" />
              <span className="badge">{props.count}</span>
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
          : <ul className="navbar-nav-right">
          <li>
            <Link to="/">
              <img src={marker} alt="marker" className="marker" />
              <span>Find a store</span>
            </Link>
          </li>
          <li className="shopping-cart">
            <Link to="/" id="cart">
              <img src={cart} alt="cart" className="cart" />
              <span className="badge">{props.count}</span>
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
        </ul>}

          
          <button type="button" className="hamburger" id="menu-btn" onClick={() => navToggle()}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      <div class="mobile-menu hidden" id="menu">
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/">Rewards</Link>
          </li>
          <li>
            <Link to="/">Gift Cards</Link>
          </li>
        </ul>

        <div class="mobile-menu-bottom">
          <button class="btn btn-dark-outline">Sign in</button>
          <button class="btn btn-dark">Join now</button>
          <div>
            <Link to="/">
              <img src={marker} alt="" />
              <span>Find a store</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-cart">
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <i className="fa fa-shopping-cart cart-icon"></i>
            <span class="badge">3</span>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">$2,229.97</span>
            </div>
          </div>

          <ul className="shopping-cart-items">
            <li className="clearfix">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
                alt="item1"
              />
              <span className="item-name">Sony DSC-RX100M III</span>
              <span className="item-price">$849.99</span>
              <span className="item-quantity">Quantity: 01</span>
            </li>

            <li className="clearfix">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg"
                alt="item1"
              />
              <span className="item-name">KS Automatic Mechanic...</span>
              <span className="item-price">$1,249.99</span>
              <span className="item-quantity">Quantity: 01</span>
            </li>

            <li className="clearfix">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg"
                alt="item1"
              />
              <span className="item-name">Kindle, 6" Glare-Free To...</span>
              <span className="item-price">$129.99</span>
              <span className="item-quantity">Quantity: 01</span>
            </li>
          </ul>

          <Link to="/" className="button">
            Checkout
          </Link>
        </div>
      </div>

      <div className="container">
        <Outlet />
        <div className="divider"></div>
        <Footer />
      </div>
    </div>
  )
}
