import { FormEvent } from 'react';
import styles from './form-wrapper.module.css';

type FormWrapperProps = {
  children: React.ReactNode;
  submitBtnText?: string;
}

export default function FormWrapper ({ children, submitBtnText = 'Submit' }: FormWrapperProps): React.ReactNode {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)

    // console.log('form submitted!', formData.entries());

    for (const [key, value] of formData) {
      console.log(key, value);
    }
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
