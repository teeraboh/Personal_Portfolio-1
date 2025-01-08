"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const ProjectCard = ({
  imageSrc,
  altText,
  title,
  description,
}: ProjectProps) => (
  <div className="flex flex-col py-1 md:mx-10 lg:space-x-0 mt-6">
    <div className="flex flex-col mx-12 md:mx-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-inter text-left text-base font-semibold text-textmed py-1">
          {title}
        </h1>
        <div className="flex flex-col py-1">
          <p className="text-center text-sm font-light text-textnorm py-1">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-1 space-y-3">
        <Button
          type="button"
          aria-label="Available for a new project"
          className="cursor-pointer rounded-full bg-[#CDF4CD] py-2 px-10 mx-8 text-[#028C02] flex items-center justify-center gap-3 hover:bg-[#567056]"
        >
          <span className="inline-block w-3 h-3 font-semibold text-sm bg-[#028C02] rounded-full" />
          <span>Case Study Project</span>
        </Button>
      </div>
    </div>
    <div className="flex flex-col w-full items-center justify-center pt-6">
      <Image
        src={imageSrc}
        alt={altText}
        width={347}
        height={214}
        className="brightness-100"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col mx-12 mt-4">
      <Button
        type="button"
        aria-label="View Project"
        className="flex border border-textnorm rounded-full py-3 px-10 mt-1 cursor-pointer bg-custom-gradient"
      >
        <span className="font-semibold text-sm text-textnorm">
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
    </div>
  </div>
);

export default function ProjectPage() {
  const projects = [
    {
      imageSrc: "/images/project.svg",
      altText: "Profile picture of Zana Teeraboh",
      title: "E-commerce web application",
      description:
        "Crafting seamless experience and designing products that scale. A software engineering student by day, a creative thinker and innovative designer by night.",
    },
    {
      imageSrc: "/images/project.svg",
      altText: "Profile picture of Zana Teeraboh",
      title: "E-book web application",
      description:
        "Crafting seamless experience and designing products that scale. A software engineering student by day, a creative thinker and innovative designer by night.",
    },
    {
      imageSrc: "/images/project.svg",
      altText: "Profile picture of Zana Teeraboh",
      title: "HealthCare web application",
      description:
        "Crafting seamless experience and designing products that scale. A software engineering student by day, a creative thinker and innovative designer by night.",
    },
    {
      imageSrc: "/images/project.svg",
      altText: "Profile picture of Zana Teeraboh",
      title: "Fin-Tech web application",
      description:
        "Crafting seamless experience and designing products that scale. A software engineering student by day, a creative thinker and innovative designer by night.",
    },
  ];

  return (
    <section className="flex flex-col w-full justify-between">
      <div className="flex flex-col w-fit h-fit px-4 my-6 items-center container bg-custom-gradient lg:w-full lg:py-20 lg:px-28">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:w-full lg:justify-between lg:px-20">
          <h1 className="text-2xl font-medium text-textcolor text-center">
            PROJECT
          </h1>
          <div className="hidden lg:flex pt-1 space-y-3">
            <Button
              type="button"
              aria-label="Available for a new project"
              className="cursor-pointer rounded-full bg-[#CDF4CD] py-2 px-12 text-[#028C02] flex items-center justify-center gap-3 hover:bg-[#567056]"
            >
              <span className="inline-block w-3 h-3 bg-[#028C02] rounded-full" />
              <span>Case Study Project</span>
            </Button>
          </div>
        </div>

        <div className="block space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <hr className="my-6 sm:mx-auto border-[#E7E7E7] lg:my-auto" />
    </section>
  );
}
