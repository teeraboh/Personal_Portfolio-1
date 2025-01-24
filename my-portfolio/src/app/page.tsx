"use client";

import React, { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AboutPage from "@/app/portfolio/aboutPage/page";
import ProjectPage from "./portfolio/featurePage/page";

const ContactLink = ({
  href,
  src,
  alt,
  text,
}: {
  href: string;
  src: string;
  alt: string;
  text: string;
}) => (
  <a
    href={href}
    className="flex flex-row items-center gap-3 cursor-pointer"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Image src={src} alt={alt} width={20} height={20} />
    <p className="underline text-base font-normal text-textcolor underline-offset-8 hover:text-textnorm">
      {text}
    </p>
  </a>
);

export default function Home() {
  const [loading] = useState(false);

  return (
    <main className="flex flex-col w-full justify-between bg-custom-gradient space-y-1 overflow-hidden mb-2">
      <section className="flex flex-col space-y-2 pt-4 items-center justify-center">
        <div className="flex justify-center items-center">
          <h1 className="font-semibold lg:font-medium text-center text-2xl text-textcolor whitespace-nowrap lg:text-[9rem] lg:leading-relaxed lg:text-wrap">
            EXPLORE MY PORTFOLIO
          </h1>
        </div>
        <div className="flex flex-col w-full items-center justify-center lg:flex-row lg:justify-between lg:px-10 lg:-mt-52 lg:relative">
          <div className="mb-4 lg:mb-28 lg:relative lg:w-[22rem] lg:h-[15.938rem]">
            <p className="text-center text-base font-medium text-textmed text-pretty italic lg:text-start lg:text-3xl">
              Hey, I&apos;m Zana Teeraboh, a passionate UI/UX designer.
              <br /> Dedicated to creating intuitive and engaging user
              <br /> experiences. Let's make something amazing together!
            </p>
          </div>

          <div className="flex h-fit lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:pt-8">
            <Image
              src="/images/mobile1.svg"
              alt="logo"
              width={306}
              height={410}
              className="brightness-100 flex lg:hidden z-0"
              quality={100}
              priority
            />
            <Image
              src="/images/person.svg"
              alt="logo"
              width={592}
              height={794}
              className="brightness-100 hidden lg:flex z-0"
              quality={100}
              priority
            />
          </div>

          <div className="lg:mb-32 lg:w-[24rem] lg:h-[14rem]">
            <p className="text-center text-sm font-normal text-textnorm italic text-pretty py-1 lg:text-right lg:text-2xl">
              Crafting seamless experience and designing
              <br /> products that scale. Software engineering student
              <br /> by day at miva open university, creative thinker
              <br /> and innovating designer by night
            </p>
          </div>
        </div>
      </section>

      <div className="h-20 w-full bg-transparent hidden lg:block"></div>

      <section className="flex flex-col w-full items-center justify-center space-y-2 bg-bgbutton/70 lg:flex-row lg:py-12 lg:mx-8 z-10">
        <div className="grid grid-cols-2 gap-0 mx-0">
          <PrimaryButton
            id="DownloadCv"
            type="button"
            aria-label="Download My Cv"
            text="Download My Cv"
            disabled={loading}
            className="cursor-pointer rounded-full border border-[#3C3E44] py-2 px-4 bg-white text-[#3C3E44] hover:bg-[#3C3E44] hover:text-white"
          />
          <a
            href="https://doodle.com/bp/fidelisteeraboh/schedule-a-call-with-teeraboh"
            rel="noopener noreferrer"
            target="_blank"
          >
            <PrimaryButton
              id="BookCall"
              type="button"
              aria-label="Book a Call With Me"
              text="Book a Call With Me"
              disabled={loading}
              className="cursor-pointer rounded-full border border-[#3C3E44] py-2 px-4 bg-[#3C3E44] text-white hover:bg-white hover:text-[#3C3E44]"
            />
          </a>
        </div>
        <div className="flex flex-col pt-1 space-y-3 lg:pt-0 lg:pb-2 lg:mx-7">
          <Button
            type="button"
            aria-label="Available for a new project"
            disabled={loading}
            className="cursor-none rounded-full bg-[#CDF4CD] py-2 px-12 text-[#028C02] flex items-center justify-center gap-3 hover:bg-[#CDF4CD]"
          >
            <span className="inline-block w-3 h-3 bg-[#028C02] rounded-full" />
            <span>Available for a new project</span>
          </Button>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full h-fit bg-custom-gradient">
        <div className="flex flex-col bg-custom-gradient">
          <AboutPage />
        </div>
        <div className="flex flex-col bg-custom-gradient">
          <ProjectPage />
        </div>
      </section>

      <section id="get-in-touch">
        <div className="flex flex-col items-center justify-center mt-3 mb-5 bg-custom-gradient">
          <h1 className="text-xl font-medium text-textnorm text-center lg:text-5xl lg:pt-3">
            GET IN TOUCH
          </h1>
          <p className="text-center text-xs font-normal text-textnorm px-4 pt-5 pb-2 lg:mb-6 lg:px-0 lg:text-lg">
            &quot;Stay in touch! Contact me for collaborations, inquiries, or
            just to chat.&quot;
          </p>

          <div className="flex flex-col items-center justify-center my-5">
            <h1 className="text-base font-semibold text-textcolor text-center pb-1 lg:text-xl">
              Chat with me via
            </h1>
            <p className="text-center text-xs font-normal text-textnorm py-1.5 mx-6 px-12">
              Any of the channels below so we can speak freely on Mon-Fri from
              8am to 5pm.
            </p>
            <div className="flex flex-col items-start gap-4 px-8 py-2 my-6">
              <ContactLink
                href="mailto:teeraboh@gmail.com"
                src="/images/ic_outline-email.svg"
                alt="Email Icon"
                text="Shoot me a mail"
              />
              <ContactLink
                href="https://x.com/fideliszana?s=21"
                src="/images/devicon_twitter.svg"
                alt="Twitter Icon"
                text="Follow me on X"
              />
              <ContactLink
                href="https://www.instagram.com/teerabohuix?igsh=cHM4Ym9xOTMzYjdt&utm_source=qr"
                src="/images/hugeicons_instagram.svg"
                alt="Instagram Icon"
                text="Follow me on IG"
              />
            </div>
            <a
              href="mailto:teeraboh@gmail.com"
              className="flex w-full px-10 md:px-14 lg:px-0"
            >
              <SecondaryButton
                type="button"
                text="Send Me A Message"
                aria-label="Send Me A Message"
                disabled={loading}
                className="flex w-full text-white font-medium text-sm border border-[#3C3E44] rounded-full py-3 cursor-pointer bg-[#3C3E44] hover:bg-white hover:text-[#3C3E44]"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
