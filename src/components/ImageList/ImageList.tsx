'use client';

import React from 'react';
import Image from 'next/image';
import useBreakpoint from '../../hooks/useBreakpoint';
import styles from './ImageList.module.scss';
import { textBold } from '../../utils/textBold';
import { lineBreak } from '../../utils/lineBreak';

interface Steps {
  [key: string]: string;
}

interface ItemWithSteps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  steps: Steps;
}

interface Props {
  data: any;
  section: string;
  color?: string;
  removePadding?: boolean;
  removePaddingContainer?: boolean;
  size?: string;
}

const ImageList = ({
  data,
  section,
  color,
  removePadding = false,
  removePaddingContainer = false,
  size,
}: Props) => {
  const content = { ...data[section] };

  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  const filterItems = Object.entries(content).filter(([key]) =>
    key.startsWith('item')
  );

  const items = filterItems.map(([key, value], idx) => {
    const { title, subtitle, imageSrc, imageAlt, steps } =
      value as ItemWithSteps;
    return (
      <li
        key={key}
        className={styles.item}
      >
        {title ? (
          <>
            <div className={styles.header}>
              <Image
                width={48}
                height={48}
                src={imageSrc}
                alt={imageAlt}
              />
              <div className={styles.details}>
                <h2
                  className={`${styles.h2} ${size === '20' ? styles.size : ''} `}
                >
                  {title}
                </h2>
                <p className={styles.p}>{subtitle}</p>
              </div>
            </div>
            <ul
              className={
                removePadding ? styles['list-without-padding'] : styles.sublist
              }
            >
              {steps &&
                Object.values(steps).map((step, stepIdx) => (
                  <li
                    key={stepIdx}
                    className={styles.sub}
                  >
                    <span className={styles.dot} />
                    <p className={styles.p}>{textBold(lineBreak(step))}</p>
                  </li>
                ))}
            </ul>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <Image
                width={48}
                height={48}
                src={imageSrc}
                alt={imageAlt}
              />

              <ul
                className={
                  removePadding
                    ? styles['list-without-padding']
                    : styles.sublist
                }
              >
                {steps &&
                  Object.values(steps).map((step, stepIdx) => (
                    <li
                      key={stepIdx}
                      className={styles.sub}
                    >
                      <p className={styles.pDesc}>{textBold(lineBreak(step))}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
      </li>
    );
  });

  return (
    <div
      className={`${styles.background} ${color ? styles[color] : ''}`}
      style={isTablet && section === 'goal' ? { width: '100%' } : {}}
    >
      <div
        className={
          removePadding || removePaddingContainer
            ? styles['container-without-padding']
            : styles.container
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

export default ImageList;
