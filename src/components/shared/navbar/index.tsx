"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/data/nav-links";
import { NavLink } from "@/components/shared/navbar/nav-link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "bg-background z-[10] fixed top-0 w-full transition-all duration-300",
        isScrolled && "shadow-lg"
      )}
    >
      <div className="container flex items-center justify-between py-2">
        <Link href="/">
          <Image
            src="/images/white-ayezee.svg"
            alt="logo"
            width={150}
            height={50}
          />
        </Link>
        <div className="flex items-center gap-3 md:gap-8">
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link, index) => (
              <NavLink key={index} href={link.href} label={link.label} />
            ))}
          </div>

          <Button className="rounded-none px-6 py-5">
            <Link href="/contact">Get Started</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <div className="hover:bg-secondary block md:hidden p-2 rounded-full">
                <Menu size={32} />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>

              <div className="h-full flex flex-col justify-between">
                <Link href="/">
                  <Image
                    src="/images/white-ayezee.svg"
                    alt="logo"
                    width={150}
                    height={50}
                    className="mb-8"
                  />
                </Link>

                <div className="flex flex-col gap-8">
                  {NAV_LINKS.map((link, index) => (
                    <NavLink key={index} href={link.href} label={link.label} />
                  ))}
                </div>

                <Button className="mt-auto" asChild>
                  <Link href="/contact" className="py-6 rounded-2xl !text-lg">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
