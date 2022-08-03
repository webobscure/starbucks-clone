import React from 'react';

import xlHero from '../assets/xl-hero-desktop_2021.png';

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
              <div className=" size12of12 contentColumn mx-auto px0 global">
                <div className="contentColumn__inner flex">
                  <div className="flex size12of12 clearfix">
                    <div className="flexEmbed pb">
                      <div className="flex size12of12 items-center justify-start">
                        <div className="textBlock py5 global">
                          <h2 className="heading text-xl text-semibold" tabIndex={-1}>
                            Free coffee
                            <br />
                            Is a tap away
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
