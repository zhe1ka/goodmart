import { JSX } from 'react';
import styles from './block.module.css';

type BlockProps = {
  title: string;
  children: JSX.Element;
}

export default function Block ({ title, children }: BlockProps): JSX.Element {
  return (
    <div className={styles.block}>
      <div className={styles.block__header}>{title}</div>
      <div className={styles.block__content}>
        {children}
      </div>
    </div>
  )
};
