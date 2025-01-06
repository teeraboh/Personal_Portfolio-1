"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavItemProps {
  text: string;
  href: string;
}

export default function NavMenu() {
  return (
    <div className="flex w-full mx-auto shrink-0 overflow-hidden bg-custom-gradient">
      <div className="flex w-full h-20 md:h-24 bg-bgbody justify-between py-6 px-4 border border-b-2 border-strokeCus">
        <div className="flex md:hidden justify-between w-full">
          <h1 className="w-32 h-9 font-bold text-2xl text-textcolor">
            PORTFOLIO
          </h1>
          <Image
            src="/images/menu.svg"
            alt="logo"
            width={24}
            height={24}
            className="brightness-100 contrast-75"
            loading="lazy"
          />
        </div>
        <div className="hidden md:flex md:justify-between md:w-full lg:justify-start lg:w-auto">
          <h1 className="font-semibold text-4xl text-textcolor top-6 lg:px-36">
            PORTFOLIO
          </h1>
          <div className="flex space-x-1 pt-1">
            <NavItem text="HOME" href="/" />
            <NavItem text="ABOUT ME" href="/about" />
            <NavItem text="GET IN TOUCH" href="/contact" />
            <NavItem text="PROJECTS" href="/projects" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ text, href }: NavItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-center cursor-pointer rounded-full border border-strokeCus py-2 px-6 transition-all duration-300 whitespace-nowrap"
      onClick={() => router.push(href)}
    >
      <p className={`font-normal text-sm text-textcolor`}>{text}</p>
    </div>
  );
}
