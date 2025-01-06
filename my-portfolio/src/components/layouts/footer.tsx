"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const footer = () => {
  return (
    <footer className="w-full justify-center">
      <div className="xl:mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col items-center justify-center md:justify-between md:w-full md:flex-row md:mx-4">
            <div className="flex flex-row space-x-1 mb-5">
              <Image
                src="/images/insta.svg"
                alt="logo"
                width={36}
                height={36}
                className="brightness-100"
                loading="lazy"
              />

              <Image
                src="/images/ball.svg"
                alt="logo"
                width={36}
                height={36}
                className="brightness-100"
                loading="lazy"
              />
              <Image
                src="/images/Be.svg"
                alt="logo"
                width={36}
                height={36}
                className="brightness-100"
                loading="lazy"
              />
              <Image
                src="/images/in.svg"
                alt="logo"
                width={36}
                height={36}
                className="brightness-100"
                loading="lazy"
              />
              <Image
                src="/images/git.svg"
                alt="logo"
                width={36}
                height={36}
                className="brightness-100"
                loading="lazy"
              />
            </div>
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="sm:text-center font-medium text-textnorm text-base space-x-2 mb-1 pb-2">
                <span>© 2025 Teerabohuix design. All right reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
