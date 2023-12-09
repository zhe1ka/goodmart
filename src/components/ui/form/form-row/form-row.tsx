import styles from './form-row.module.css';

type FormRowProps = {
  children: React.ReactNode;
  type?: 'main' | 'default';
}

export default function FormRow ({ children, type = 'default' }: FormRowProps): React.ReactNode {
  return (
    <div className={styles.formRow}>
      {children}
    </div>
  );
};
