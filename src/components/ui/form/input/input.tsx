import { ChangeEvent, useEffect, useState } from 'react';

import RequiredFieldValidator from '@/components/ui/form/required-field-validator/required-field-validator';
import styles from './input.module.css';
import RegularExpressionValidator from '@/components/ui/form/regular-expression-validator/regular-expression-validator';

type InputProps = {
  classNames?: string;
  name: string;
  type?: string;
  onChange?: (value: string) => void;
  value?: string;
  maxLength?: number;
  checkValidation?: boolean;
  requiredErrorMessage?: string;
  validationExpression?: RegExp;
  validationErrorMessage?: string;
}

export default function Input({
  classNames,
  name,
  type = 'text',
  onChange,
  value: defaultValue = '',
  maxLength = 0,
  checkValidation = false,
  requiredErrorMessage,
  validationExpression,
  validationErrorMessage,
}: InputProps): React.ReactNode {
  const [value, setValue] = useState(defaultValue);
  const [isTouched, setTouched] = useState(false);
  let classes = styles.inputWrapper;

  useEffect(() => {
    setTouched(checkValidation);
  }, [checkValidation]);

  if (classNames) {
    classes += ` ${classNames}`;
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setValue(value);
    onChange && onChange(value);
  };

  return (
    <div className={classes}>
      <input
        type={type}
        name={name}
        className={styles.input}
        onBlur={() => setTouched(true)}
        onChange={handleChange}
        value={value}
        maxLength={maxLength || undefined}
      />
      {
        requiredErrorMessage && isTouched
          ? <RequiredFieldValidator
            value={value}
            errorMessage={requiredErrorMessage}
          />
          : null
      }
      {
        validationExpression && validationErrorMessage && isTouched
          ? <RegularExpressionValidator
            value={value}
            validationExpression={validationExpression}
            validationErrorMessage={validationErrorMessage}
          />
          : null
      }
    </div>
  )
};
