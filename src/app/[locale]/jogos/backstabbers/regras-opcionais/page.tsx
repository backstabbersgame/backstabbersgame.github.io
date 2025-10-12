'use client';

import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import useBreakpoint from '../../../../../hooks/useBreakpoint';
import BulletedList from '../../../../../components/BulletedList/BulletedList';
import ImageList from 'src/components/ImageList/ImageList';
import { getLocalizedContent } from 'src/content/getLocalizedContent';
import { Locale } from '../../../../../lib/i18n';

const RegrasOpcionais = ({
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
      const content = await getLocalizedContent('backstabbers', locale);
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
                src='/images/icons/flying-saucer.svg'
                width={32}
                height={32}
                alt='Ícone de nave espacial'
              />
              <h1 className={styles.h1}>{data.regrasOpcionais.title}</h1>
            </div>
          )}
          <div className={styles.subtitle}>
            <p className={styles.p}>{data.regrasOpcionais.subtitle}</p>
          </div>
        </div>
        <div className={styles.verticalSections}>
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
        </div>
      </section>
    ),
  };

  interface Section {
    visible: boolean;
    component: keyof typeof componentsMap;
  }

  return (
    <>
      {data.regrasOpcionais.sections
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

export default RegrasOpcionais;
