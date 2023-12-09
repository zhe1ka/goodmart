import styles from './button.module.css';

type ButtonProps = {
  children: string;
  type: 'button' | 'submit' | 'reset';
  primary: boolean;
}

export default function Button({ children, type = 'button', primary = false }: ButtonProps): React.ReactNode {
  let classes = styles.button;

  if (primary) {
    classes += ` ${styles.buttonPrimary}`;
  }

  return (
    <button
      type={type}
      className={classes}
    >
      {children}
    </button>
  )
};
