"use client"
import { useState } from 'react';

import Block from '@/components/ui/block/block';
import FormWrapper from '@/components/ui/form/form-wrapper/form-wrapper';
import FormRow from '@/components/ui/form/form-row/form-row';
import Input from '@/components/ui/form/input/input';
import Select from '@/components/ui/form/select/select';
import Alert from '@/components/ui/alert/alert';
import Checkbox from '@/components/ui/form/checkbox/checkbox';
import PhoneNumber from '@/components/phone-number/phone-number';

import { emailRegExp, regExp3Digits, regExp4Digits, symbolRegExp } from '@/lib/constants';

import styles from './page.module.css';

const stateOptions = [
  { title: '', value: '' },
  { title: 'Alaska, USA', value: '1' },
  { title: 'Alaska 22, USA', value: '2' },
  { title: 'Alaska 33, USA', value: '3' },
];

enum ValidatePlainInputs {
  companyName = 'companyName',
  symbol = 'symbol',
  street = 'street',
  city = 'city',
  state = 'state',
  zip = 'zip',
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
}

enum ValidateEmailInputs {
  email = 'email',
  specialEmail = 'specialEmail',
}

export enum PhoneInputs {
  phoneNumberCode = 'phoneNumberCode',
  phoneNumberFirstPart = 'phoneNumberFirstPart',
  phoneNumberSecondPart = 'phoneNumberSecondPart',
  phoneNumberExt = 'phoneNumberExt',
}

type FormDataType = {
  companyName: string;
  symbol: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  firstName: string;
  lastName: string;
  title?: string;
  email: string;
  phoneNumber: string;
  confirm: string;
}

export default function Home(): React.ReactNode {
  const [checkValidation, setCheckValidation] = useState(false);
  const [isVisibleSpecialEmail, setVisibleSpecialEmail] = useState(false);
  const handleForm = (formData: FormData) => {
    setCheckValidation(true);

    const data: FormDataType = {
      companyName: '',
      symbol: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      confirm: 'off',
    };

    for (const [key, value] of formData) {
      if (key in ValidatePlainInputs) {
        if (value.length === 0) {
          return;
        }
      }

      if (key in ValidateEmailInputs) {
        if (!emailRegExp.test(value)) {
          return;
        }
      }

      if (key === ValidatePlainInputs.symbol) {
        if (!symbolRegExp.test(value)) {
          return;
        }
      }

      if (key in PhoneInputs) {
        if (key === PhoneInputs.phoneNumberExt) {
          data.phoneNumber = value + data.phoneNumber;
        } else {
          if (key === PhoneInputs.phoneNumberCode || key === PhoneInputs.phoneNumberFirstPart) {
            if (!regExp3Digits.test(value)) {
              return;
            }
          }

          if (key === PhoneInputs.phoneNumberExt) {
            if (!regExp4Digits.test(value)) {
              return;
            }
          }

          data.phoneNumber += value
        }
      } else {
        data[key] = value;
      }
    }

    // send "data"
    console.log('=== data ===', data);
  };

  return (
    <main className={styles.main}>
      <Block title="Add New Manifacturer">
        <FormWrapper onSubmit={handleForm}>
          <FormRow type="main">
            1. Manifacturer information
          </FormRow>
          <FormRow>
            <strong>* Manifacturer Company Name</strong>
            <Input
              name={ValidatePlainInputs.companyName}
              maxLength={100}
              checkValidation={checkValidation}
              requiredErrorMessage="Company Name cannot be empty"
            />
          </FormRow>
          <FormRow>
            <div>
              <strong>* Manifacturer Symbol</strong>
              <div>
                (Used in vendor PO# in full version of Jumper. 3 UPPER case letters maximum except the letter I and O)
              </div>
            </div>
            <Input
              name={ValidatePlainInputs.symbol}
              maxLength={3}
              checkValidation={checkValidation}
              requiredErrorMessage="Symbol cannot be empty"
              validationExpression={symbolRegExp}
              validationErrorMessage="Only letters are accepted in Symbol"
            />
          </FormRow>
          <FormRow>
            <strong>* Street</strong>
            <Input
              name={ValidatePlainInputs.street}
              maxLength={80}
              checkValidation={checkValidation}
              requiredErrorMessage="Street cannot be empty"
            />
          </FormRow>
          <FormRow>
            <strong>* City</strong>
            <Input
              name={ValidatePlainInputs.city}
              maxLength={80}
              checkValidation={checkValidation}
              requiredErrorMessage="City cannot be empty"
            />
          </FormRow>
          <FormRow>
            <strong>* State</strong>
            <Select
              name={ValidatePlainInputs.state}
              options={stateOptions}
              defaultValue=""
              checkValidation={checkValidation}
              errorMessage="Must select a State"
            />
          </FormRow>
          <FormRow>
            <strong>* Zip</strong>
            <Input
              name={ValidatePlainInputs.zip}
              maxLength={10}
              checkValidation={checkValidation}
              requiredErrorMessage="Zip cannot be empty"
            />
          </FormRow>
          <FormRow type="main">
            2. Contact info
          </FormRow>
          <FormRow>
            <strong>* First Name</strong>
            <Input
              name={ValidatePlainInputs.firstName}
              maxLength={50}
              checkValidation={checkValidation}
              requiredErrorMessage="First Name cannot be empty"
            />
          </FormRow>
          <FormRow>
            <strong>* Last Name</strong>
            <Input
              name={ValidatePlainInputs.lastName}
              maxLength={50}
              checkValidation={checkValidation}
              requiredErrorMessage="Last Name cannot be empty"
            />
          </FormRow>
          <FormRow>
            <strong>Title</strong>
            <Input
              name="title"
              maxLength={50}
            />
          </FormRow>
          <FormRow>
            <strong>* Email Address</strong>
            <Input
              name={ValidateEmailInputs.email}
              maxLength={80}
              checkValidation={checkValidation}
              requiredErrorMessage="Email cannot be empty"
              validationExpression={emailRegExp}
              validationErrorMessage="Must follow email@host.domain"
            />
          </FormRow>
          <FormRow>
            <strong>* Phone Number</strong>
            <PhoneNumber
              hasExt
              checkValidation={checkValidation}
            />
          </FormRow>
          <Alert classNames="mt-25">
            <p className="mb-15">
              Manufacturers and vendors are not always the same entity. For example, Lightolier is the name of a brand
              of light fixtures, and we might consider Lightolier to be the name of the manufacturer in that case. The
              vendor associated with Lightolier would be Signify, which is the company that owns the Lightolier brand.
              In other cases, the names of the vendor and manufacturer are the same. If the name of the manufacturer is
              the same as the name of the vendor, then select this box:
            </p>
            <div className="space-between">
              <strong>Vendor name is the same as the manufacturer name?</strong>
              <label>
                <Checkbox name="confirm" />
                Yes
              </label>
              <span />
            </div>
            {
              isVisibleSpecialEmail
                ? <>
                  <p className="mt-25 mb-15">
                    If you email purchase orders for this vendor to a rep agency instead of to the vendor company directly,
                    then enter the email address you would send POs to here:
                  </p>
                  <Input
                    name={ValidateEmailInputs.specialEmail}
                    maxLength={80}
                    checkValidation={checkValidation}
                    validationExpression={emailRegExp}
                    validationErrorMessage="Special Email is not valid"
                  />
                </>
                : null
            }
          </Alert>
        </FormWrapper>
      </Block>
    </main>
  );
};
