'use client';

import React from 'react';
import Image from 'next/image';
import useBreakpoint from '../../hooks/useBreakpoint';
import styles from './MixedList.module.scss';
import { textBold } from '../../utils/textBold';

interface Steps {
  [key: string]: string;
}

interface ItemWithSteps {
  title: string;
  steps: Steps;
}

interface Props {
  data: any;
  section: string;
  color: string;
}

const MixedList = ({ data, section, color }: Props) => {
  const content = { ...data[section] };
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  const filterItems = Object.entries(content).filter(([key]) =>
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
          <p className={styles.p}>{textBold(value)}</p>
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
          <p className={styles.p}>{textBold(title)}</p>
        </li>
        {steps && (
          <ul className={styles.subList}>
            {Object.values(steps).map((step, stepIdx) => (
              <li
                key={stepIdx}
                className={styles.sub}
              >
                <p className={styles.p}>{textBold(step)}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  });

  return (
    <div className={`${styles.background} ${styles[color]}`}>
      <div
        className={styles.container}
        style={
          isMobile || isTablet
            ? section === 'goal'
              ? { width: 'auto' }
              : { width: '88vw' }
            : { width: 'auto' }
        }
      >
        <div className={styles.header}>
          <Image
            width={isMobile ? 20 : 32}
            height={isMobile ? 20 : 32}
            src={`/images/icons/star.svg`}
            alt={'Estrela com gradiente azul e lilás'}
          />
          <h2 className={styles.h2}>{content.title}</h2>
        </div>
        <ul className={styles.list}>{items}</ul>
      </div>
    </div>
  );
};

export default MixedList;
