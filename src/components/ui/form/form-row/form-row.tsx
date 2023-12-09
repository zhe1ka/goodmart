import { JSX } from 'react';
import styles from './form-row.module.css';

enum Types {
  default = 'default',
  main = 'main',
}

type FormRowProps = {
  children: React.ReactNode;
  type?: keyof typeof Types;
}

export default function FormRow({ children, type = Types.default }: FormRowProps): JSX.Element {
  let classes = styles.formRow;

  if (type === Types.main) {
    classes += ` ${styles['formRow--main']}`;
  }

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
