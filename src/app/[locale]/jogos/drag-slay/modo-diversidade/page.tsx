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
      const content = await getLocalizedContent('drag', locale);
      setData(content);
    };
    fetchData();
  }, [locale]);

  if (!data) return;

  const componentsMap = {
    Content: (isMobile: boolean, isTablet: boolean) => (
      <section className={styles.section}>
        <div
          className={`${styles.background} ${isMobile ? styles.white : styles.gradient}`}
        >
          {(isTablet || !isMobile) && (
            <div className={styles.name}>
              <Image
                src='/images/icons/rainbow.svg'
                width={32}
                height={32}
                alt='Ícone de nave espacial'
              />
              <h1 className={styles.h1}>{data.modoDiversidade.title}</h1>
            </div>
          )}
          <div className={styles.subtitle}>
            <p className={styles.p}>{data.modoDiversidade.subtitle}</p>
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <Overview data={data.modoDiversidade} />
              <BulletedList
                data={data.modoDiversidade}
                section='goal'
                color={
                  isMobile
                    ? data.modoDiversidade.goal.backgroundMobile
                    : data.modoDiversidade.goal.background
                }
              />
            </div>
            <NumberedList
              data={data.modoDiversidade}
              section='preparation'
              color={
                isMobile
                  ? data.modoDiversidade.preparation.backgroundMobile
                  : data.modoDiversidade.preparation.background
              }
            />
          </div>
        </div>

        <div className={`${styles.background2} ${styles.gray}`}>
          <div className={styles.content}>
            <MixedList
              data={data.modoDiversidade}
              section='gameFlow'
              color={
                isMobile || isTablet
                  ? data.modoDiversidade.gameFlow.backgroundMobile
                  : data.modoDiversidade.gameFlow.background
              }
            />
            <Image
              width={data.modoDiversidade.table.card1.width}
              height={data.modoDiversidade.table.card1.height}
              src={data.modoDiversidade.table.card1.src}
              alt={data.modoDiversidade.table.card1.alt}
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.content2}>
          <BulletedList
            data={data.modoDiversidade}
            section='dressADrag'
            color={
              isMobile || isTablet
                ? data.modoDiversidade.dressADrag.backgroundMobile
                : data.modoDiversidade.dressADrag.background
            }
          />
          <BulletedList
            data={data.modoDiversidade}
            section='endGame'
            color={
              isMobile || isTablet
                ? data.modoDiversidade.endGame.backgroundMobile
                : data.modoDiversidade.endGame.background
            }
          />
        </div>
        {/* <div className={styles.verticalSections}>
          <div className={styles.section1}>
            <h2 className={styles.h2Opcional}>
              {data.regrasOpcionais.regrasGerais.title}
            </h2>
            <BulletedList
              data={data.regrasOpcionais.regrasGerais}
              section='punicao'
              color=''
              size='20'
              removePadding
              starSize={20}
            />
            <BulletedList
              data={data.regrasOpcionais.regrasGerais}
              section='imposicao'
              color=''
              size='20'
              removePadding
              starSize={20}
            />
            <BulletedList
              data={data.regrasOpcionais.regrasGerais}
              section='revanche'
              color=''
              size='20'
              removePadding
              starSize={20}
            />
          </div>
          <div className={`${styles.section2} ${styles.gray}`}>
            <h2 className={styles.h2}>
              {data.regrasOpcionais.regrasCartas.title}
            </h2>
            <ImageList
              data={data.regrasOpcionais}
              section='regrasCartas'
              color='gray'
              size='20'
            />
          </div>
        </div> */}
      </section>
    ),
    Newsletter: () => (
      <Newsletter
        variant='drag'
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
