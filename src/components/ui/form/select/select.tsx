import { JSX } from 'react';
import styles from './select.module.css';

type SelectProps = {
  name: string;
  options: {title: string, value: string | number}[];
}

export default function Select({ name, options }: SelectProps): JSX.Element {
  return (
    <div className={styles.wrapperCustomSelect}>
      <select
        name={name}
        className={styles.customSelect}
      >
        {
          options.map(({ title, value }) => (
            <option key={value} value={value}>{title}</option>
          ))
        }
      </select>
    </div>
  );
};
