'use client';

import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import { Button } from '@backstabbersgame/design-system';
import heroContent from '../../content/hero.json';

const hero = heroContent;

const Hero = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className={styles.hero}>
      <div className={styles['hero-side']}>
        <section className={styles['hero-content']}>
          <h1 className={styles['hero-title']}>
            {hero.title.replace(/\\n/g, '\n')}
          </h1>
          <p className={styles['hero-p']}>
            {hero.description.replace(/\\n/g, '\n')}
          </p>
        </section>
        <section className={styles['hero-buttons']}>
          <Button
            variant='primary'
            className={styles.btn}
            href={hero.primary.link}
          >
            {hero.primary.label}
          </Button>
          <Button
            variant='tertiary'
            className={styles.btn}
            href={hero.tertiary.link}
          >
            {hero.tertiary.label}
          </Button>
        </section>
      </div>
      <section className={styles['hero-characters']}>
        <Image
          src={`/images/characters.png`}
          alt={'Characters'}
          width={748}
          height={737}
          placeholder='blur'
          blurDataURL={`/images/characters.png`}
          className={styles.characters}
        />
      </section>
    </div>
  );
};
export default Hero;
