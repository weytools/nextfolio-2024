import React, { useEffect, useState, useRef } from "react";
import { Inter, Inter_Tight, } from "next/font/google";
import ContactLinks from "@/components/ContactLinks";
import NavBlock from "@/components/NavBlock";
import AboutBlock from "@/components/AboutBlock";
import BentoBlock from "@/components/BentoBlock";
import ResumeBlock from "@/components/ResumeBlock";
import ProjectsBlock from "@/components/ProjectsBlock";
import { DotOrbitComponent, MeshGradientComponent } from "@/components/paper-design";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], weight: "variable" });
const interTight = Inter_Tight({ subsets: ["latin"], weight: "variable", });

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
    },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },);
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
    <>
      <Head>
        <title>Portfolio of Isaac Weymouth</title>
        <style>
          {`
            :root {
              --font-inter: ${inter.style.fontFamily};
              --font-inter-tight: ${interTight.style.fontFamily};
            }
          `}
        </style>
      </Head>
      <main className={`max-w-[100vw] relative gradient-background bg-[#01223B] text-white flex min-h-[calc(100vh-2rem)] flex-col items-center justify-between py-4 px-2 lg:p-8 font-sans`}>
        <MeshGradientComponent
          colors={['#012A4A', '#012A4A', '#013A63', '#014F86', '#0077B6', '#ffb703']}
          swirl={0.6}
          distortion={1}
          speed={0.3}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div className="max-w-full bg-fin-blue lg:bg-transparent flex-wrap flex lg:flex-nowrap lg:justify-between flex-auto container mx-auto rounded-lg ">
          {/* px-8 pt-24 */}
          <div className=" z-10  glass-border bg-fin-blue-light/50 backdrop-blur-2xl rounded-l-lg rounded-r-lg lg:rounded-r-none items-start pt-6 px-6 lg:pt-12 lg:px-12 xl:pt-16 lg:sticky lg:top-8 lg:flex lg:max-h-[calc(100vh-4rem)] lg:flex-col lg:justify-between  lg:max-w-lg flex-auto  xl:px-16">
            <NavBlock activeSection={activeSection} />
            <ContactLinks />
          </div>
          <article className="bg-transparent  border-fin-blue-lighter2 flex flex-col gap-16 lg:gap-36 max-w-5xl w-full pb-8 pt-16 lg:px-16 rounded-r-lg">
            <AboutBlock />
            {/* <BentoBlock /> */}
            <ResumeBlock />
            <ProjectsBlock />
          </article>
        </div>
      </main>
    </>
  );
}
