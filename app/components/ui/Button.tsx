import classnames from "classnames";

export type ButtonType = "submit" | "reset" | "button";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
}

export default function Button({
  children,
  className,
  type = "button",
}: ButtonProps) {
  const styles = classnames(
    "py-3 px-6 tracking-wide bg-purple-700 rounded-sm hover:bg-purple-600 transition-colors",
    className
  );

  return (
    <button className={styles} type={type}>
      {children}
    </button>
  );
}
