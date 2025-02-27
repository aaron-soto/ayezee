export const PageHeader = ({ title }: { title: string }) => {
  return (
    <header>
      <h1 className="text-5xl font-bold">{title}</h1>
    </header>
  );
};
