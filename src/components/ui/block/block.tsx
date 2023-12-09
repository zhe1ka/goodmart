import styles from './block.module.css';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
}

export default function Block ({ title, children }: LayoutProps): React.ReactNode {
  return (
    <div className={styles.block}>
      <div className={styles.block__header}>{title}</div>
      <div className={styles.block__content}>
        {children}
      </div>
    </div>
  )
};
