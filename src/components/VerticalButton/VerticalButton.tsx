import React from 'react';
import styles from './VerticalButton.module.scss';
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr';

const VerticalButton = () => {
  return (
    <button className={styles.btn}>
      <CaretRightIcon size={24} />
    </button>
  );
};

export default VerticalButton;
