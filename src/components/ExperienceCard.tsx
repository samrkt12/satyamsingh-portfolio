import { Experience } from "@/typings";
import Image from "next/image";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex w-fit flex-col rounded-lg items-center space-y-7 flex-shrink-0
     snap-center bg-[#292929] px-4 py-8 md:p-8  overflow-hidden"
    >
      <Image
        src={urlForImage(experience?.companyImage).url()}
        className="w-28 h-28 rounded-full xl:w-[140px] xl:h-[140px] object-cover object-center"
        width={110}
        height={110}
        alt="company-logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-base md:text-lg font-light text-center">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-base mt-1 mb-1 text-center">
          {experience?.company}
        </p>
        <p className="text-center text-sm md:text-base mb-4">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isPresentCompany
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-3 md:ml-5 text-sm md:text-base">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
