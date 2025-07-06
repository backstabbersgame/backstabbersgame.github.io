'use client';
import React from 'react';
import Image from 'next/image';
import styles from './GeneralRules.module.scss';

interface Steps {
  [key: string]: string;
}

interface ItemWithSteps {
  title: string;
  steps: Steps;
}

interface GeneralRulesProps {
  data: any;
}

const GeneralRules = ({ data }: GeneralRulesProps) => {
  const content = { ...data.comoJogar };

  const filterItems = Object.entries(content.generalRules).filter(([key]) =>
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
          <span className={styles.dot} />
          <p className={styles.p}>{title}</p>
        </li>
        {steps && (
          <ul className={styles.subList}>
            {Object.values(steps).map((step, stepIdx) => (
              <li
                key={stepIdx}
                className={styles.sub}
              >
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
          <h3 className={styles.h3}>{content.generalRules.title}</h3>
        </div>
        <ul className={styles.list}>{items}</ul>
      </div>
    </div>
  );
};

export default GeneralRules;
