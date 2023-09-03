import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getSocials(): Promise<Social[]> {
  const query = groq`*[_type == 'social']`;
  const socials: Social[] = await client.fetch(query);
  return socials;
}

export async function getSkills(): Promise<Skill[]> {
  const query = groq`*[_type == 'skill']`;
  const skills: Skill[] = await client.fetch(query);
  return skills;
}

export async function getProjects(): Promise<Project[]> {
  const query = groq`*[_type == 'project']{
        ...,
        technologies[] -> 
      }`;
  const projects: Project[] = await client.fetch(query);
  return projects;
}

export async function getPageInfo(): Promise<PageInfo> {
  const query = groq`*[_type == 'pageInfo'][0]`;
  const pageInfo: PageInfo = await client.fetch(query);

  return pageInfo;
}

export async function getExperiences(): Promise<Experience[]> {
  const query = groq`*[_type == 'experience']`;
  const experiences: Experience[] = await client.fetch(query);
  return experiences;
}
