import React from 'react';
import Slider from '../components/Slider';
import { Helmet } from 'react-helmet';
import Types from '../components/Types';

const Home = () => {
    return (
      <>
        {/* slider section */}
        <section className="mt-3">
          <Slider></Slider>
        </section>
        {/* type writer start*/}
        <section>
        <Types></Types>
        </section>
        {/* type writer end*/}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
      </>
    );
};

export default Home;