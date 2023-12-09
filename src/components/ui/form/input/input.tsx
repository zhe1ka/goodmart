import { ChangeEvent, JSX } from 'react';
import styles from './input.module.css';

type InputProps = {
  name: string;
  type?: string;
  onChange: (name: string, value: string) => void;
  value?: string;
}

export default function Input({ name, type = 'text', onChange, value = '' }: InputProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.currentTarget.value);
  };

  return (
    <input
      type={type}
      name={name}
      className={styles.input}
      // onChange={handleChange}
      defaultValue={value}
    />
  )
};
