"use client";
import { Skill } from "@/typings";
import Image from "next/image";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import { motion } from "framer-motion";
type Props = {
  skill: Skill;
};

const Skill = ({ skill }: Props) => {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      whileHover={{ scale: 1.2 }}
      className="group relative flex cursor-pointer "
    >
      <Image
        src={urlForImage(skill?.image).url()}
        width={96}
        height={96}
        alt="logo"
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out animate-wiggle "
      />
      <div className="absolute rounded-full z-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24">
        <div className="flex items-center justify-center h-full">
          <p className="text-xs md:text-sm lg:text-base font-semibold text-black opacity-100">
            {`${skill?.title}`}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
