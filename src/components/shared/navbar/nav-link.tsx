"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();

  return (
    <div className="overflow-hidden">
      <Link
        href={href}
        className={cn(
          "flex-1 justify-end text-base  text-foreground font-semibold text-black hover:text-[#4f37ff] transition-all",
          pathname === href && "text-[#4f37ff] hover:text-indigo-600"
        )}
      >
        <p>{label}</p>
      </Link>
    </div>
  );
};
