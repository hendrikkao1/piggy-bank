interface PageHeaderProps extends React.PropsWithChildren {
  heading: string;
}

export const PageHeader = ({ children, heading }: PageHeaderProps) => (
  <div className="fixed inset-x-0 top-0 z-0 h-14 flex px-6 transition lg:left-72 lg:px-6 backdrop-blur-md bg-white/[var(--bg-opacity-light)]">
    <div className="flex-grow flex justify-between items-center">
      <h1 className="font-semibold text-lg text-zinc-900">{heading}</h1>
      {children}
    </div>
    <div className="absolute inset-x-0 top-full h-px transition bg-zinc-900/20"></div>
  </div>
);
