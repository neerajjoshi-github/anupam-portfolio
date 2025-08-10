import { cn } from "@utils/index";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  className: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        `bg-gradient-to-b from-black/5 from-60% to-primary/2 border-2 border-subtle/10 rounded-xl shadow-md w-full`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
