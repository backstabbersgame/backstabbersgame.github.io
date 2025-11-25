'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Field.module.scss';

interface FieldProps {
  data: any;
}

type Item = {
  title: string;
  subtitle: string;
};

const Field = ({ data }: FieldProps) => {
  const content = { ...data };

  const filterItems = Object.entries(
    (content.field as Record<string, Item>) ?? {}
  ).filter(([key]) => key.startsWith('item'));

  let count = 3;

  const items = filterItems.map(([key, value], idx) => {
    const { title, subtitle } = value;

    return (
      <li key={idx}>
        <div className={styles.title}>
          <p className={styles.number}>{(count += 1)}.</p>
          <p className={styles.p}>{title}</p>
        </div>
        <p className={styles.sub}>{subtitle}</p>
      </li>
    );
  });

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h4 className={styles.h4}>{content.field.title}</h4>
            <p className={styles.p4}>{content.field.subtitle}</p>
          </div>
          <ul className={styles.list}>{items}</ul>
        </div>

        <div className={styles.cards}>
          <Image
            width={content.field.card4.width}
            height={content.field.card4.height}
            src={content.field.card4.src}
            alt={content.field.card4.alt}
            className={styles.img}
          />
          <Image
            width={content.field.card5.width}
            height={content.field.card5.height}
            src={content.field.card5.src}
            alt={content.field.card5.alt}
            className={styles.imgV}
          />
          <Image
            width={content.field.card6.width}
            height={content.field.card6.height}
            src={content.field.card6.src}
            alt={content.field.card6.alt}
            className={styles.img2}
          />
        </div>
      </div>
    </div>
  );
};

export default Field;
