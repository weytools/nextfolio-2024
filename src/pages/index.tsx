import React, { useEffect, useState, useRef } from "react";
import { Inter } from "next/font/google";
import ContactLinks from "@/components/ContactLinks";
import NavBlock from "@/components/NavBlock";
import AboutBlock from "@/components/AboutBlock";
import BentoBlock from "@/components/BentoBlock";
import ResumeBlock from "@/components/ResumeBlock";
import ProjectsBlock from "@/components/ProjectsBlock";
import { DotOrbitComponent, MeshGradientComponent } from "@/components/paper-design";

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
    }, { rootMargin: "0px", threshold: [.2] });
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
    // <main className={` relative bg-gradient-to-b from-[#01223B] to-[#00080F] text-white flex min-h-[calc(100vh-2rem)] flex-col items-center justify-between py-4 px-2 lg:p-8 ${inter.className}`}>
    <main className={`max-w-[100vw] relative gradient-background bg-[#01223B] text-white flex min-h-[calc(100vh-2rem)] flex-col items-center justify-between py-4 px-2 lg:p-8 ${inter.className}`}>
      {/* <MeshGradientComponent
      colors={['#CAD2C5', '#2F3E46', '#354F52', '#ff5600']}
      swirl={0.6}
      distortion={0}
      speed={0.2}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
    /> */}
      <div className="max-w-full bg-fin-blue lg:bg-transparent flex-wrap flex lg:flex-nowrap lg:justify-between flex-auto container mx-auto rounded-2xl ">
        {/* px-8 pt-24 */}
        <div className="  border-fin-blue-lighter2  rounded-l-2xl  items-start pt-16 lg:sticky lg:top-8 lg:flex lg:max-h-[calc(100vh-4rem)] lg:flex-col lg:justify-between  lg:max-w-lg flex-auto bg-transparent lg:px-16">
          <NavBlock activeSection={activeSection} />
          <ContactLinks />
        </div>
        <article className="bg-transparent  border-fin-blue-lighter2 flex flex-col gap-24 max-w-5xl w-full pb-8 pt-16 lg:px-16 rounded-r-2xl">
          <AboutBlock />
          {/* <BentoBlock /> */}
          <ResumeBlock />
          <ProjectsBlock />
        </article>
      </div>
    </main>
  );
}
