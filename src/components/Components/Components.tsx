'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Components.module.scss';

interface ComponentsProps {
  data: any;
}

const Components = ({ data }: ComponentsProps) => {
  const content = { ...data.comoJogar };

  const filterItems = Object.entries(
    (content.components as Record<string, string>) ?? {}
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
        <div className={styles.header}>
          <Image
            width={20}
            height={20}
            src={`/images/icons/star.svg`}
            alt={'Estrela com gradiente azul e lilás'}
          />
          <h3 className={styles.h3}>{content.components.title}</h3>
        </div>
        <div className={styles.content}>
          <Image
            src={content.components.card.src}
            alt={content.components.card.alt}
            width={content.components.card.width}
            height={content.components.card.height}
            className={styles.card}
          />
          <ul className={styles.list}>{items}</ul>
        </div>
      </div>
    </div>
  );
};

export default Components;
