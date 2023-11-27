import { PropsWithChildren } from "react";

type NavigationProps = PropsWithChildren;

export const Navigation = ({ children }: NavigationProps) => (
  <nav>{children}</nav>
);
