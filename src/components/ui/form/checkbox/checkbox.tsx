import styles from './checkbox.module.css';

type CheckboxProps = {
  name: string;
}

export default function Checkbox({ name }: CheckboxProps): React.ReactNode {
  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      name={name}
    />
  );
};
