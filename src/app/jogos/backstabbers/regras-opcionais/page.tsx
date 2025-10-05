'use client';

import React from 'react';
import Image from 'next/image';
import data from '../../../../content/backstabbers/backstabbers.json';
import styles from './page.module.scss';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import BulletedList from '../../../../components/BulletedList/BulletedList';
import ImageList from 'src/components/ImageList/ImageList';

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

const RegrasOpcionais = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  return (
    <>
      {data.regrasOpcionais.sections
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

export default RegrasOpcionais;
