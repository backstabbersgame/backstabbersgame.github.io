'use client';

import React from 'react';
import styles from './BackButton.module.scss';
import { ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr';

const BackButton = ({...props}) => {
  return (
    <button
      className={styles.backButton}
      {...props}
    >
      <ArrowLeftIcon
        size={24}
        className={styles.arrow}
      />
    </button>
  );
};

export default BackButton;
