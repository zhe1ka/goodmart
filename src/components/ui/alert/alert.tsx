import styles from './alert.module.css';

export default function Alert({ children, classNames = '' }) {
  let classes = `${styles.alert} ${classNames}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
