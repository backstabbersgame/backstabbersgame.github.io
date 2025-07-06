'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Preparation.module.scss';

interface PreparationProps {
  data: any;
}
const Preparation = ({ data }: PreparationProps) => {
  const content = { ...data.comoJogar };

  const filterItems = Object.entries(
    (content.preparation as Record<string, string>) ?? {}
  ).filter(([key]) => key.startsWith('item'));

  const items = filterItems.map((value: [string, string], idx: number) => (
    <li
      key={idx}
      className={styles.item}
    >
      <p className={styles.number}>{idx + 1}.</p>
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
          <h3 className={styles.h3}>{content.preparation.title}</h3>
        </div>
        <ul className={styles.list}>{items}</ul>
      </div>
    </div>
  );
};

export default Preparation;
