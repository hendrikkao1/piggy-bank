interface StackedListItemProps {
  description: React.ReactNode;
  meta: React.ReactNode;
  subTitle: React.ReactNode;
  title: React.ReactNode;
}

export const StackedListItem = ({
  description,
  meta,
  subTitle,
  title,
}: StackedListItemProps) => (
  <section className="flex justify-between gap-x-4 py-6">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex flex-col gap-1">
        <p className="text-sm font-semibold text-zinc-900">{title}</p>
        <p className="text-xs truncate text-zinc-600">{description}</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="shrink-0 flex flex-col items-end gap-1">
        <p className="text-sm text-zinc-900">{subTitle}</p>
        <p className="text-xs text-zinc-600">{meta}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="w-6 h-6 text-zinc-900"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  </section>
);
