"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  videoSrc: string;
  href: string;
  title: string;
  description: string;
}

const ProjectCard = ({ videoSrc, title, description, href }: ProjectProps) => (
  <div className="flex flex-col items-center justify-center w-full h-fit mt-6 lg:rounded-lg lg:p-4 bg-custom-gradient">
    <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start lg:grid grid-cols-3 lg:space-x-0 lg:gap-12">
      <div className="flex flex-col items-center justify-center lg:col-span-2 lg:items-start lg:justify-start">
        <h1 className="font-inter text-center text-base font-semibold text-textmed py-2 lg:text-left lg:text-3xl lg:font-bold">
          {title}
        </h1>
        <div className="flex flex-col py-2">
          <p className="text-center text-sm font-light text-textnorm  lg:text-start lg:text-xl">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-4 space-y-3 px-6">
        <Button
          type="button"
          aria-label="Available for a new project"
          className="cursor-none rounded-full bg-[#CDF4CD] py-2 px-10 text-[#028C02] flex items-center justify-center gap-3 hover:bg-[#CDF4CD]"
        >
          <span className="inline-block w-3 h-3 font-semibold text-sm rounded-full lg:text-start bg-[#028C02] lg:text-xl" />
          <span>Case Study Project</span>
        </Button>
      </div>
    </div>
    <div className="flex flex-col w-full items-center justify-center pt-6 px-4">
      <video
        src={videoSrc}
        controls
        preload="auto"
        className="w-full lg:w-10/12 h-auto rounded-lg"
      />
    </div>
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="flex flex-col mt-4 lg:pr-[42rem] lg:h-fit lg:items-start"
    >
      <Button
        type="button"
        aria-label="View Project"
        className="flex border border-textnorm rounded-full py-3 px-6 lg:px-10 lg:rounded-lg mt-1 cursor-pointer bg-white hover:bg-[#3C3E44]"
      >
        <span className="font-semibold text-sm text-textnorm hover:text-white">
          View Project
        </span>
        <span className="inline-block">
          <svg
            width="15"
            height="11"
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
      </Button>
    </a>
  </div>
);

export default function ProjectPage() {
  const projects = [
    {
      videoSrc:
        "https://res.cloudinary.com/dxvf9uqwe/video/upload/v1737760397/videos/agtnu2tj8wizdd6vustn.mp4",
      title: "Quick-Shop E-commerce web and mobile application",
      description:
        "Crafting seamless experience and designing products that scale. A software engineering student by day, a creative thinker and innovative designer by night.",
      href: "https://www.behance.net/gallery/216560607/Quickshop-E-com-platform",
    },
    {
      videoSrc:
        "https://res.cloudinary.com/dxvf9uqwe/video/upload/v1737760400/videos/i3mzlmqvlhrfoi7v977i.mp4",
      title: "Split-Ease mobile application",
      description:
        "The Splitease expense-sharing application, aiming to provide users with a seamless and user-friendly platform for splitting bills and managing shared expenses.",
      href: "https://www.behance.net/gallery/216698545/Split-Ease?share=1",
    },
  ];

  return (
    <section className="flex flex-col w-full justify-between bg-bg-custom-gradient overflow-hidden px-6">
      <div className="flex flex-col w-full items-center justify-center py-6 lg:items-start lg:w-full lg:py-10 lg:px-28">
        <h1 className="text-2xl font-medium text-textcolor text-center lg:items-start lg:text-4xl">
          PROJECT
        </h1>

        <div className="flex flex-col items-center justify-center w-full space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <hr className="my-6 sm:mx-auto border-[#E7E7E7] md:mb-4 md:mt-0 md:w-10/12" />
    </section>
  );
}