import { FormEvent, JSX } from 'react';

import styles from './form-wrapper.module.css';
import Button from '@/components/ui/button/button';

type FormWrapperProps = {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  submitBtnText?: string;
}

export default function FormWrapper ({ children, onSubmit, submitBtnText = 'Submit' }: FormWrapperProps): React.ReactNode {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // console.log('form submitted!', formData.entries());

    for (const [key, value] of formData) {
      console.log(key, value);
    }

    onSubmit(formData);
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      {children}

      <div className={styles.formWrapperFooter}>
        <Button type="submit" primary>
          {submitBtnText}
        </Button>
      </div>
    </form>
  )
};
