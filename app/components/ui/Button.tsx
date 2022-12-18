import { cva, type VariantProps } from "class-variance-authority";

export const button = cva(["tracking-wide", "transition-colors"], {
  variants: {
    intent: {
      primary: ["bg-purple-900", "text-white", "hover:bg-purple-800"],
      secondary: [
        "bg-black",
        "text-white",
        "hover:bg-gray-800",
        "dark:bg-white",
        "dark:text-black",
        "dark:hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-2", "px-4", "rounded-sm"],
      medium: ["text-base", "py-3", "px-6", "rounded-md"],
      large: ["text-lg", "py-4", "px-8", "rounded-lg"],
    },
    modifier: {
      outline: ["border", "border-black", "dark:border-white"],
      link: ["underline", "underline-offset-8"],
    },
  },
  compoundVariants: [
    {
      intent: ["primary", "secondary"],
      className: ["border", "border-transparent"],
    },
    {
      modifier: "link",
      className: ["border", "border-transparent"],
    },
  ],
  defaultVariants: {
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
}

export default function Button({
  children,
  type = "button",
  intent,
  modifier,
  size,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ intent, size, modifier })} {...props}>
      {children}
    </button>
  );
}
