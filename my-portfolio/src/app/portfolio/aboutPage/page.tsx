"use client";

import Image from "next/legacy/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="flex flex-col w-full justify-between space-y-4">
      <div className="flex flex-col w-fit h-fit pt-4 px-4 my-6 items-center container bg-custom-gradient lg:w-full lg:h-fit lg:px-28">
        <div className="flex flex-col lg:flex-row lg:gap-0 lg:space-x-0">
          <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start pt-6 lg:pt-0">
            <h1 className="text-xl font-medium text-textnorm text-center lg:text-left lg:mt-0 lg:text-4xl">
              ABOUT
            </h1>
            <Image
              src="/images/WhatsAppImage.png"
              alt="Profile picture of Zana Teeraboh"
              width={203}
              height={286}
              className="brightness-100 mt-5 flex lg:hidden"
              loading="lazy"
            />
            <Image
              src="/images/WhatsAppImage1.png"
              alt="Profile picture of Zana Teeraboh"
              width={275}
              height={358}
              className="brightness-100 mt-5 hidden lg:flex"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col w-fit h-fit items-start justify-start mx-12 lg:px-24 lg:mt-10 lg:space-x-0 lg:w-full">
            <div className="flex flex-row">
              <Image
                src="/images/comma.svg"
                alt="comma"
                width={17}
                height={15}
                className="pb-60 md:pb-40 md:pt-2 lg:pb-36"
                loading="lazy"
              />
              <div className="flex flex-col py-2 lg:pt-10">
                <p className="text-base font-normal text-textnorm italic text-center py-1 text-pretty lg:text-start lg:text-xl">
                  Hello, I'm Zana Teeraboh, a passionate and detail-driven
                  product designer with 3 years of experience in crafting
                  intuitive and user-friendly experiences. Currently, I'm
                  expanding my skill set as a student of Software Engineering at
                  Miva Open University.
                </p>
                <p className="text-center text-base font-normal text-textnorm italic py-1 pt-2 text-pretty lg:text-start lg:text-xl">
                  I'm excited to bring my skills and experience to the table,
                  and I'm looking forward to connecting with you!
                </p>
              </div>
            </div>
            <Link
              href="/portfolio/about"
              className="flex items-center justify-items-center border rounded-[33px] px-6 ml-10 md:px-3 cursor-pointer bg-white hover:bg-[#3C3E44] md:mx-44 md:mt-0 lg:mb-2 lg:mt-4"
            >
              <span className="font-semibold text-sm text-textnorm hover:text-white lg:text-lg py-2">
                Click here to know more about me
              </span>
              <span className="inline-block">
                <svg
                  className="h-4 w-4 ml-1.5"
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
