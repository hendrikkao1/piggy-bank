interface PageBodyProps extends React.PropsWithChildren {}

export const PageBody = ({ children }: PageBodyProps) => (
  <div className="px-6 pt-14 pb-4">{children}</div>
);
