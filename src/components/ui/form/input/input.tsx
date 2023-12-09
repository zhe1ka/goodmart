import { JSX } from 'react';
import styles from './input.module.css';

type InputProps = {
  name: string;
  type?: string;
  value?: string;
}

export default function Input({ name, type = 'text', value = '' }: InputProps): JSX.Element {
  return (
    <input
      type={type}
      name={name}
      className={styles.input}
      defaultValue={value}
    />
  )
};
