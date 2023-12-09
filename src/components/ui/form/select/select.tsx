import { JSX } from 'react';
import styles from './select.module.css';

export default function Select(): JSX.Element {
  return (
    <div className={styles.wrapperCustomSelect}>
      <select className={styles.customSelect}>
        <option value="">Open this select menu</option>
        <option value="">GitHub</option>
        <option value="">Instagram</option>
        <option value="">Facebook</option>
        <option value="">LinkedIn</option>
        <option value="">Twitter</option>
        <option value="">Reddit</option>
      </select>
    </div>
  );
};
