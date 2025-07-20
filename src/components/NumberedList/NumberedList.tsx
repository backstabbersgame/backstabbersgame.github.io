'use client';

import React from 'react';
import Image from 'next/image';
import useBreakpoint from '../../hooks/useBreakpoint';
import styles from './NumberedList.module.scss';
import { textBold } from '../../utils/textBold';

interface Props {
  data: any;
  section: string;
  color: string;
}

const NumberedList = ({ data, section, color }: Props) => {
  const content = { ...data[section] };
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
      <p className={styles.number}>{idx + 1}.</p>
      <p className={styles.p}>{textBold(value[1])}</p>
    </li>
  ));
  return (
    <div className={`${styles.background} ${styles[color]}`}>
      <div className={styles.container}>
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

export default NumberedList;
