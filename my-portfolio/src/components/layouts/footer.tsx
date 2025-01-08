"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full justify-center">
      <div className="xl:mx-auto max-w-screen-xl px-4 lg:px-20">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col items-center justify-between md:w-full md:flex-row lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:text-left my-4 order-last lg:order-none">
              <p className="font-medium text-textnorm text-base">
                <span>© 2025 Teerabohuix design. All right reserved.</span>
              </p>
            </div>
            <div className="flex flex-row space-x-1 order-first lg:order-none">
              <Image
                src="/images/insta.svg"
                alt="Instagram logo"
                width={36}
                height={36}
                className="brightness-100"
                loading="lazy"
              />
              <Image
                src="/images/ball.svg"
                alt="Globe logo"
                width={36}
                height={36}
                className="brightness-100"
                loading="lazy"
              />
              <Image
                src="/images/Be.svg"
                alt="Behance logo"
                width={36}
                height={36}
                className="brightness-100"
                loading="lazy"
              />
              <Image
                src="/images/in.svg"
                alt="LinkedIn logo"
                width={36}
                height={36}
                className="brightness-100"
                loading="lazy"
              />
              <Image
                src="/images/git.svg"
                alt="GitHub logo"
                width={36}
                height={36}
                className="brightness-100"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
