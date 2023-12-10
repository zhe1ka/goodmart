import styles from './regular-expression-validator.module.css';

type RequiredExpressionValidatorProps = {
  value: string;
  validationExpression: RegExp;
  validationErrorMessage: string;
}

export default function RegularExpressionValidator(
  { value, validationExpression, validationErrorMessage }: RequiredExpressionValidatorProps
): React.ReactNode {
  if (validationExpression.test(value)) {
    return null;
  }

  return (
    <div className={styles.regularExpressionValidator}>
      {validationErrorMessage}
    </div>
  );
};
