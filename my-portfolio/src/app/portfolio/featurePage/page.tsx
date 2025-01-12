"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  <div className="flex flex-col py-1 md:mx-10 lg:space-x-0">
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
    <div className="flex flex-col mx-12 md:mx-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-inter text-left text-base font-medium text-textmed py-1">
          {title}
        </h1>
        <div className="flex flex-col py-1">
          <p className="text-center text-xs font-light text-textnorm py-1">
            {description}
          </p>
        </div>
      </div>
      <a
        href="https://www.behance.net/gallery/216560607/Quickshop-E-com-platform"
        className="flex flex-col"
      >
        <Button
          type="button"
          aria-label="View Project"
          className="flex border border-textnorm rounded-full py-3 px-10 mt-1 cursor-pointer bg-white hover:bg-[#3C3E44]"
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
      title: "E-commerce web application",
      description:
        "Crafting seamless experience and designing products that scale. A software engineering student by day, a creative thinker and innovative designer by night.",
    },
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
      title: "E-commerce web application",
      description:
        "Crafting seamless experience and designing products that scale. A software engineering student by day, a creative thinker and innovative designer by night.",
    },
  ];

  return (
    <section className="flex flex-col w-full justify-between space-y-4">
      <div className="flex flex-col w-fit h-fit pt-4 px-4 my-6 items-center container bg-custom-gradient lg:w-full lg:py-20 lg:px-28">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:w-full lg:justify-between lg:px-20">
          <h1 className="text-xl font-medium text-textnorm text-center">
            FEATURED PROJECT
          </h1>
          <Link
            href="/portfolio/projectPage"
            className="hidden lg:flex gap-2 cursor-pointer"
          >
            <span className="font-semibold text-sm text-textnorm">
              VIEW ALL PROJECTS
            </span>
            <span className="inline-block pt-1">
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
          </Link>
        </div>

        <div className="block lg:hidden space-y-2">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="hidden lg:block w-full space-x-0">
          <Carousel>
            <CarouselContent className="">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <ProjectCard {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Link
          href="/portfolio/projectPage"
          className="text-sm font-medium text-textcolor text-center cursor-pointer hover:text-textnorm pt-6 lg:hidden"
        >
          VIEW ALL PROJECTS
        </Link>
      </div>
    </section>
  );
}
