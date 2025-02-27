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
          "flex-1 justify-end text-lg text-foreground font-semibold text-[#838383] hover:text-black transition-all",
          pathname === href && "text-indigo-600 hover:text-indigo-600"
        )}
      >
        <p>{label}</p>
      </Link>
    </div>
  );
};
