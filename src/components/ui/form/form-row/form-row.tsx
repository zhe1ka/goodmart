import styles from './form-row.module.css';

enum Types {
  default = 'default',
  main = 'main',
}

type FormRowProps = {
  children: React.ReactNode;
  type?: keyof typeof Types;
}

export default function FormRow({ children, type = Types.default }: FormRowProps): React.ReactNode {
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
