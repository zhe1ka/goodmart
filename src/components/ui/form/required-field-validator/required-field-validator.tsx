import styles from './required-field-validator.module.css';

type RequiredFieldValidatorProps = {
  value: string;
  errorMessage: string;
}

export default function RequiredFieldValidator({ value, errorMessage }: RequiredFieldValidatorProps): React.ReactNode {
  if (value.length !== 0) {
    return null;
  }

  return (
    <div className={styles.requiredFieldValidator}>{errorMessage}</div>
  );
};
