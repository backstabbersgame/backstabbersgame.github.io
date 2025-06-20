'use client';

import React from 'react';
import styles from './Main.module.scss';
import Image from 'next/image';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Variant } from '../../types/variant';
import { ButtonSpecial } from '@backstabbersgame/design-system';
import { usePathname } from 'next/navigation';

interface MainProps {
  variant: Variant;
  data: any;
}

const Main = ({ variant, data }: MainProps) => {
  const path = usePathname();
  console.log(path);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  const game = { ...data };

  const mainImageSrc = `${game.mainImage.src}`;
  const mainImageAlt = `${game.mainImage.alt}`;
  const mainImageWidth = isMobile ? 360 : isTablet ? 834 : 1440;
  const mainImageHeight = isMobile ? 171 : isTablet ? 396.15 : 684;


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
        <p>
          {game.description.replace(/\\n/g, '\n')}
          <strong>&nbsp;{game.descriptionBold}</strong>
        </p>
        <div className={`${styles['grid-container']} has-${game.links}`}>
          {game.links.map((link: { label: any; href: any; }, index: React.Key | null | undefined) => (
            <ButtonSpecial
              key={index}
              className='grid-item'
              icon={undefined}
              label={`${link.label}`}
              href={`/${link.href}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
