import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const LinkEffect = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("link-effect", className)}>
      <span className="effect-1">{children}</span>
      <span className="effect-1 second">{children}</span>
    </span>
  );
};
