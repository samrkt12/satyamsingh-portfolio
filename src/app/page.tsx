import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import {
  getExperiences,
  getPageInfo,
  getProjects,
  getSkills,
  getSocials,
} from "../../sanity/sanity-utils";

export default async function Home() {
  const socials = await getSocials();
  const skills = await getSkills();
  const projects = await getProjects();
  const pageInfo = await getPageInfo();
  const experiences = await getExperiences();

  return (
    <div
      className="bg-[rgb(36,36,36)]  text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#318ce7]/80 "
    >
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <Link href="#hero">
          <div className="flex items-center justify-center">
            <Image
              src="https://icon-library.com/images/top-arrow-icon/top-arrow-icon-14.jpg"
              width={40}
              height={40}
              alt="arrow-up"
              className="w-8 h-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover"
            />
          </div>
        </Link>
      </footer>
    </div>
  );
}

export const revalidate = 3600;
