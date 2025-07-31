/* eslint-disable @next/next/no-img-element */
import { projects, ProjectInfo } from "@/data/projects";
import { FileText } from "lucide-react";
import Link from "next/link";
export default function ResumeBlock() {

  return (
    // <div className="bg-gray p-8 rounded-lg flex flex-col gap-2">
    // <div className="relative before:block before:absolute before:-inset-px before:bg-lilac before:rounded-lg before:accent-background-rotating">
    <section className="w-full p-8 pt-7 relative rounded-lg  bg-fin-blue-light">

      <div className="space-y-8">
        <div className="flex justify-between items-baseline">
          <h2 className="mb-4 text-3xl font-bold">Projects</h2>
        </div>
        <div className="gap-y-12 flex flex-col">
          {projects.map(e => <ProjectCard key={e.title} {...e} />)}
        </div>
      </div>
      <div className="mt-16 text-center">
        <Link href="/Resume-Isaac-Weymouth.pdf" target="_blank" className="text-fin-dark-blue bg-fin-cream hover:brightness-125 transition-all inline-block py-2 px-4 rounded-2xl text-lg font-semibold">
          <FileText className="inline align-top mr-1" /> Full Resume</Link>

      </div>
    </section>
    // </div>
    // </div>
  );
}

function ProjectCard(props: ProjectInfo) {
  return (
    <>
      <div className="flex flex-row gap-6 items-baseline">
        <div className="bg-fin-cream  text-fin-dark-blue px-3 py-1 rounded-md text-xs font-bold inline uppercase tracking-tight min-w-max">{props.subtitle}</div>
        <div className="flex flex-col grow">
          <h3 className=" text-xl font-bold flex">{props.title}<div className="block bg-gradient-to-l from-fin-yellow/20 via-fin-yellow/50 to-fin-yellow/80 flex-grow h-px w-auto mt-4 ml-8" /></h3>
          <p className={`inline-flex text-white/80 gap-x-3 items-center`}>
            <img className='w-4 h-4 inline' alt={`${props.imageAlt} logo`} src={props.image} /><span className="text-white">{props.title}</span> <span>{props.description}</span></p>
          <ul className='flex flex-wrap flex-row gap-x-3 gap-y-2 mt-4'>
            {props.footer.map((r, i) => <li key={i} className="bg-fin-blue text-white/60 text-xs font-medium tracking-wide rounded-2xl py-1 px-3">{r}</li>)}
          </ul>
        </div>
      </div>

    </>
  )
}