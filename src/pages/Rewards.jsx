import React from 'react';
import { Link } from 'react-router-dom';

import gettingStartedOne from '../assets/getting-started-1.png';
import gettingStartedTwo from '../assets/getting-started-2@2x.png';
import gettingStartedThree from '../assets/getting-started-3@2x.png';
import bgHero from '../assets/xl-hero-desktop_2021.png';

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
              <img src={bgHero} alt="bg" className="bg" />
              <div className="textBlock py5 global">
                <h2 className=" text-xl text-semibold pt5" tabIndex={-1}>
                  Free coffee
                  <br />
                  Is a tap away
                </h2>

                <p className="invite s"> Join now to start earning Rewards.</p>

                <Link className="btn btn-green mt3 " to="/signup">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sections row ">
          <div className="textBlock ">
            <h1> Getting started is easy</h1>

            <p>Earn stars and get rewarded in a few easy steps.</p>
          </div>
          <div className="columns">
            <div className="column">
              <div className="number text-center">
                <img src={gettingStartedOne} alt="1" width={48} />
              </div>

              <div className="cardContent text-center">
                <h2 className="text-suggestions text-semibold">Create an account</h2>

                <p className="pt3">
                  To get started, join now. You can also join in the app to get access to the full
                  range os Starbucks Rewards benefits
                </p>
              </div>
            </div>
            <div className="column">
              <div className="number text-center">
                <img src={gettingStartedTwo} alt="2" width={48} />
              </div>

              <div className="cardContent text-center">
                <h2 className="text-suggestions text-semibold">Order and pay how you'd like</h2>

                <p className="pt3">
                  Use cash, credit/debit card or save some time and pay right though the app. You'll
                  collect Stars all ways. Learn more.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="number text-center">
                <img src={gettingStartedThree} alt="3" width={48} />
              </div>

              <div className="cardContent text-center">
                <h2 className="text-suggestions text-semibold">Earn Stars, get Rewards</h2>

                <p className="pt3">
                  As you earn Star, you can redeem them for Rewards - like free food, drinks, and
                  more. Start redeeming with as little as 25 Stars!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
