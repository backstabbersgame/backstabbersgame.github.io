'use client';

import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import Overview from '../../../../../components/Overview/Overview';
import styles from './page.module.scss';
import useBreakpoint from '../../../../../hooks/useBreakpoint';
import { VideoGallery } from '../../../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../../../components/Newsletter/Newsletter';
import Components from '../../../../../components/Components/Components';
import BulletedList from '../../../../../components/BulletedList/BulletedList';
import NumberedList from '../../../../../components/NumberedList/NumberedList';
import MixedList from '../../../../../components/MixedList/MixedList';
import { getLocalizedContent } from '../../../../../content/getLocalizedContent';
import { Locale } from '../../../../../lib/i18n';
import ImageList from '../../../../../components/ImageList/ImageList';
import Table from '../../../../../components/Table/Table';

const ModoDiversidade = ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = use(params);
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const content = await getLocalizedContent('galhos', locale);
      setData(content);
    };
    fetchData();
  }, [locale]);

  if (!data) return;

  const componentsMap = {
    Content: (isMobile: boolean, isTablet: boolean) => (
      <section className={styles.section}>
        <div className={`${styles.background} ${styles.gradient}`}>
          {(isTablet || !isMobile) && (
            <div className={styles.name}>
              <Image
                src='/images/icons/moon-stars.svg'
                width={32}
                height={32}
                alt='Ícone de lua com gradiente azul e lilás'
              />
              <h1 className={styles.h1}>{data.modoNoturno.title}</h1>
            </div>
          )}
          <div className={styles.subtitle}>
            <p className={styles.p}>{data.modoNoturno.subtitle}</p>
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <Overview data={data.modoNoturno} />
              <BulletedList
                data={data.modoNoturno}
                section='goal'
                color={
                  isMobile
                    ? data.comoJogar.goal.backgroundMobile
                    : data.comoJogar.goal.background
                }
              />
            </div>
            <NumberedList
              data={data.modoNoturno}
              section='preparation'
              color={
                isMobile
                  ? data.modoNoturno.preparation.backgroundMobile
                  : data.modoNoturno.preparation.background
              }
            />
          </div>
        </div>
        <div className={`${styles.background2} ${styles.gray}`}>
          <div className={styles.content2}>
            <MixedList
              data={data.modoNoturno}
              section='generalRules'
              color={
                isMobile || isTablet
                  ? data.modoNoturno.generalRules.backgroundMobile
                  : data.modoNoturno.generalRules.background
              }
            />
            <BulletedList
              data={data.modoNoturno}
              section='endGame'
              color={
                isMobile || isTablet
                  ? data.modoNoturno.endGame.backgroundMobile
                  : data.modoNoturno.endGame.background
              }
            />
          </div>
        </div>
        <div className={`${styles.background2} ${styles.white}`}>
          <div className={styles.content2}>
            <MixedList
              data={data.modoNoturno}
              section='mushrooms'
              color={
                isMobile || isTablet
                  ? data.modoNoturno.mushrooms.backgroundMobile
                  : data.modoNoturno.mushrooms.background
              }
            />
            <div
              className={`${styles.table} ${isMobile || isTablet ? styles.gray : styles.white}`}
            >
              <Image
                width={data.modoNoturno.mushrooms.tile.width}
                height={data.modoNoturno.mushrooms.tile.height}
                src={data.modoNoturno.mushrooms.tile.src}
                alt={data.modoNoturno.mushrooms.tile.alt}
                className={styles.card}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.background2} ${styles.gray}`}>
          <div className={`${styles.content2}`}>
            <MixedList
              data={data.modoNoturno}
              section='fadasUnseelie'
              color={
                isMobile || isTablet
                  ? data.modoNoturno.fadasUnseelie.backgroundMobile
                  : data.modoNoturno.fadasUnseelie.background
              }
            />
            <div
              className={`${styles.fadas} ${isMobile || isTablet ? styles.white : styles.gray}`}
            >
              <Image
                width={data.modoNoturno.fadasUnseelie.fada1.width}
                height={data.modoNoturno.fadasUnseelie.fada1.height}
                src={data.modoNoturno.fadasUnseelie.fada1.src}
                alt={data.modoNoturno.fadasUnseelie.fada1.alt}
                className={styles.fada}
              />
              <Image
                width={data.modoNoturno.fadasUnseelie.fada2.width}
                height={data.modoNoturno.fadasUnseelie.fada2.height}
                src={data.modoNoturno.fadasUnseelie.fada2.src}
                alt={data.modoNoturno.fadasUnseelie.fada2.alt}
                className={styles.fada}
              />
            </div>
          </div>
        </div>
      </section>
    ),
    Newsletter: () => (
      <Newsletter
        variant='galhos'
        data={data}
      />
    ),
  };

  interface Section {
    visible: boolean;
    component: keyof typeof componentsMap;
  }

  return (
    <>
      {data.comoJogar.sections
        .filter((section: Section) => section.visible)
        .map((section: Section) => {
          const Component = componentsMap[section.component];
          return Component ? (
            <React.Fragment key={section.component}>
              {Component(isMobile, isTablet)}
            </React.Fragment>
          ) : null;
        })}
    </>
  );
};

export default ModoDiversidade;
