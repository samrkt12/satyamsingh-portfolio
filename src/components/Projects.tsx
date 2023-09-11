import { Project } from "@/typings";
import Image from "next/image";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row 
    max-w-full justify-evenly items-center mx-auto z-0"
    >
      <h2 className="absolute top-20 uppercase tracking-[20px] text-gray-400 text-xl lg:text-2xl ">
        Projects
      </h2>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#318ce7]/80">
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            justify-center items-center p-5 md:pt-28 h-screen"
          >
            <Image
              src={urlForImage(project?.image).url()}
              alt="project-image"
              width={500}
              height={500}
              className="w-64 h-32 md:w-96 md:h-48 object-cover"
            />
            <div className="space-y-5 px-0 md:px-6 max-w-6xl">
              <h3 className="text-center font-semibold text-lg  md:text-xl lg:text-2xl">
                {project.title}
              </h3>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((tech) => (
                  <Image
                    key={tech._id}
                    src={urlForImage(tech?.image).url()}
                    width={40}
                    height={40}
                    alt={tech.title}
                    className="h-8 w-8 md:h-10 md:w-10"
                  />
                ))}
              </div>
              <p className="text-sm text-center md:max-w-[70ch]">
                {project.summary}
              </p>
              <div className="flex items-center justify-evenly gap-4">
                {project?.buildLink && (
                  <Link href={project.buildLink} target="_blank">
                    <button className="projectButton">Live Demo</button>
                  </Link>
                )}
                {project?.codeLink && (
                  <Link href={project.codeLink} target="_blank">
                    <button className="projectButton">View Code</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#318ce7]/10 left-0 h-[20rem] -skew-y-12 z-[-1]"></div>
    </div>
  );
};

export default Projects;
