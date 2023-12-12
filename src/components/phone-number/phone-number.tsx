import { useEffect, useState } from 'react';

import RequiredFieldValidator from '@/components/ui/form/required-field-validator/required-field-validator';
import RegularExpressionValidator from '@/components/ui/form/regular-expression-validator/regular-expression-validator';
import Input from '@/components/ui/form/input/input';
import { PhoneInputs } from '@/app/page';

import { regExp3Digits, regExp4Digits } from '@/lib/constants';

import styles from './phone-number.module.css';

type PhoneNumberProps = {
  hasExt?: boolean;
  checkValidation?: boolean;
}

export default function PhoneNumber({ hasExt = false, checkValidation = false }: PhoneNumberProps) {
  const [phoneArea, setPhoneArea] = useState('');
  const [phonePartOne, setPhonePartOne] = useState('');
  const [phonePartTwo, setPhonePartTwo] = useState('');
  const [isTouchedPhoneArea, setTouchedPhoneArea] = useState(false);
  const [isTouchedPhonePartOne, setTouchedPhonePartOne] = useState(false);
  const [isTouchedPhonePartTwo, setTouchedPhonePartTwo] = useState(false);

  useEffect(() => {
    setTouchedPhoneArea(checkValidation)
    setTouchedPhonePartOne(checkValidation)
    setTouchedPhonePartTwo(checkValidation)
  }, [checkValidation]);

  return (
    <div className={styles.phoneNumber}>
      <div className={styles.space}>
        <span className={styles.symbol}>(</span>
        <Input
          classNames={styles.phoneNumberCode}
          name={PhoneInputs.phoneNumberCode}
          maxLength={3}
          onChange={(value: string) => {
            setPhoneArea(value); !isTouchedPhoneArea && setTouchedPhoneArea(true);
          }}
        />
        <span className={styles.symbol}>)</span>
        <Input
          classNames={styles.phoneNumberFirstPart}
          name={PhoneInputs.phoneNumberFirstPart}
          maxLength={3}
          onChange={(value: string) => {
            setPhonePartOne(value); !isTouchedPhonePartOne && setTouchedPhonePartOne(true);
          }}
        />
        <span className={styles.symbol}>-</span>
        <Input
          classNames={styles.phoneNumberSecondPart}
          name={PhoneInputs.phoneNumberSecondPart}
          maxLength={4}
          onChange={(value: string) => {
            setPhonePartTwo(value); !isTouchedPhonePartTwo && setTouchedPhonePartTwo(true);
          }}
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
      {
        isTouchedPhoneArea
          ? <>
            <RequiredFieldValidator
              value={phoneArea}
              errorMessage="Area code cannot be empty"
            />
            <RegularExpressionValidator
              value={phoneArea}
              validationExpression={regExp3Digits}
              validationErrorMessage="Phone Number: area code must be 3 numeric digits"
            />
          </>
          : null
      }
      {
        isTouchedPhonePartOne
          ? <>
            <RequiredFieldValidator
              value={phonePartOne}
              errorMessage="Phone Number: part 1  cannot be empty"
            />
            <RegularExpressionValidator
              value={phonePartOne}
              validationExpression={regExp3Digits}
              validationErrorMessage="Phone Number: part 1 must be 3 numeric digits"
            />
          </>
          : null
      }
      {
        isTouchedPhonePartTwo
          ? <>
            <RequiredFieldValidator
              value={phonePartTwo}
              errorMessage="Phone Number: part 2  cannot be empty"
            />
            <RegularExpressionValidator
              value={phonePartTwo}
              validationExpression={regExp4Digits}
              validationErrorMessage="Phone Number: part 2 must be 4 numeric digits"
            />
          </>
          : null
      }
    </div>
  )
}
