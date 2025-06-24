'use client';

import React from 'react';
import styles from './Home.module.scss';
import Hero from '../../components/Hero/Hero';
import Game from '../../components/Game/Game';
import About from 'src/components/About/About';
import Store from 'src/components/Store/Store';
// import Newsletter from 'src/components/Newsletter/Newsletter';
import Header from 'src/components/Header/Header';
// import Footer from 'src/components/Footer/Footer';

const Home = () => {
  return (
    <>
      <div className={styles.stars}>
        <div className={styles['hero-section']}>
          <Header variant={'solara'} />
          <Hero />
        </div>
      </div>
      <Game />
      <div
        style={{
          width: '100%',
          height: '4px',
          backgroundColor: 'white',
          position: 'relative',
          zIndex: '5',
          marginTop: '-2px',
        }}
      ></div>
      <div className={styles.gradient}>
        <About />
        {/* <Store /> */}
      </div>
      {/* <Newsletter />
      <Footer /> */}
    </>
  );
};
export default Home;
