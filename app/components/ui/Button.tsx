import { cva, type VariantProps } from "class-variance-authority";

export const button = cva(["tracking-wide", "transition-colors"], {
  variants: {
    variant: {
      primary: ["bg-purple-900", "text-white", "hover:bg-purple-800"],
      secondary: [
        "bg-black",
        "text-white",
        "hover:bg-gray-800",
        "dark:bg-white",
        "dark:text-black",
        "dark:hover:bg-gray-100",
      ],
      outline: ["border", "border-black", "dark:border-white"],
      link: ["underline", "underline-offset-8"],
    },
    size: {
      small: ["text-sm"],
      medium: ["text-base"],
      large: ["text-lg"],
    },
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary", "outline"],
      size: ["small"],
      className: ["py-2", "px-4", "rounded-sm"],
    },
    {
      variant: ["primary", "secondary", "outline"],
      size: ["medium"],
      className: ["py-3", "px-6", "rounded-md"],
    },
    {
      variant: ["primary", "secondary", "outline"],
      size: ["large"],
      className: ["py-4", "px-8", "rounded-lg"],
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
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ variant, size })} {...props}>
      {children}
    </button>
  );
}
