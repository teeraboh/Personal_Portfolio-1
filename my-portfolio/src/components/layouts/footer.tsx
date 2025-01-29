"use client";

import React from "react";
import Image from "next/legacy/image";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/teerabohuix?igsh=cHM4Ym9xOTMzYjdt&utm_source=qr",
      src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738172140/images/wxe71gxub7tihdrxez5q.svg",
      alt: "Instagram logo",
    },
    {
      href: "https://dribbble.com/teeraboh",
      src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738172139/images/rmaxmonbutfym0e0i2cr.svg",
      alt: "Dribbble logo",
    },
    {
      href: "https://www.behance.net/fidelisteeraboh",
      src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738172139/images/gs5kpyskqrub5nvhemob.svg",
      alt: "Behance logo",
    },
    {
      href: "https://www.linkedin.com/in/teeraboh-z-7b5922141?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738172139/images/gq4h4tqjynefikned9qz.svg",
      alt: "LinkedIn logo",
    },
    {
      href: "https://github.com/teeraboh",
      src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738172139/images/oh4bpfgn0xgqalkwz0bx.svg",
      alt: "GitHub logo",
    },
  ];

  return (
    <footer className="w-full bg-bgbody py-6">
      <div className="xl:mx-auto max-w-screen-xl px-4 lg:px-20">
        <div className="md:flex md:justify-between items-center">
          <div className="flex justify-center md:justify-start space-x-2 mb-4 md:mb-0">
            {socialLinks.map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={36}
                  height={36}
                  className="brightness-100 cursor-pointer"
                  priority
                />
              </a>
            ))}
          </div>

          <div className="text-center md:text-left">
            <p className="font-medium text-textnorm text-base">
              © 2025 Teerabohuix Design. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
