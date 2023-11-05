interface DescriptionListProps {
  items: [string, React.ReactNode][];
}

export const DescriptionList = ({ items }: DescriptionListProps) => (
  <dl className="divide-y divide-zinc-900/20">
    {items.map(([term, description]) => (
      <div key={term} className="py-6 grid grid-cols-2 gap-4">
        <dt className="text-sm font-semibold text-zinc-900 truncate">{term}</dt>
        <dd className="text-sm text-zinc-900 col-span-1 truncate">
          {description}
        </dd>
      </div>
    ))}
  </dl>
);
