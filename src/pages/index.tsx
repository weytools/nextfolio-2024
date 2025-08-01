import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import ContactLinks from "@/components/ContactLinks";
import IntroBlock from "@/components/IntroBlock";
import NavBlock from "@/components/NavBlock";
import AboutBlock from "@/components/AboutBlock";
import ResumeBlock from "@/components/ResumeBlock";
import ProjectsBlock from "@/components/ProjectsBlock";

const inter = Inter({ subsets: ["latin"] });

const sectionIds = ["about", "experience", "projects"];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const aboutRef = useRef();
  const expRef = useRef();
  const proRef = useRef();
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: "0px", threshold: [1] });
    setTimeout(() => {
      // Find and observe all elements
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);
    return () => observer.disconnect();
  }, []);

  return (
    // bg-gradient-to-b from-purp-0 to-purp-1
    <main className={` bg-gradient-to-b from-[#020711] to-[#01050C] text-white flex min-h-screen flex-col items-center justify-between py-4 px-2 lg:p-8 ${inter.className}`}>
      {/* <div className="bg-dark accent-background flex-wrap flex lg:flex-nowrap lg:justify-between lg:gap-16 flex-auto container mx-auto px-8 rounded-2xl pt-24"> */}
      <div className="bg-fin-blue lg:bg-transparent flex-wrap flex lg:flex-nowrap lg:justify-between flex-auto container mx-auto rounded-2xl ">
        {/* px-8 pt-24 */}
        <div className=" rounded-l-2xl  items-start pt-16 lg:sticky lg:top-8 lg:flex lg:max-h-[calc(100vh-2rem)] lg:flex-col lg:justify-between  lg:max-w-lg flex-auto bg-fin-dark-blue lg:px-16">
          <NavBlock activeSection={activeSection} />
          <ContactLinks />
        </div>
        <article className=" flex flex-col gap-24 max-w-5xl pb-8 pt-16 lg:px-16 bg-fin-blue rounded-r-2xl">
          <IntroBlock />
          <AboutBlock />
          <ResumeBlock />
          <ProjectsBlock />
        </article>
      </div>
    </main>
  );
}
