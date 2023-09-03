import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.6, 0.2, 0.8, 1.0],
        scale: [1, 2, 2, 3, 1],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center "
    >
      <div className="absolute border border-grey-[#333333] rounded-full h-[125px] w-[125px] md:h-[150px] md:w-[150px]  lg:h-[180px] lg:w-[180px] mt-52 animate-ping" />
      <div className="absolute border border-grey-[#333333] rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] mt-52 opacity-[0.02]" />
      <div className="absolute border border-grey-[#333333] rounded-full h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] mt-52 opacity-5 animate-spin" />
      <div className="absolute border border-[#318ce7] rounded-full h-[450px] w-[450px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] mt-52 animate-pulse" />
      <div className="absolute border border-grey-[#333333] rounded-full h-[550px] w-[550px] md:h-[600px] md:w-[600px] lg:h-[640px] lg:w-[640px] mt-52 opacity-5" />
    </motion.div>
  );
};

export default BackgroundCircles;
