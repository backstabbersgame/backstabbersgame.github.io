'use client';

import React from 'react';
import Image from 'next/image';
import Overview from '../../../../components/Overview/Overview';
import data from '../../../../content/ordem/ordem.json';
import Goal from '../../../../components/Goal/Goal';
import Preparation from '../../../../components/Preparation/Preparation';
import styles from './page.module.scss';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import GeneralRules from '../../../../components/GeneralRules/GeneralRules';
import EndGame from '../../../../components/EndGame/EndGame';
import { VideoGallery } from '../../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../../components/Newsletter/Newsletter';
import Components from '../../../../components/Components/Components';
import EndRound from '../../../../components/EndRound/EndRound';
import Score from '../../../../components/Score/Score';

const ComoJogar = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  return (
    <>
      <section className={styles.section}>
        <div className={isTablet || !isMobile ? styles.background : ''}>
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
              <Goal data={data} />
            </div>
            <Preparation data={data} />
          </div>
        </div>
        <Components data={data} />
        <div className={!isTablet || !isMobile ? styles.background2 : ''}>
          <div className={styles.content2}>
            <GeneralRules data={data} />
            <EndRound data={data} />
          </div>
        </div>
        <div className={styles.content2}>
          <Score data={data} />
          <EndGame data={data} />
        </div>
      </section>
      {/* <VideoGallery data={data} /> */}
      <Newsletter
        variant={'ordem'}
        data={data}
      />
    </>
  );
};

export default ComoJogar;
