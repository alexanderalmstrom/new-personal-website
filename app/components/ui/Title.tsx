import classnames from "classnames";

export type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps {
  children: React.ReactNode;
  className?: string;
  as: TitleType;
}

export default function Title({ children, className, as }: TitleProps) {
  const Component = as ?? "h2";
  const styles = classnames("mb-4", className);

  return <Component className={styles}>{children}</Component>;
}
