"use client";

import { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AboutPage from "@/app/portfolio/aboutPage/page";
import ProjectPage from "./portfolio/featurePage/page";

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
        <div className="flex flex-col w-full items-center justify-center relative lg:flex-row lg:justify-between lg:px-10 lg:-mt-52">
          <div className="lg:mb-24 lg:relative lg:w-[22rem] lg:h-[15.938rem]">
            <p className="text-center text-base font-medium text-textmed text-pretty italic space-y-3 whitespace-nowrap lg:text-start lg:text-3xl lg:text-wrap">
              Hey, I’m Zana Teeraboh. A Junior software Engineer,
              <br /> A prompt Engineer and a UI/UX
              <br />
              Designer{" "}
            </p>
          </div>

          <div className="flex relative">
            <Image
              src="/images/Image1.png"
              alt="logo"
              width={306}
              height={410}
              className="brightness-100 flex lg:hidden z-0"
              loading="lazy"
            />
            <Image
              src="/images/Image2.png"
              alt="logo"
              width={592}
              height={794}
              className="brightness-100 hidden lg:flex z-0"
              loading="lazy"
            />
          </div>
          <div className="lg:mb-32 lg:relative lg:w-[24rem] lg:h-[14rem]">
            <p className="text-center text-sm font-normal text-textnorm italic text-pretty py-1 lg:text-right lg:text-2xl">
              Crafting seamless experience and designing
              <br /> product that scale. Software engineering student
              <br /> by day, a creative thinker and innovating designer
              <br /> by night
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full items-center justify-center space-y-2 bg-bgbutton/70 lg:flex-row lg:py-16 lg:-mt-44">
        <div className="grid grid-cols-2 gap-0 -space-x-2 lg:space-x-0">
          <PrimaryButton
            id="Download Cv"
            type="button"
            aria-label="Download My Cv"
            text="Download My Cv"
            disabled={loading}
            className="cursor-pointer rounded-full border border-[#3C3E44] py-2 px-6 bg-white text-[#3C3E44] hover:bg-[#567056]"
          />
          <PrimaryButton
            id="Book a Call"
            type="button"
            aria-label="Book a Call  With Me"
            text="Book a Call  With Me"
            disabled={loading}
            className="cursor-pointer rounded-full border border-[#3C3E44] py-2 px-6 bg-[#3C3E44] text-white hover:bg-[#567056]"
          />
        </div>
        <div className="flex flex-col pt-1 space-y-3 lg:pt-0 lg:pb-2 lg:mx-7">
          <Button
            type="button"
            aria-label="Available for a new project"
            disabled={loading}
            className="cursor-pointer rounded-full bg-[#CDF4CD] py-2 px-12 text-[#028C02] flex items-center justify-center gap-3 hover:bg-[#567056]"
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

      <section>
        <div className="flex flex-col items-center justify-center mt-3 mb-5  bg-custom-gradient">
          <h1 className="text-xl font-medium text-textnorm text-center lg:text-5xl">
            GET IN TOUCH
          </h1>
          <p className="text-left text-xs font-normal text-textnorm pt-5 pb-2 lg:mb-6 lg:text-lg">
            "Stay in touch! Contact me for collaborations, inquiries, or just to
            chat."
          </p>
          <div className="flex flex-col items-center justify-center my-5">
            <h1 className="text-base font-semibold text-textcolor text-center pb-1 lg:text-xl">
              Chat with me via
            </h1>
            <p className="text-center text-xs font-normal text-textnorm py-1.5 mx-6 px-12">
              Any of this channel below so we Speak freely on Mon-Fri from 8am
              to 5pm,
            </p>
            <div className="flex flex-col items-start gap-4 px-8 py-2 my-6">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/images/ic_outline-email.svg"
                  alt="Email Icon"
                  width={20}
                  height={16}
                />
                <p className="underline text-base font-normal text-textcolor underline-offset-8">
                  Shoot me a mail
                </p>
              </div>

              <div className="flex flex-row items-center gap-4">
                <Image
                  src="/images/devicon_twitter.svg"
                  alt="Twitter Icon"
                  width={16}
                  height={16}
                />
                <p className="underline text-base font-normal text-textcolor underline-offset-8">
                  Follow me on X
                </p>
              </div>

              <div className="flex flex-row items-center gap-3">
                <Image
                  src="/images/hugeicons_instagram.svg"
                  alt="Instagram Icon"
                  width={19}
                  height={19}
                />
                <p className="underline text-base font-normal text-textcolor underline-offset-8">
                  Follow me on IG
                </p>
              </div>
            </div>
            <div className="flex w-full px-10 md:px-14 lg:px-0">
              <SecondaryButton
                type="button"
                text="Send Me A Message"
                aria-label="Send Me A Message"
                disabled={loading}
                className="flex w-full text-white font-medium text-sm border border-[#3C3E44] rounded-full py-3 cursor-pointer bg-[#3C3E44]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
