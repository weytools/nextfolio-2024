import { ChartNoAxesCombined, Dot, MonitorCheck, Tag } from "lucide-react";
export default function NavBlock() {
  return (
    <div className="lg:text-left text-center ">
      <TaglineBlock />
      <h1 className="text-5xl lg:text-5xl font-extrabold mb-4">
        Isaac Weymouth
      </h1>
      <h2 className="mb-6 text-lg tracking text-white/85 font-bold">
        Full stack developer <span className="text-white/65 font-normal">with a</span> business degree
      </h2>
      <ul className="flex flex-col  gap-2 lg:gap-4 justify-center lg:justify-start text-lg font-semibold text-white/80">
        <li>about</li>
        <li>experience</li>
        <li>projects</li>
      </ul>
    </div>
  );
}

const TaglineBlock = ({ center, border }: { center?: boolean, border?: boolean }) => (
  <div
    className={`${center == true ? "mx-auto justify-self-center" : "inline-flex flex-col"
      } 
    ${border == true ? "border-lilac py-2 pb-3 px-4 border" : ""
      }  text-lilac rounded-lg text-sm font-normal `}
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

    <p className="mb-2 text-lilac/90">Turning <span className="font-bold text-lilac">KPI&rsquo;s</span> into <span className="font-bold text-lilac">API&rsquo;s</span></p>
  </div>
);
