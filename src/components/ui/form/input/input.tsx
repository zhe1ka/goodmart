import styles from './input.module.css';

type InputProps = {
  classNames?: string;
  name: string;
  type?: string;
  value?: string;
}

export default function Input({ classNames, name, type = 'text', value = '' }: InputProps): React.ReactNode {
  let classes = styles.input;

  if (classNames) {
    classes += ` ${classNames}`;
  }

  return (
    <input
      type={type}
      name={name}
      className={classes}
      defaultValue={value}
    />
  )
};
