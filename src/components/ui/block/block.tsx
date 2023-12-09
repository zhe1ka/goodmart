type LayoutProps = {
  title: string;
  children: React.ReactNode;
}

export default function Block ({ title, children }: LayoutProps): React.ReactNode {
  return (
    <div>
      <div>{title}</div>
      <div>
        {children}
      </div>
    </div>
  )
};
