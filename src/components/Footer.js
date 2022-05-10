import React from 'react'

import spotify from '../assets/social-spotify.svg'
import facebook from '../assets/social-facebook.svg'
import pinterest from '../assets/social-pinterest.svg'
import instagram from '../assets/social-instagram.svg'
import youtube from '../assets/social-youtube.svg'
import twitter from '../assets/social-spotify.svg'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
        <div className="footer-container">
          <div className="social">
            <a href="https://spotify.com">
              <img src={spotify} alt="" />
            </a>
            <a href="https://facebook.com">
              <img src={facebook} alt="" />
            </a>
            <a href="https://pinterest.com">
              <img src={pinterest} alt="" />
            </a>
            <a href="https://instagram.com">
              <img src={instagram} alt="" />
            </a>
            <a href="https://youtube.com">
              <img src={youtube} alt="" />
            </a>
            <a href="https://twitter.com">
              <img src={twitter} alt="" />
            </a>
          </div>
          <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </footer>
        </div>
    )
}
