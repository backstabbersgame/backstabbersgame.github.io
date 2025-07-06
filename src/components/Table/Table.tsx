'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Table.module.scss';

interface TableProps {
  data: any;
}

type Item = {
  title: string;
  subtitle: string;
};

const Table = ({ data }: TableProps) => {
  const content = { ...data.comoJogar };

  const filterItems = Object.entries(
    (content.table as Record<string, Item>) ?? {}
  ).filter(([key]) => key.startsWith('item'));

  const items = filterItems.map(([key, value], idx) => {
    const { title, subtitle } = value;
    return (
      <li key={idx}>
        <div className={styles.title}>
          <p className={styles.number}>{idx + 1}.</p>
          <p className={styles.p}>{title}</p>
        </div>
        <p className={styles.sub}>{subtitle}</p>
      </li>
    );
  });
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
          <h3 className={styles.h3}>{content.table.title}</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.cards}>
            <Image
              width={content.table.card1.width}
              height={content.table.card1.height}
              src={content.table.card1.src}
              alt={content.table.card1.alt}
              className={styles.img}
            />
            <Image
              width={content.table.card2.width}
              height={content.table.card2.height}
              src={content.table.card2.src}
              alt={content.table.card2.alt}
              className={styles.imgV}
            />
            <Image
              width={content.table.card3.width}
              height={content.table.card3.height}
              src={content.table.card3.src}
              alt={content.table.card3.alt}
              className={styles.imgV}
            />
          </div>
          <ul className={styles.list}>{items}</ul>
        </div>
      </div>
    </div>
  );
};

export default Table;
