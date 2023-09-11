"use client";
import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType } from "@/typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col justify-center items-center relative text-center 
    md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto"
    >
      <h2 className="absolute top-20 uppercase tracking-[20px] text-gray-400 text-xl md:text-2xl  ">
        Skills
      </h2>
      <div className="absolute top-32 grid grid-cols-3 md:grid-cols-4 gap-x-7 gap-y-5 md:gap-5">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
