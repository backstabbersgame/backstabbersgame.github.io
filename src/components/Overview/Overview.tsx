'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Overview.module.scss';
import useBreakpoint from '../../hooks/useBreakpoint';
import {
  ClockIcon,
  UserIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react/dist/ssr';

interface OverviewProps {
  data: any;
}

const Overview = ({ data }: OverviewProps) => {
  const content = { ...data };
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            width={isMobile ? 20 : 32}
            height={isMobile ? 20 : 32}
            src={`/images/icons/star.svg`}
            alt={'Estrela com gradiente azul e lilás'}
          />
          <h2 className={styles.h2}>{content.overview.title}</h2>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <UsersThreeIcon
              size={20}
              className={styles.icon}
            />
            <p className={styles.p}>{content.overview.item1}</p>
          </li>
          <li className={styles.item}>
            <UserIcon
              size={20}
              className={styles.icon}
            />
            <p className={styles.p}>{content.overview.item2}</p>
          </li>
          <li className={styles.item}>
            <ClockIcon
              size={20}
              className={styles.icon}
            />
            <p className={styles.p}>{content.overview.item3}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
