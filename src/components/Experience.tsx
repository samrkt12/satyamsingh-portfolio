"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";
type Props = {
  experiences: Experience[];
};

const Experience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative justify-evenly overflow-hidden text-left md:flex-row
    max-w-full px-4 mx-auto items-center "
    >
      <h3 className="absolute top-20 uppercase tracking-[16px] md:tracking-[20px] text-gray-500 text-xl">
        Experience
      </h3>
      <div className="absolute top-32 px-1 flex overflow-x-scroll justify-center overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#318ce7]/80">
        {experiences.map((exp) => (
          <ExperienceCard key={exp._id} experience={exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
