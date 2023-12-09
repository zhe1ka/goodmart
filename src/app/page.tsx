"use client"
import styles from './page.module.css';
import Block from '@/components/ui/block/block';
import FormWrapper from '@/components/ui/form/form-wrapper/form-wrapper';
import FormRow from '@/components/ui/form/form-row/form-row';
import Input from '@/components/ui/form/input/input';

export default function Home() {
  const handleInput = (name: string, value: string): void => {
    console.log('===', name, value);
  };

  return (
    <main className={styles.main}>
      <Block title="Add New Manifacturer">
        <FormWrapper >
          <FormRow type="main">
            1. Manifacturer information
          </FormRow>
          <FormRow>
            <strong>* Manifacturer Company Name</strong>
            <Input
              name="testName"
              onChange={handleInput}
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
              name="testName"
              onChange={handleInput}
            />
          </FormRow>

        </FormWrapper>
      </Block>
    </main>
  )
};
