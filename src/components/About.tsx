"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlForImage } from "../../sanity/lib/image";
type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative text-center md:text-left
  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="absolute top-20  uppercase tracking-[20px] text-gray-400 text-xl md:text-2xl">
        About
      </h2>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-32 md:top-40  flex flex-col text-center md:text-left
  md:flex-row max-w-5xl px-5 justify-evenly mx-auto items-center"
      >
        <Image
          src={urlForImage(pageInfo?.profilePic).url()}
          width={400}
          height={400}
          alt="about-image"
          className="mb-6 md:mb-0 flex-shrink-0 w-44 h-44 object-cover rounded-full 
        md:rounded-lg md:w-64 md:h-96 xl:w-[360px] xl:h-[460px]"
        />
        <div className="space-y-3 md:space-y-7 lg:space-y-8 px-0 md:pl-10">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-center underline decoration-[#318ce7]/50">
            Beyond the Pixels
          </h3>
          <p className="text-sm text-left lg:text-lg md:tracking-wide whitespace-pre-wrap">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
