import { ChangeEvent, useEffect, useState } from 'react';

import RequiredFieldValidator from '@/components/ui/form/required-field-validator/required-field-validator';
import styles from './input.module.css';
import RegularExpressionValidator from '@/components/ui/form/regular-expression-validator/regular-expression-validator';

type InputProps = {
  classNames?: string;
  name: string;
  type?: string;
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
  value: defaultValue = '',
  maxLength = 0,
  checkValidation = false,
  requiredErrorMessage,
  validationExpression,
  validationErrorMessage,
}: InputProps): React.ReactNode {
  const [value, setValue] = useState(defaultValue);
  const [isTouched, setTouched] = useState(false);
  let classes = styles.input;

  useEffect(() => {
    setTouched(checkValidation);
  }, [checkValidation]);

  if (classNames) {
    classes += ` ${classNames}`;
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isTouched) {
      setTouched(true);
    }

    setValue(event.currentTarget.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        name={name}
        className={classes}
        onChange={handleChange}
        value={value}
        maxLength={maxLength || undefined}
        data-istouched={isTouched}
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
