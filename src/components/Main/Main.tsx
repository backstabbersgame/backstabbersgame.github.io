'use client';

import React from 'react';
import styles from './Main.module.scss';
import Image from 'next/image';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Variant } from '../../types/variant';
import { ButtonSpecial } from '@backstabbersgame/design-system';
import { usePathname } from 'next/navigation';
import { MenuItemsArray, MenuItem } from '../../types/links';

interface MainProps {
  data: any;
  menuItems: MenuItemsArray;
}

const Main = ({ data, menuItems }: MainProps) => {
  const path = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  const game = { ...data };

  const mainImageSrc = `${basePath}${game.main.mainImage.src}`;
  const mainImageAlt = `${basePath}${game.main.mainImage.alt}`;
  const mainImageWidth = isMobile ? 360 : isTablet ? 834 : 1440;
  const mainImageHeight = isMobile ? 171 : isTablet ? 396.15 : 684;

  const getItems = () => {
    if (menuItems.length === 5) {
      return -4;
    }
    if (menuItems.length === 4) {
      return -3;
    }
  };

  const links = Object.values(menuItems).slice(getItems());

  const description = () => {
    if (game.main.description && game.main.descriptionBold) {
      return (
        <p className={styles.text}>
          {game.main.description.replace(/\\n/g, '\n')}
          <strong>&nbsp;{game.main.descriptionBold}</strong>
        </p>
      );
    } else if (game.main.description1 && game.main.description2) {
      return (
        <div className={styles.descriptions}>
          <p className={styles.text}>
            {game.main.description1.replace(/\\n/g, '\n')}
          </p>
          <p className={styles.text}>
            {game.main.description2.replace(/\\n/g, '\n')}
          </p>
        </div>
      );
    } else {
      return (
        <p className={styles.text}>
          {game.main.description.replace(/\\n/g, '\n')}
        </p>
      );
    }
  };

  return (
    <section className={styles.main}>
      <div className={styles['image-container']}>
        <Image
          src={mainImageSrc}
          alt={mainImageAlt}
          width={mainImageWidth}
          height={mainImageHeight}
          className={styles.image}
        />
      </div>
      <div className={styles['content-container']}>
        <div className={styles.content}>
          <div
            className={!isMobile && !isTablet ? styles['logo-container'] : ''}
          >
            {!isMobile && !isTablet && (
              <Image
                src={game.main.logo.src}
                alt={game.main.logo.alt}
                width={game.main.logo.width}
                height={game.main.logo.height}
                className={styles.logo}
              />
            )}
            {description()}
          </div>

          <div
            className={`${styles['grid-container']} ${
              styles[`has-${links.length}`]
            }`}
          >
            {links.map((link: MenuItem, index: number) => (
              <ButtonSpecial
                key={index}
                className='grid-item'
                icon={
                  React.isValidElement(link.icon)
                    ? link.icon
                    : link.icon.svgActive
                }
                label={`${link.label}`}
                href={link.href}
                size={isMobile ? 'small' : 'big'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
