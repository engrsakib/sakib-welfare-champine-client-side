import React from 'react';
import Slider from '../components/Slider';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
      <>
        {/* slider section */}
        <section className='mt-3'>
          <Slider></Slider>
        </section>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
      </>
    );
};

export default Home;