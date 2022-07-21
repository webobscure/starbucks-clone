import React from 'react';

import '../App.css';

import boxB from '../assets/box-b.png';
import boxC from '../assets/box-c.png';
import boxD from '../assets/box-d.png';
import boxE from '../assets/box-e.jpg';
import boxF1 from '../assets/box-f1.jpg';
import boxF2 from '../assets/box-f2.jpg';

import { Link, Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';

export default function Home() {
  const { isAuth} = useAuth()

  return isAuth ? (
    <div>
    <section className="box box-a bg-primary text-center py-md">
      <div className="box-inner">
        <h2 className="text-xl">Jingle all the way to free favorites</h2>
        <p className="text-md">
          Join Starbucks Rewards for delicious deals & exclusive offers.
          <div>
            <Link to="/">Learn more</Link>
          </div>
        </p>
      </div>
    </section>

    <section className="box box-b bg-secondary grid-col-2 ">
      <img src={boxB} alt="box b" />
      <div className="box-text">
        <h2 className="text-xl">New to the nice list</h2>
        <p className="text-md">
          For a nondairy twist on a holiday cookie classic, try the new Iced Sugar Cookie
          Almondmilk Latte.
        </p>
        <Link to="/menu" className="btn btn-light-outline">
          Order now
        </Link>
      </div>
    </section>

    <section className="box box-c bg-secondary grid-col-2 grid-reversed">
      <img src={boxC} alt="box c" />
      <div className="box-text">
        <h2 className="text-xl">Merry moment</h2>
        <p className="text-md">
          Treat yourself to a festive Sugar Plum Cheese Danish with a nicely spiced sugar-plum
          spread.
        </p>
        <Link to="/menu" className="btn btn-light-outline">
          Order now
        </Link>
      </div>
    </section>

    <section className="box box-d bg-primary grid-col-2">
      <img src={boxD} alt="box d" />
      <div className="box-text">
        <h2 className="text-xl">Starbucks Thanksgiving Blend</h2>
        <p className="text-md">
          {' '}
          This elegant dark roast returns, showcasing flavors from some of the world's major
          coffee-growing regions.
        </p>
        <Link to="/menu" className="btn btn-light-outline">
          Order now
        </Link>
      </div>
    </section>

    <section className="box box-e bg-secondary grid-col-2 grid-reversed">
      <img src={boxE} alt="box e" />
      <div className="box-text">
        <h2 className="text-md">Fighting hunger this holiday</h2>
        <p className="text-md">
          Hunger is affecting millions of people across America this holiday season. Join us in
          our commitment to hunger relief and help feed neighbours in need.
        </p>
        <Link to="/menu" className="btn btn-light-outline">
          Order now
        </Link>
      </div>
    </section>

    <section className="box box-f grid-col-2">
      <div>
        <img src={boxF1} alt="box e" />
        <div className="bg-extra py-lg">
          <div className="box-text">
            <h2 className="text-md">Let the holiday cheer come to you</h2>
            <p className="text-md">
              Make the moment merry. Order Starbucks holiday favorites on Uber Eats.*
            </p>
            <Link to="/menu" className="btn btn-dark-outline">
              Order now
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img src={boxF2} alt="box e" />
        <div className="bg-primary py-lg">
          <div className="box-text">
            <h2 className="text-md">Loved Passing on Netflix?</h2>
            <p className="text-md">
              Our new social series about film adaptations kicks off with the actor and directors
              who brought the book of life.
            </p>
            <Link to="/menu" className="btn btn-light-outline">
              Order now
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
  ) : (
    <Navigate to='/auth' />
  )
}
