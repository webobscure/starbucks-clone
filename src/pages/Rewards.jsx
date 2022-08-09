import React from 'react';
import { Link } from 'react-router-dom';


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
          <div className="flex bgImage">
            <div className="bgHero">
              <div className="textBlock py5 global">
                <h2 className=" text-xl text-semibold" tabIndex={-1}>
                  Free coffee
                  <br />
                  Is a tap away
                </h2>

                <p className="invite"> Join now to start earning Rewards.</p>

                <Link className="btn btn-green" to='/signup'>Join Now</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
