"use client"
import styles from './page.module.css';
import Block from '@/components/ui/block/block';
import FormWrapper from '@/components/ui/form/form-wrapper/form-wrapper';
import FormRow from '@/components/ui/form/form-row/form-row';
import Input from '@/components/ui/form/input/input';
import Select from '@/components/ui/form/select/select';
import Alert from '@/components/ui/alert/alert';
import Checkbox from '@/components/ui/form/checkbox/checkbox';
import PhoneNumber from '@/components/phone-number/phone-number';

const stateOptions = [
  { title: '', value: '' },
  { title: 'Alaska, USA', value: '1' },
  { title: 'Alaska 22, USA', value: '2' },
  { title: 'Alaska 33, USA', value: '3' },
]

export default function Home(): React.ReactNode {
  const handleForm = (data) => {
    console.log('== data ==', data);
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
              name="companyName"
              maxLength={100}
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
              name="symbol"
              maxLength={3}
              requiredErrorMessage="Symbol cannot be empty"
              validationExpression={/[A-Z]+/}
              validationErrorMessage="Only letters are accepted in Symbol"
            />
          </FormRow>
          <FormRow>
            <strong>* Street</strong>
            <Input
              name="street"
              maxLength={80}
              requiredErrorMessage="Street cannot be empty"
            />
          </FormRow>
          <FormRow>
            <strong>* City</strong>
            <Input
              name="city"
              maxLength={80}
              requiredErrorMessage="City cannot be empty"
            />
          </FormRow>
          <FormRow>
            <strong>* State</strong>
            <Select
              name="state"
              options={stateOptions}
              defaultValue=""
              errorMessage="Must select a State"
            />
          </FormRow>
          <FormRow>
            <strong>* Zip</strong>
            <Input
              name="zip"
              maxLength={10}
              requiredErrorMessage="Zip cannot be empty"
            />
          </FormRow>

          <FormRow type="main">
            2. Contact info
          </FormRow>
          <FormRow>
            <strong>* First Name</strong>
            <Input
              name="firstName"
              maxLength={50}
              requiredErrorMessage="First Name cannot be empty"
            />
          </FormRow>
          <FormRow>
            <strong>* Last Name</strong>
            <Input
              name="lastName"
              maxLength={50}
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
              name="email"
              requiredErrorMessage="Email cannot be empty"
              validationExpression={/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/}
              validationErrorMessage="Must follow email@host.domain"
            />
          </FormRow>
          <FormRow>
            <strong>* Phone Number</strong>

            <PhoneNumber hasExt />
          </FormRow>

          <Alert classNames="mt-25">
            <div className="mb-15">
              Manufacturers and vendors are not always the same entity. For example, Lightolier is the name of a brand
              of light fixtures, and we might consider Lightolier to be the name of the manufacturer in that case. The
              vendor associated with Lightolier would be Signify, which is the company that owns the Lightolier brand.
              In other cases, the names of the vendor and manufacturer are the same. If the name of the manufacturer is
              the same as the name of the vendor, then select this box:
            </div>
            <div className="space-between">
              <strong>Vendor name is the same as the manufacturer name?</strong>
              <label>
                <Checkbox name="confirm" />
                Yes
              </label>
              <span />
            </div>
          </Alert>
        </FormWrapper>
      </Block>
    </main>
  )
};
