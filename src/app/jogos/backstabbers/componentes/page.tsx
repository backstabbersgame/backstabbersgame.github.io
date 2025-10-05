'use client';

import React from 'react';
import Image from 'next/image';
import data from '../../../../content/backstabbers/backstabbers.json';
import styles from './page.module.scss';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import Components from '../../../../components/Components/Components';

const componentsMap = {
  Content: (isMobile: boolean, isTablet: boolean) => (
    <section className={styles.section}>
      <div className={`${styles.background} ${styles.gradient}`}>
        {(isTablet || !isMobile) && (
          <div className={styles.name}>
            <Image
              src='/images/icons/puzzle-piece.svg'
              width={32}
              height={32}
              alt='Ícone de peça de quebra cabeça'
            />
            <h1 className={styles.h1}>Componentes</h1>
          </div>
        )}
      </div>
      <Components data={data.components[1]} />
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.content2}>
          <Components data={data.components[2]} />
        </div>
      </div>
      <div className={`${styles.background2} ${styles.white}`}>
        <Components data={data.components[3]} />
      </div>
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.content2}>
          <Components data={data.components[4]} />
        </div>
      </div>
    </section>
  ),
};

const Componentes = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  return (
    <>
      {data.components.sections
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

export default Componentes;
