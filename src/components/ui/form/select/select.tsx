import { ChangeEvent, useState } from 'react';

import RequiredFieldValidator from '@/components/ui/form/required-field-validator/required-field-validator';
import styles from './select.module.css';

type SelectProps = {
  name: string;
  options: {title: string, value: string | number}[];
  defaultValue: string;
  errorMessage?: string;
}

export default function Select({ name, options, defaultValue, errorMessage = '' }: SelectProps): React.ReactNode {
  const [isTouched, setTouched] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!isTouched) {
      setTouched(true);
    }
    setValue(event.currentTarget.value);
  };

  return (
    <div className={styles.wrapperCustomSelect}>
      <select
        name={name}
        className={styles.customSelect}
        onChange={handleChange}
        value={value}
      >
        {
          options.map(({ title, value }) => (
            <option key={value} value={value}>{title}</option>
          ))
        }
      </select>

      {
        isTouched
          ? <RequiredFieldValidator value={value} errorMessage={errorMessage} />
          : null
      }
    </div>
  );
};
