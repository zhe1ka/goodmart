"use client"
import { JSX } from 'react';

import styles from './page.module.css';
import Block from '@/components/ui/block/block';
import FormWrapper from '@/components/ui/form/form-wrapper/form-wrapper';
import FormRow from '@/components/ui/form/form-row/form-row';
import Input from '@/components/ui/form/input/input';
import Select from '@/components/ui/form/select/select';

const stateOptions = [
  { title: 'Alaska, USA', value: 1 },
  { title: 'Alaska 22, USA', value: 2 },
  { title: 'Alaska 33, USA', value: 3 },
]

export default function Home(): JSX.Element {
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
            />
          </FormRow>
          <FormRow>
            <strong>* Street</strong>
            <Input
              name="street"
            />
          </FormRow>
          <FormRow>
            <strong>* City</strong>
            <Input
              name="city"
            />
          </FormRow>
          <FormRow>
            <strong>* State</strong>
            <Select
              name="state"
              options={stateOptions}
            />
          </FormRow>
          <FormRow>
            <strong>* Zip</strong>
            <Input
              name="zip"
            />
          </FormRow>

          <FormRow type="main">
            2. Contact info
          </FormRow>
          <FormRow>
            <strong>* First Name</strong>
            <Input
              name="firstName"
            />
          </FormRow>
          <FormRow>
            <strong>* Last Name</strong>
            <Input
              name="lastName"
            />
          </FormRow>
          <FormRow>
            <strong>Title</strong>
            <Input
              name="title"
            />
          </FormRow>
          <FormRow>
            <strong>* Email Address</strong>
            <Input
              name="email"
            />
          </FormRow>
          <FormRow>
            <strong>* Phone Number</strong>
            <Input
              name="phone"
            />
          </FormRow>
        </FormWrapper>
      </Block>
    </main>
  )
};
