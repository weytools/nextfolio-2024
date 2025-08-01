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
    <div className="lg:text-left text-center ">
      <TaglineBlock />
      <h1 className="text-5xl lg:text-5xl font-extrabold mb-4">
        Isaac Weymouth
      </h1>
      <h2 className="mb-6 text-lg tracking text-white/85 font-bold">
        Full stack developer{" "}
        <span className="text-white/65 font-normal">with a</span> business degree
      </h2>
      <ul className="flex flex-col mt-24 gap-2 lg:gap-4 justify-center lg:justify-start text-lg font-semibold text-white/80">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`flex transition-colors duration-200 ${activeSection === section.id
              ? "text-white"
              : "text-white/50"
              }`}
          >
            {section.label}
            <div className="block bg-gradient-to-l from-white/20 via-white/50 to-white/80 flex-grow h-px w-auto mt-4 ml-8" />
          </li>
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
     text-lilac rounded-lg text-sm font-normal `}
  >
    <p className="flex justify-between mb-1">
      <ChartNoAxesCombined />
      <Dot className="animate-pulse" />
      <Dot className="animate-pulse [animation-delay:.25s]" />
      <Dot className="animate-pulse [animation-delay:.5s]" />
      <Dot className="animate-pulse [animation-delay:.75s]" />
      {/* <Dot className="animate-pulse [animation-delay:2s]" /> */}
      <MonitorCheck />
    </p>

    <p className="mb-2 text-lilac/90">
      Turning{" "}
      <span className="font-bold text-lilac">KPI&rsquo;s</span> into{" "}
      <span className="font-bold text-lilac">API&rsquo;s</span>
    </p>
  </div>
);
