import styles from "./Page.module.css";

export const Page = ({ children }: React.PropsWithChildren) => (
  <div className={styles.page}>{children}</div>
);
