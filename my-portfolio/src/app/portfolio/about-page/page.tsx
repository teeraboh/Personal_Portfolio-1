"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="flex flex-col w-full justify-between space-y-4">
      <div className="flex flex-col w-fit h-fit pt-4 px-4 my-6 items-center container bg-custom-gradient lg:w-full lg:h-fit lg:px-28">
        <div className="flex flex-col lg:flex-row lg:gap-0 lg:space-x-0">
          <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start pt-6">
            <h1 className="text-xl font-medium text-textnorm text-center lg:text-left lg:text-4xl">
              ABOUT
            </h1>
            <Image
              src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602215/image/tsfcu2izu5ikfymxu0ul.svg"
              alt="Profile picture of Zana Teeraboh"
              width={205}
              height={287}
              className="brightness-100 mt-5 flex lg:hidden"
              quality={90}
              priority
            />
            <Image
              src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602217/image/lvpz1ums7s1xqnm7en1w.svg"
              alt="Profile picture of Zana Teeraboh"
              width={275}
              height={358}
              className="brightness-100 mt-5 hidden lg:flex"
              quality={90}
              priority
            />
          </div>
          <div className="flex flex-col w-fit h-fit items-start justify-start pt-4 mx-12 lg:px-24 lg:mt-10  lg:pt-0 lg:space-x-0 lg:w-full">
            <div className="flex flex-row">
              <Image
                src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602534/image/ggro01mlpmawssffr3lu.svg"
                alt="comma"
                width={17}
                height={15}
                className="mb-96 pt-2 lg:mt-8 lg:mb-72"
                quality={90}
                priority
              />
              <div className="flex flex-col py-2 lg:pt-10">
                <p className="text-base font-normal text-textnorm italic text-center py-1 text-pretty lg:text-start lg:text-xl">
                  Hello, I&apos;m Zana Teeraboh, a passionate and detail-driven
                  product designer with 3 years of experience in crafting
                  intuitive and user-friendly experiences. Currently, I&apos;m
                  expanding my skill set as a student of Software Engineering at
                  Miva Open University.
                </p>
                <p className="text-center text-base font-normal text-textnorm italic py-1 pt-2 text-pretty lg:text-start lg:text-xl">
                  I&apos;m excited to bring my skills and experience to the
                  table, and I&apos;m looking forward to connecting with you!
                </p>
              </div>
            </div>
            <Link
              href="/portfolio/about"
              rel="preload"
              className="flex w-60 items-center justify-items-center border rounded-[33px] px-4 mx-4 cursor-pointer bg-white hover:bg-[#3C3E44] md:w-fit md:px-3 md:mx-44 lg:mb-2 lg:w-fit"
            >
              <span className="flex items-center font-semibold text-sm text-textnorm hover:text-white lg:text-lg py-2 mx-4">
                Learn more about me
              </span>
              <span className="inline-block">
                <svg
                  className="h-4 w-4 mx-0"
                  aria-hidden="true"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.293 0.299C8.481 0.112 8.735 0.006 9 0.006s0.519 0.106 0.707 0.293l4.5 4.5c0.188 0.188 0.293 0.442 0.293 0.707s-0.106 0.519-0.293 0.707l-4.5 4.5c-0.188 0.188-0.442 0.293-0.707 0.293s-0.519-0.105-0.707-0.293c-0.188-0.188-0.293-0.442-0.293-0.707s0.106-0.519 0.293-0.707L11 6.506H1.5c-0.265 0-0.519-0.105-0.707-0.293S0.5 5.771 0.5 5.506s0.106-0.519 0.293-0.707S1.235 4.506 1.5 4.506H11L8.293 1.713c-0.188-0.188-0.293-0.442-0.293-0.707s0.106-0.519 0.293-0.707z"
                    fill="#656565"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}