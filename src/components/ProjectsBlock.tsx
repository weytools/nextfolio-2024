/* eslint-disable @next/next/no-img-element */
import { projects, ProjectInfo } from "@/data/projects";
import { FileText } from "lucide-react";
import Link from "next/link";
export default function ResumeBlock() {
  return (
    // <div className="bg-gray p-8 rounded-lg flex flex-col gap-2">
    // <div className="relative before:block before:absolute before:-inset-px before:bg-lilac before:rounded-lg before:accent-background-rotating">
    <section id="projects" className="relative w-full rounded-lg p-8 pt-7">
      <div className="space-y-8">
        <div className="flex items-baseline justify-between">
          <h2 className="mb-4 text-3xl font-bold">Projects</h2>
        </div>
        <div className="flex flex-col gap-y-12">
          {projects.map((e) => (
            <ProjectCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </section>
    // </div>
    // </div>
  );
}

function ProjectCard(props: ProjectInfo) {
  return (
    <div className="group relative flex flex-col gap-6 rounded-2xl bg-fin-blue-light md:flex-row">
      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="mb-1 flex items-center gap-3">
          <span className="min-w-max rounded-md bg-fin-cream px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-fin-dark-blue">
            {props.subtitle}
          </span>
          {/* <span className="ml-2 rounded-md bg-fin-blue-light px-2 py-0.5 text-xs font-semibold text-fin-yellow">
            Full Stack
          </span> */}
        </div>
        <h3 className="flex items-center gap-2 text-xl font-bold text-white">
          {props.title}
          <span className="ml-3 h-0.5 flex-1 bg-gradient-to-l from-fin-yellow/20 via-fin-yellow/50 to-fin-yellow/80" />
        </h3>

        <div className="flex flex-row gap-8">
          <div>
            <div className="prose prose-sm prose-invert mb-2 mt-1 max-w-none text-white/90">
              {props.description}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {props.buttons.map((btn, i) =>
                btn.ref ? (
                  <a
                    key={i}
                    href={btn.ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl border border-fin-yellow/30 bg-fin-yellow px-3 py-1 text-sm font-medium text-fin-dark-blue/90 shadow-sm transition-all hover:bg-fin-yellow/90 hover:text-fin-dark-blue ${btn.isSource ? "ring-2 ring-fin-yellow/60 ring-offset-2" : ""}`}
                    dangerouslySetInnerHTML={{ __html: btn.label }}
                  />
                ) : null,
              )}
            </div>
          </div>
          <img
            src={props.image}
            alt={props.imageAlt}
            className="h-full w-full object-contain md:w-64"
            loading="lazy"
          />
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {props.footer.map((tech, i) => (
            <li
              key={i}
              className="rounded-2xl border border-white/10 bg-fin-blue-light px-3 py-1 text-xs font-medium tracking-wide text-white/70"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// <div className="flex flex-row gap-6 items-baseline">
//   <div className="bg-fin-cream  text-fin-dark-blue px-3 py-1 rounded-md text-xs font-bold inline uppercase tracking-tight min-w-max">{props.subtitle}</div>
//   <div className="flex flex-col grow">
//     <h3 className=" text-xl font-bold flex">{props.title}<div className="block bg-gradient-to-l from-fin-yellow/20 via-fin-yellow/50 to-fin-yellow/80 flex-grow h-px w-auto mt-4 ml-8" /></h3>
//     <p className={`inline-flex text-white/80 gap-x-3 items-center`}>
//       <img className='w-4 h-4 inline' alt={`${props.imageAlt} logo`} src={props.image} /><span className="text-white">{props.title}</span> <span>{props.description}</span></p>
//     <ul className='flex flex-wrap flex-row gap-x-3 gap-y-2 mt-4'>
//       {props.footer.map((r, i) => <li key={i} className="bg-fin-blue text-white/60 text-xs font-medium tracking-wide rounded-2xl py-1 px-3">{r}</li>)}
//     </ul>
//   </div>
// </div>
