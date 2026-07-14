interface Props {
  title: string;
}

export function SectionTitle({ title }: Props) {
  return (
    <h3 className="mb-4 text-lg font-semibold">
      {title}
    </h3>
  );
}