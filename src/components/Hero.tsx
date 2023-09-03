"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlForImage } from "../../sanity/lib/image";
import { motion } from "framer-motion";
type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      `Interactive Web Developer`,
      `Turning Ideas Into Code`,
      `Exploring New Technologies`,
      `Crafting Digital Delights`,
      `Let's Make Magic Together`,
    ],
    loop: true,
    delaySpeed: 1400,
  });
  return (
    <div
      className="h-screen relative top-16 flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <motion.div
        drag
        dragConstraints={{
          top: -40,
          left: -40,
          right: 40,
          bottom: 20,
        }}
      >
        <Image
          src={urlForImage(pageInfo?.heroImage).url()}
          alt="my-image"
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          width={128}
          height={128}
        />
      </motion.div>
      <div className="z-20">
        <h2 className="text-sm md:text-base lg:text-lg uppercase text-gray-500 pb-2 tracking-[6px] md:tracking-[12px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold md:px-4">
          <span className="mr-1 tracking-wide">{text}</span>
          <Cursor cursorColor="#318ce7" />
        </h1>
        <div className="pt-4">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
