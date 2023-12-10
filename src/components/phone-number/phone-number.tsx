import Input from '@/components/ui/form/input/input';
import { PhoneInputs } from '@/app/page';
import styles from './phone-number.module.css';

const regExp3Digits = /^\d{3}$/
const regExp4Digits = /^\d{4}$/

type PhoneNumberProps = {
  hasExt?: boolean;
  checkValidation?: boolean;
}

export default function PhoneNumber({ hasExt = false, checkValidation = false }: PhoneNumberProps) {
  console.log('== checkValidation ==', checkValidation);
  return (
    <div className={styles.phoneNumber}>
      <div className={styles.space}>
        <span className={styles.symbol}>(</span>
        <Input
          classNames={styles.phoneNumberCode}
          name={PhoneInputs.phoneNumberCode}
          maxLength={3}
          requiredErrorMessage="Area code cannot be empty"
          validationErrorMessage="Area code must be 3 numeric digits"
          validationExpression={regExp3Digits}
          checkValidation={checkValidation}
        />
        <span className={styles.symbol}>)</span>
        <Input
          classNames={styles.phoneNumberFirstPart}
          name={PhoneInputs.phoneNumberFirstPart}
          maxLength={3}
          requiredErrorMessage="Cannot be empty"
          validationErrorMessage="Must be 3 numeric digits"
          validationExpression={regExp3Digits}
          checkValidation={checkValidation}
        />
        <span className={styles.symbol}>-</span>
        <Input
          classNames={styles.phoneNumberSecondPart}
          name={PhoneInputs.phoneNumberSecondPart}
          maxLength={4}
          requiredErrorMessage="Cannot be empty"
          validationErrorMessage="Must be 4 numeric digits"
          validationExpression={regExp4Digits}
          checkValidation={checkValidation}
        />
      </div>
      {
        hasExt
          ? (
            <div>
              <span className={styles.symbol}>ext:</span>
              <Input classNames={styles.phoneNumberSecondPart} name={PhoneInputs.phoneNumberExt} />
            </div>
          )
          : null
      }
    </div>
  )
}
