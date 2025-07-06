'use client';

import React from 'react';
import styles from './Solara.module.scss';
import Hero from '../components/Hero/Hero';
import Game from '../components/Game/Game';
import About from '../components/About/About';
import data from '../content/solara/solara.json';
// import Store from '../components/Store/Store';
// import Newsletter from '../components/Newsletter/Newsletter';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
// import Contact from '../components/Contact/Contact';
// import Footer from '../components/Footer/Footer';
import { links, menuItems } from '../content/solara/links';

const Solara = () => {
  return (
    <main>
      <div className={styles.stars}>
        <div className={styles['hero-section']}>
          <Header
            variant={'solara'}
            links={links}
            menuItems={menuItems}
          />
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
        {/* <Contact/> */}
        {/* <Store /> */}
      </div>
      <Newsletter
        variant={'solara'}
        data={data}
      />
      {/*<Footer /> */}
    </main>
  );
};
export default Solara;
