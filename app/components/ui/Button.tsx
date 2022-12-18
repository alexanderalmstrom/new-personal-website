import { cva, type VariantProps } from "class-variance-authority";

export type ButtonType = "submit" | "reset" | "button";

export const button = cva(
  "py-3 px-6 tracking-wide rounded-sm transition-colors",
  {
    variants: {
      intent: {
        primary: ["bg-black", "text-white", "dark:bg-white", "dark:text-black"],
        secondary: ["bg-purple-900", "text-white"],
      },
      size: {
        small: ["text-sm", "py-2", "px-4"],
        medium: ["text-base", "py-3", "px-6"],
        large: ["text-lg", "py-4", "px-8"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
  type?: ButtonType;
}

export default function Button({
  children,
  type = "button",
  intent,
  size,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ intent, size })} type={type} {...props}>
      {children}
    </button>
  );
}
