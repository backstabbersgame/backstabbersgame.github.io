'use client';

import React from 'react';
import Image from 'next/image';
import Overview from '../../../../components/Overview/Overview';
import data from '../../../../content/ordem/ordem.json';
import styles from './page.module.scss';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import { VideoGallery } from '../../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../../components/Newsletter/Newsletter';
import Components from '../../../../components/Components/Components';
import BulletedList from '../../../../components/BulletedList/BulletedList';
import NumberedList from '../../../../components/NumberedList/NumberedList';
import MixedList from '../../../../components/MixedList/MixedList';

const componentsMap = {
  Content: (isMobile: boolean, isTablet: boolean) => (
    <section className={styles.section}>
      <div className={`${styles.background} ${styles.gradient}`}>
        {(isTablet || !isMobile) && (
          <div className={styles.name}>
            <Image
              src='/images/icons/planet.svg'
              width={32}
              height={32}
              alt='Ícone de planeta com gradiente azul e lilás'
            />
            <h1 className={styles.h1}>Como jogar</h1>
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.left}>
            <Overview data={data} />
            <BulletedList
              data={data.comoJogar}
              section='goal'
              color={
                isMobile
                  ? data.comoJogar.goal.backgroundMobile
                  : data.comoJogar.goal.background
              }
            />
          </div>
          <NumberedList
            data={data.comoJogar}
            section='preparation'
            color={
              isMobile
                ? data.comoJogar.preparation.backgroundMobile
                : data.comoJogar.preparation.background
            }
          />
        </div>
      </div>
      <Components data={data} />
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.content2}>
          <MixedList
            data={data.comoJogar}
            section='generalRules'
            color={
              isMobile || isTablet
                ? data.comoJogar.generalRules.backgroundMobile
                : data.comoJogar.generalRules.background
            }
          />
          <BulletedList
            data={data.comoJogar}
            section='endRound'
            color={
              isMobile || isTablet
                ? data.comoJogar.endRound.backgroundMobile
                : data.comoJogar.endRound.background
            }
          />
        </div>
      </div>
      <div className={styles.content2}>
        <BulletedList
          data={data.comoJogar}
          section='score'
          color={
            isMobile || isTablet
              ? data.comoJogar.score.backgroundMobile
              : data.comoJogar.score.background
          }
        />
        <BulletedList
          data={data.comoJogar}
          section='endGame'
          color={
            isMobile || isTablet
              ? data.comoJogar.endGame.backgroundMobile
              : data.comoJogar.endGame.background
          }
        />
      </div>
    </section>
  ),
  VideoGallery: () => <VideoGallery data={data} />,
  Newsletter: () => (
    <Newsletter
      variant='ordem'
      data={data}
    />
  ),
};

const ComoJogar = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  return (
    <>
      {data.comoJogar.sections
        .filter((section) => section.visible)
        .map((section) => {
          const Component = (componentsMap as any)[section.component];
          return Component ? (
            <React.Fragment key={section.component}>
              {Component(isMobile, isTablet)}
            </React.Fragment>
          ) : null;
        })}
    </>
  );
};

export default ComoJogar;
