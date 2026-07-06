type SectionHeaderProps = {
  title: string;
  children: React.ReactNode;
};

export function SectionHeader({ title, children }: SectionHeaderProps) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
