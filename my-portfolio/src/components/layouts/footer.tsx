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
              <a href="https://www.instagram.com/teerabohuix?igsh=cHM4Ym9xOTMzYjdt&utm_source=qr">
                <Image
                  src="/images/insta.svg"
                  alt="Instagram logo"
                  width={36}
                  height={36}
                  className="brightness-100 cursor-pointer"
                  loading="lazy"
                />
              </a>
              <a href="https://dribbble.com/teeraboh">
                <Image
                  src="/images/ball.svg"
                  alt="Globe logo"
                  width={36}
                  height={36}
                  className="brightness-100 cursor-pointer"
                  loading="lazy"
                />
              </a>

              <a href="https://www.behance.net/fidelisteeraboh">
                <Image
                  src="/images/Be.svg"
                  alt="Behance logo"
                  width={36}
                  height={36}
                  className="brightness-100 cursor-pointer"
                  loading="lazy"
                />
              </a>

              <a href="https://www.linkedin.com/in/teeraboh-z-7b5922141?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <Image
                  src="/images/in.svg"
                  alt="LinkedIn logo"
                  width={36}
                  height={36}
                  className="brightness-100 cursor-pointer"
                  loading="lazy"
                />
              </a>

              <a href="https://github.com/teeraboh">
                <Image
                  src="/images/git.svg"
                  alt="GitHub logo"
                  width={36}
                  height={36}
                  className="brightness-100 cursor-pointer"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
