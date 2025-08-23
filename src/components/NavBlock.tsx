import { ChartNoAxesCombined, Dot, MonitorCheck, Tag } from "lucide-react";
import React from "react";
const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];
export default function NavBlock({ activeSection }: { activeSection: string }) {
  console.log('Active section:', activeSection);
  return (
    <div className="lg:text-left text-center">
      <TaglineBlock />
      <h1 className="text-6xl text-balance font-normal relative mb-4 font-interTight">
        Isaac Weymouth
      </h1>
      <h2 className="mb-6 text-lg tracking text-white/100 font-normal">
        Full stack developer{" "}
        <span className="text-white/65 font-normal">with a</span> business degree
      </h2>
      <ul className="hidden lg:flex flex-col mb-14 lg:mb-0 lg:mt-24 gap-2 lg:gap-4 justify-center lg:justify-start text-lg font-normal text-white/80">
        {sections.map((section) => (
          <li
            key={section.id}><a href={`#${section.id}`}
              className={`flex transition-colors duration-200 ${activeSection === section.id
                ? "text-white"
                : "text-white/50"
                }`}
            >
              {section.label}
              <div className={`block transition-colors bg-gradient-to-r from-current via-current/50 to-current/20 flex-grow h-px w-auto mt-4 ml-8 ${activeSection === section.id
                ? "text-fin-yellow"
                : "text-white/20"
                }`} />
            </a></li>
        ))}
      </ul>
    </div>
  );
}

const TaglineBlock = ({
  center,
  border,
}: {
  center?: boolean;
  border?: boolean;
}) => (
  <div
    className={`${center == true
      ? "mx-auto justify-self-center"
      : "inline-flex flex-col"
      } 
    ${border == true ? "border-lilac py-2 pb-3 px-4 border" : ""}
     text-fin-orange rounded-lg text-sm font-normal `}
  >
    <p className="flex justify-between mb-1">
      <ChartNoAxesCombined />
      <Dot className="animate-pulsebig" />
      <Dot className="animate-pulsebig [animation-delay:.25s]" />
      <Dot className="animate-pulsebig [animation-delay:.5s]" />
      <Dot className="animate-pulsebig [animation-delay:.75s]" />
      {/* <Dot className="animate-pulse [animation-delay:2s]" /> */}
      <MonitorCheck />
    </p>

    <p className="mb-6 text-fin-orange/80 text-base">
      Turning{" "}
      <span className="font-normal text-fin-orange">KPI&rsquo;s</span> into{" "}
      <span className="font-normal text-fin-orange">API&rsquo;s</span>
    </p>
  </div>
);
