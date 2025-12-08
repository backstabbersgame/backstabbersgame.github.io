'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Components.module.scss';
import useBreakpoint from '../../hooks/useBreakpoint';

interface ComponentsProps {
  data: any;
}

const Components = ({ data }: ComponentsProps) => {
  const content = { ...data };
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';

  const filterItems = Object.entries(
    (content as Record<string, string>) ?? {}
  ).filter(([key]) => key.startsWith('item'));

  const items = filterItems.map((value: [string, string], idx: number) => (
    <li
      key={idx}
      className={styles.item}
    >
      <span className={styles.dot} />
      <p className={styles.p}>{value[1]}</p>
    </li>
  ));

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {content.title && (
          <div className={styles.header}>
            <Image
              width={isMobile ? 20 : 32}
              height={isMobile ? 20 : 32}
              src={`/images/icons/star.svg`}
              alt={'Estrela com gradiente azul e lilás'}
            />
            <h2 className={styles.h2}>{content.title}</h2>
          </div>
        )}
        <div className={styles.content}>
          <Image
            src={content.card.src}
            alt={content.card.alt}
            width={content.card.width}
            height={content.card.height}
            className={styles.card}
          />
          <ul className={styles.list}>{items}</ul>
        </div>
      </div>
    </div>
  );
};

export default Components;
