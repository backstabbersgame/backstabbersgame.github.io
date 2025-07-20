'use client';

import React from 'react';
import styles from './Solara.module.scss';
import Hero from '../components/Hero/Hero';
import Game from '../components/Game/Game';
import About from '../components/About/About';
import data from '../content/solara/solara.json';
import Store from '../components/Store/Store';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
import Contact from '../components/Contact/Contact';
import { links, menuItems } from '../content/solara/links';

const componentsMap = {
  Hero: () => <Hero />,
  Game: () => <Game />,
  About: () => <About />,
  Contact: () => <Contact />,
  Store: () => <Store />,
  Newsletter: () => (
    <Newsletter
      variant='solara'
      data={data}
    />
  ),
};

const Solara = () => {
  return (
    <main>
      {/* Hero com header */}
      <div className={styles.stars}>
        <div className={styles['hero-section']}>
          <Header
            variant={'solara'}
            links={links}
            menuItems={menuItems}
          />
          {componentsMap.Hero()}
        </div>
      </div>

      {data.sections
        .filter((section) => section.visible && section.component !== 'Hero')
        .map((section, index) => {
          const Component = (componentsMap as any)[section.component];

          if (!Component) return null;

          if (section.component === 'Game') {
            return <React.Fragment key={index}>{Component()}</React.Fragment>;
          }
          if (section.component === 'About') {
            return (
              <React.Fragment key={index}>
                <div
                  style={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: 'white',
                    position: 'relative',
                    zIndex: 5,
                    marginTop: '-2px',
                  }}
                />
                <div className={styles.gradient}>{Component()}</div>
              </React.Fragment>
            );
          }

          if (['Contact', 'Store'].includes(section.component)) {
            return (
              <div
                className={styles.gradient}
                key={index}
              >
                {Component()}
              </div>
            );
          }

          if (section.component === 'Newsletter') {
            return <React.Fragment key={index}>{Component()}</React.Fragment>;
          }

          return null;
        })}
    </main>
  );
};
export default Solara;
