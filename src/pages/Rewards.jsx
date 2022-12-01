import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '../components/Tabs'

import gettingStartedOne from '../assets/getting-started-1.png';
import gettingStartedTwo from '../assets/getting-started-2@2x.png';
import gettingStartedThree from '../assets/getting-started-3@2x.png';
import bgHero from '../assets/xl-hero-desktop_2021.png';
import benefits from '../assets/benefits.png'
import freebies from '../assets/freebies.png'
import iceCream from '../assets/ice-cream.png'


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

                <p className="invite"> Join now to start earning Rewards.</p>

                <Link className="btn btn-green mt3 " to="/signup">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sections ">
          <div className="textBlock">
            <h1> Getting started is easy</h1>

            <p>Earn stars and get rewarded in a few easy steps.</p>
          </div>
          <div className="columns">
            <div className="column">
              <div className="number text-center">
                <img src={gettingStartedOne} alt="1" width={48} />
              </div>

              <div className=" text-center">
                <h2 className="text-suggestions text-semibold">Create an account</h2>

                <p className="pt3">
                  To get started,{' '}
                  <Link to="/signup" className="link">
                    join now
                  </Link>
                  . You can also <Link to='/signup' className='link'>join in the app</Link> to get access to the full range os Starbucks
                  Rewards benefits
                </p>
              </div>
            </div>
            <div className="column">
              <div className="number text-center">
                <img src={gettingStartedTwo} alt="2" width={48} />
              </div>

              <div className=" text-center">
                <h2 className="text-suggestions text-semibold">Order and pay how you'd like</h2>

                <p className="pt3">
                  Use cash, credit/debit card or save some time and pay right though the app. You'll
                  collect Stars all ways.{' '}
                  <Link to="/auth" className="link">
                    Learn more
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="column">
              <div className="number text-center">
                <img src={gettingStartedThree} alt="3" width={48} />
              </div>

              <div className=" text-center">
                <h2 className="text-suggestions text-semibold">Earn Stars, get Rewards</h2>

                <p className="pt3">
                  As you earn Star, you can redeem them for Rewards - like free food, drinks, and
                  more. Start redeeming with as little as 25 Stars!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sections">
          <div className="global pt7 px0 text-center">
            <div className="px3">
              <h2 className='text-mn text-semibold pb3' tabIndex={-1}> Get your favorites for free</h2>
            </div>
            <div className='text-center'>
              <Tabs />
            </div>
          </div>
        </div>
        <div className="sections ">
          <div className="textBlock">
            <h1> Endless extras</h1>

            <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
          </div>
          <div className="columns">
            <div className="column">
              <div className="benefits-image text-center">
                <img src={freebies} alt="1" width={100} />
              </div>

              <div className="freebies text-center">
                <h3 className=" freebies-title text-suggestions text-semibold pt3">Fun freebies</h3>

                <p className="freebies-text cardContent pt3">
                Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.
                </p>

                <Link to="/" className="benefits-link">Learn more</Link>
              </div>
            </div>
            <div className="column">
              <div className="benefits-image text-center">
                <img src={benefits} alt="2" width={100} />
              </div>

              <div className=" text-center">
                <h3 className="text-suggestions text-semibold pt3">Order & pay ahead</h3>

                <p className=" cardContent pt3">
                Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.
                </p>

                <Link to="/" className="benefits-link">Learn more</Link>
              </div>
            </div>
            <div className="column">
              <div className="benefits-image text-center">
                <img src={iceCream} alt="3" width={100} />
              </div>

              <div className=" text-center">
                <h3 className="text-suggestions text-semibold pt3">Get to free faster</h3>

                <p className="cardContent pt3">
                Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
                </p>

                <Link to="/" className="benefits-link">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
