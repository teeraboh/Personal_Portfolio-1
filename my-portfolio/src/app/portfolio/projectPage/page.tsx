"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  videoSrc: string;
  title: string;
  description: string;
}

const ProjectCard = ({ videoSrc, title, description }: ProjectProps) => (
  <div className="flex flex-col items-center justify-center w-full h-fit py-1 lg:space-x-0 mt-6 lg:rounded-lg lg:p-4 bg-custom-gradient">
    <div className="flex flex-col lg:grid grid-cols-3 lg:space-x-0 lg:gap-12">
      <div className="flex flex-col items-center justify-center lg:col-span-2 lg:items-start lg:justify-start">
        <h1 className="font-inter text-left text-base font-semibold text-textmed py-1 lg:text-3xl lg:font-bold">
          {title}
        </h1>
        <div className="flex flex-col py-1">
          <p className="text-center text-sm font-light text-textnorm py-1 lg:text-start lg:text-xl ">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-1 space-y-3 mx-12 md:mx-48">
        <Button
          type="button"
          aria-label="Available for a new project"
          className="cursor-none rounded-full bg-[#CDF4CD] py-2 px-10 text-[#028C02] flex items-center justify-center gap-3 hover:bg-[#CDF4CD]"
        >
          <span className="inline-block w-3 h-3 font-semibold text-sm lg:text-xl bg-[#028C02] rounded-full" />
          <span>Case Study Project</span>
        </Button>
      </div>
    </div>
    <div className="flex flex-col w-full items-center justify-center pt-6">
      <video
        src={videoSrc}
        controls
        preload="auto"
        className="w-full lg:w-10/12 h-auto rounded-lg px-4 lg:px-0"
      />
    </div>
    <a
      href="https://www.behance.net/gallery/216560607/Quickshop-E-com-platform"
      rel="noopener noreferrer"
      target="_blank"
      className="flex flex-col mt-4 lg:pr-[42rem] lg:h-fit lg:items-start"
    >
      <Button
        type="button"
        aria-label="View Project"
        className="flex border border-textnorm rounded-full py-3 px-32 lg:px-10 lg:rounded-lg mt-1 cursor-pointer bg-white hover:bg-[#3C3E44]"
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
      videoSrc: "/videos/WhatsApp Video1.mp4",
      title: "Quick-Shop E-commerce web and mobile application",
      description:
        "Crafting seamless experience and designing products that scale. A software engineering student by day, a creative thinker and innovative designer by night.",
    },
    {
      videoSrc: "/videos/WhatsApp Video.mp4",
      title: "Split-Ease mobile application",
      description:
        "the Splitease expense-sharing application, aiming to provide users with a seamless and user-friendly platform for splitting bills and managing shared expenses.",
    },
  ];

  return (
    <section className="flex flex-col w-full justify-between bg-bg-custom-gradient overflow-hidden">
      <div className="flex flex-col w-fit h-fit px-4 my-6 items-center justify-center container bg-custom-gradient lg:w-full lg:py-6 lg:px-28">
        <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row lg:w-full lg:justify-between lg:mb-9">
          <h1 className="text-2xl font-medium text-textcolor text-center lg:items-start lg:text-4xl">
            PROJECT
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center w-fit h-fit space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <hr className="my-6 sm:mx-auto border-[#E7E7E7] md:mb-4 md:mt-0 md:w-10/12" />
    </section>
  );
}
