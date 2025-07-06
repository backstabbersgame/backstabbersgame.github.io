'use client';

import React from 'react';
import Image from 'next/image';
import styles from './EndGame.module.scss';

interface Steps {
  [key: string]: string;
}

interface ItemWithSteps {
  title: string;
  steps: Steps;
}

interface EndGameProps {
  data: any;
}

const EndGame = ({ data }: EndGameProps) => {
  const content = { ...data.comoJogar };

  const filterItems = Object.entries(content.endGame).filter(([key]) =>
    key.startsWith('item')
  );

  const items = filterItems.map(([key, value], idx) => {
    if (typeof value === 'string') {
      return (
        <li
          key={key}
          className={styles.item}
        >
          <span className={styles.dot} />
          <p className={styles.p}>{value}</p>
        </li>
      );
    }
    const { title, steps } = value as ItemWithSteps;

    return (
      <>
        <li
          key={key}
          className={styles.item}
        >
          <p className={styles.p}>{title}</p>
        </li>
        {steps && (
          <ul className={styles.subList}>
            {Object.values(steps).map((step, stepIdx) => (
              <li
                key={stepIdx}
                className={styles.sub}
              >
                <span className={styles.dot} />
                <p className={styles.p}>{step}</p>
              </li>
            ))}
          </ul>
        )}
      </>
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
          <h3 className={styles.h3}>{content.endGame.title}</h3>
        </div>
        <ul className={styles.list}>{items}</ul>
      </div>
    </div>
  );
};

export default EndGame;
