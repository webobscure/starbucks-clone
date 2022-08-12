import React from 'react';
import { Link } from 'react-router-dom';

import bgHero from '../assets/xl-hero-desktop_2021.png'

export default function Rewards() {
  return (
    <>
      <main className="main">
        <div className="banner">
          <div className="maxWidth">
            <h1 className="heading textWhite" tabIndex={-1}>
              Starbucks Rewards
            </h1>
          </div>
        </div>
        <div className="sections">
          <div className="flex bgImage size12of12 clearfix">
            <div className="bgHero">
              <img src={bgHero} alt="bg"  className='bg'/>
              <div className="textBlock py5 global">
                <h2 className=" text-xl text-semibold pt5" tabIndex={-1}>
                  Free coffee
                  <br />
                  Is a tap away
                </h2>

                <p className="invite s"> Join now to start earning Rewards.</p>

                <Link className="btn btn-green mt3 " to='/signup'>Join Now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sections">
          <div className="textBlock">
            <h1> Getting started is easy</h1>

            <p>Earn stars and get rewarded in a few easy steps.</p>
          </div>
          <div className="columns">
          <div className="column">
            1

            <h2>Create an account</h2>

            <h3>To get started, join now. You can also join in the app to get access to the full range os Starbucks Rewards benefits</h3>
          </div>
          <div className="column">
            2

            <h2> Order and pay how you'd like</h2>

            <h3>Use cash, credit/debit card or save some time and pay right though the app. You'll collect Stars all ways. Learn more.</h3>
          </div>
          <div className="column">
            3

            <h2>Earn Stars, get Rewards</h2>

            <h3>As you earn Star, you can redeem them for Rewards -  like free food, drinks, and more. Start redeeming with as little as 25 Stars! </h3>
          </div>
          </div>
        </div>
      </main>
    </>
  );
}
