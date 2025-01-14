"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";

interface NavItemProps {
  text: string;
  href: string;
}

export default function NavMenu() {
  return (
    <div className="flex w-full mx-auto shrink-0 overflow-hidden bg-custom-gradient">
      <header className="flex w-full h-20 md:h-24 bg-bgbody justify-between py-6 px-4 border-b-2 border-strokeCus">
        <div className="flex md:hidden justify-between w-full">
          <h1 className="w-32 h-9 font-bold text-2xl text-textcolor">
            PORTFOLIO
          </h1>
          <Sheet>
            <SheetTrigger asChild>
              <Image
                src="/images/menu.svg"
                alt="menu"
                width={24}
                height={24}
                className="brightness-100 contrast-75 cursor-pointer"
                loading="lazy"
              />
            </SheetTrigger>
            <SheetContent className="w-7/12 h-screen pr-16 items-start justify-start">
              <SheetHeader>
                <h1 className="font-semibold text-xl text-textcolor">Menu</h1>
              </SheetHeader>
              <nav className="flex flex-col items-center gap-7 pt-4 mt-8">
                <NavItem text="HOME" href="/" />
                <NavItem text="ABOUT ME" href="/portfolio/about" />
                <NavItem text="GET IN TOUCH" href="#get-in-touch" />
                <NavItem text="PROJECTS" href="/portfolio/projectPage" />
              </nav>
              <SheetClose asChild></SheetClose>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex md:justify-between md:w-full lg:justify-start lg:w-auto">
          <h1 className="font-semibold text-4xl text-textcolor top-6 lg:px-36">
            PORTFOLIO
          </h1>
          <nav className="flex space-x-4">
            <NavItem text="HOME" href="/" />
            <NavItem text="ABOUT ME" href="/portfolio/about" />
            <NavItem text="GET IN TOUCH" href="#get-in-touch" />
            <NavItem text="PROJECTS" href="/portfolio/projectPage" />
          </nav>
        </div>
      </header>
    </div>
  );
}

function NavItem({ text, href }: NavItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname === href;

  return (
    <div
      className={`flex items-center justify-center cursor-pointer rounded-full border border-strokeCus py-2 px-6 whitespace-nowrap ${
        isActive ? "bg-[#3C3E44] text-white" : "hover:bg-[#3C3E44]"
      }`}
      onClick={() => router.push(href)}
    >
      <p className="font-normal text-sm text-textcolor hover:text-white">
        {text}
      </p>
    </div>
  );
}
