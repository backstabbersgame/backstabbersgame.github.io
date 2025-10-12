'use client';

import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import Overview from '../../../../../components/Overview/Overview';
import Table from '../../../../../components/Table/Table';
import styles from './page.module.scss';
import useBreakpoint from '../../../../../hooks/useBreakpoint';
import Field from '../../../../../components/Field/Field';
import { VideoGallery } from '../../../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../../../components/Newsletter/Newsletter';
import BulletedList from '../../../../../components/BulletedList/BulletedList';
import NumberedList from '../../../../../components/NumberedList/NumberedList';
import MixedList from '../../../../../components/MixedList/MixedList';
import { Locale } from '../../../../../lib/i18n';
import { getLocalizedContent } from '../../../../../content/getLocalizedContent';

const ComoJogar = ({ params }: { params: Promise<{ locale: Locale }> }) => {
  const { locale } = use(params);
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const content = await getLocalizedContent('backstabbers', locale);
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
                src='/images/icons/planet.svg'
                width={32}
                height={32}
                alt='Ícone de planeta com gradiente azul e lilás'
              />
              <h1 className={styles.h1}>{data.comoJogar.title}</h1>
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
        <Table data={data} />
        <Field data={data} />
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
              section='endGame'
              color={
                isMobile || isTablet
                  ? data.comoJogar.endGame.backgroundMobile
                  : data.comoJogar.endGame.background
              }
            />
          </div>
        </div>
      </section>
    ),
    VideoGallery: () => <VideoGallery data={data} />,
    Newsletter: () => (
      <Newsletter
        variant='backstabbers'
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

export default ComoJogar;
