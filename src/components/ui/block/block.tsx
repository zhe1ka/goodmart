import styles from './block.module.css';

type BlockProps = {
  title: string;
  children: React.ReactNode;
}

export default function Block ({ title, children }: BlockProps): React.ReactNode {
  return (
    <div className={styles.block}>
      <div className={styles.block__header}>{title}</div>
      <div className={styles.block__content}>
        {children}
      </div>
    </div>
  )
};
