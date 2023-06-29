import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import Product from '../components/Product';
import Contact from '../components/Contact';

const App = () => {
  return (
    <div
      id="background"
      className={`bg-background grid gap-y-7 overflow-hidden`}
    >
      <Header />
      <div className={`relative background bg-center bg-cover`}>
        <div className="mx-auto">
          <div className={`flex`}>
            <MainHero />
          </div>
        </div>
      </div>

      <LazyShow>
        <>
          <About />
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
        </>
      </LazyShow>

      <LazyShow>
        <>
          <Gallery />
        </>
      </LazyShow>
        <Contact />
      <Analytics />
    </div>
  );
};

export default App;
