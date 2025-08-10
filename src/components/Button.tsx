import React from "react";
import { cn } from "@utils/index";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  href?: string;
  target?: string;
};

const Button = ({
  children,
  className = "",
  href,
  target,
  ...props
}: ButtonProps) => {
  const classes = cn(
    `rounded-lg border flex items-center justify-center border-dashed border-primary px-6 h-10 font-medium text-primary transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-sm hover:shadow-[4px_4px_0px_var(--primary)] active:translate-x-[0px] active:translate-y-[0px] text-sm cursor-pointer active:rounded-2xl active:shadow-none`,
    className
  );

  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
