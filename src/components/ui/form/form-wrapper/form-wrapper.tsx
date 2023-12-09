import { FormEvent } from 'react';
import styles from './form-wrapper.module.css';

type FormWrapperProps = {
  children: React.ReactNode;
  submitBtnText?: string;
}

export default function FormWrapper ({ children, submitBtnText = 'Submit' }: FormWrapperProps): React.ReactNode {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('form submitted!');
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      {children}
      <button type="submit">
        {submitBtnText}
      </button>
    </form>
  )
};
