"use client"
import styles from './page.module.css';
import Block from '@/components/ui/block/block';
import FormWrapper from '@/components/ui/form/form-wrapper/form-wrapper';
import FormRow from '@/components/ui/form/form-row/form-row';

export default function Home() {
  return (
    <main className={styles.main}>
      <Block title="Add New Manifacturer">
        <FormWrapper >
          <FormRow type="main">
            1. Manifacturer information
          </FormRow>


        </FormWrapper>
      </Block>
    </main>
  )
}
