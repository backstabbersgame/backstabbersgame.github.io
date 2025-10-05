'use client';

import React from 'react';
import Image from 'next/image';
import useBreakpoint from '../../hooks/useBreakpoint';
import styles from './BulletedList.module.scss';
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
  section?: string;
  color?: string;
  removePadding?: boolean;
  size?: string;
  starSize?: number;
}

const BulletedList = ({
  data,
  section,
  color,
  removePadding = false,
  size,
  starSize,
}: Props) => {
  const content = section && { ...data[section] };
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  const filterItems = Object.entries(content).filter(([key]) =>
    key.startsWith('item')
  );

  const hasChildren = filterItems.some(([, value]) => {
    if (
      value &&
      typeof value === 'object' &&
      'steps' in value &&
      value.steps &&
      typeof value.steps === 'object' &&
      Object.keys(value.steps).length > 0
    ) {
      return true;
    }
    return false;
  });

  const items = filterItems.map(([key, value], idx) => {
    if (typeof value === 'string') {
      return (
        <li
          key={key}
          className={styles.item}
        >
          {!hasChildren && <span className={styles.dot} />}
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
          <p className={styles.p}>{textBold(title)}</p>
        </li>
        {steps && (
          <ul className={styles.subList}>
            {Object.values(steps).map((step, stepIdx) => (
              <li
                key={stepIdx}
                className={styles.sub}
              >
                <span className={styles.dot} />
                <p className={styles.p}>{textBold(step)}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  });

  return (
    <div
      className={`${styles.background} ${color ? styles[color] : ''}`}
      style={isTablet && section === 'goal' ? { width: '100%' } : {}}
    >
      <div
        className={
          removePadding ? styles['container-without-padding'] : styles.container
        }
        style={
          isMobile
            ? { width: '88vw' }
            : isTablet
              ? section === 'goal'
                ? { width: '100%' }
                : { width: '88vw' }
              : { width: '100%' }
        }
      >
        <div className={styles.header}>
          <Image
            width={isMobile ? 20 : starSize === 20 ? 20 : 32}
            height={isMobile ? 20 : starSize === 20 ? 20 : 32}
            src={`/images/icons/star.svg`}
            alt={'Estrela com gradiente azul e lilás'}
          />
          <h2 className={`${styles.h2} ${size === '20' ? styles.size : ''} `}>
            {content.title}
          </h2>
        </div>
        <ul
          className={
            removePadding ? styles['list-without-padding'] : styles.list
          }
        >
          {items}
        </ul>
      </div>
    </div>
  );
};

export default BulletedList;
