/* eslint-disable @next/next/no-img-element */
import { experience } from "@/data/experience";
import { FileText } from "lucide-react";
import Link from "next/link";
export default function ResumeBlock() {

  return (
    // <div className="bg-gray p-8 rounded-lg flex flex-col gap-2">
    // <div className="relative before:block before:absolute before:-inset-px before:bg-lilac before:rounded-lg before:accent-background-rotating">
    <section className="w-full relative " id="experience" >

      <h2 className="mb-8 text-5xl font-normal font-interTight">Experience</h2>
      <div className="rounded-lg p-8 pt-7  bg-fin-blue/50 backdrop-blur-3xl glass-border">
        <div className="space-y-8">
          <div className="flex justify-between items-baseline">
          </div>
          <div className="gap-y-12 flex flex-col">
            {experience.map(e => <ResumeChunk key={e.dates} {...e} />)}
          </div>
        </div>
        <div className="mt-16 text-center text-base relative">
          <Link href="/Resume-Isaac-Weymouth.pdf" target="_blank" className=" gap-2 inline-flex items-center text-fin-cream border-fin-cream border bg-fin-cream/10 hover:brightness-125 hover:bg-fin-cream/15 transition-all inline-block py-1 px-3 rounded-lg  font-medium">
            <FileText className="inline  w-4 h-auto" />Full Resume
          </Link>
          <div className="flex -top-1 absolute w-full pointer-events-none ">
            <div className="shrink-0 block mt-2 bg-gradient-to-r from-white/20 via-white/50 to-white/50 flex-grow h-px rounded-full self-center" />
            <h2 className="mt-auto text-center self-center text-white font-normal text-transparent invisible py-1 px-8 "><FileText className="inline  w-4 h-auto" />Full Resume</h2>
            <div className="shrink-0 block mt-2 bg-gradient-to-l from-white/20 via-white/50 to-white/50 flex-grow h-px rounded-full self-center" />
          </div>
        </div>
      </div>
    </section>
    // </div>
    // </div>
  );
}
export type ChunkInfo = {
  dates: string
  role: string
  company: string
  location: string
  icon: string
  techs: string[]
  responsibilities: string[]
  continues?: boolean
  continued?: boolean
}

function ResumeChunk({ dates, role, company, location, techs, responsibilities, continues, continued, icon }: ChunkInfo) {
  return (
    <>
      <div className="flex flex-row gap-6 items-baseline">

        <div className="flex flex-col grow">
          <div className="flex items-center mb-1">
            <div className=" text-fin-cream py-1 rounded-md text-xs inline uppercase font-interTight min-w-max">
              {dates.replace(/-/g, `–`)}
            </div>
            <div className="block bg-gradient-to-l from-white/20 via-white/50 to-white/80 flex-grow h-px w-auto ml-2" />
          </div>
          <h3 className="mb-1  text-3xl font-medium font-interTight  flex">{role}

          </h3>
          <p className={`inline-flex text-white/80 gap-x-3 items-center mb-2 text-balance`}>
            <img className='w-4 h-4 inline' alt={`${company} logo`} src={icon} /><span className="text-white">{company}</span> <span>{location}</span></p>
          <ul className='flex flex-wrap flex-row gap-x-3 gap-y-2 mt-4'>
            {techs.map((r, i) => <li key={i} className="rounded-2xl  bg-fin-blue-lighter/50 px-3 py-1 text-xs font-normal tracking-wide text-white/80">{r}</li>)}
          </ul>
        </div>
      </div>

    </>
  )
}
function ResumeChunkOld({ dates, role, company, location, responsibilities, continues, continued }: ChunkInfo) {
  return (
    <div className="relative">
      {/* <div className="bg-fin-yellow text-dark px-3 py-1 rounded-md text-sm font-medium inline-block">
        {company}
      </div> */}
      <div className="flex items-baseline gap-6 mb-4">
        <div className="flex flex-col">
          <h3 className="mb-1 text-xl font-bold ">{role}</h3>
          {!continued && (<p className={`inline-block text-gray2`}>{company} <span className="mx-1">|</span> {location}</p>)}
        </div>
        {!continued && (<div className="bg-gradient-to-r from-blue/20 via-blue/80 to-blue/80 flex-grow h-px rounded-full self-center"></div>)}
        {/* <div className="ml-auto bg-muted px-3 py-1 rounded-md text-sm font-medium">{company}</div> */}
        {/* after:h-[calc(100%+2rem)] after:bg-fin-yellow after:w-1 after:absolute after:block after:top-4 after:right-0 */}
        <div className="bg-blue ml-auto text-dark px-3 py-1 rounded-md text-sm font-medium inline-block uppercase tracking-tight self-center">{dates}</div>
      </div>
      <div className="flex flex-row">
        <ul className={`list-disc space-y-3 text-muted-foreground ml-6 marker:text-fin-yellow`}>
          {responsibilities.map((r, i) => <li key={i} className="">{r}</li>)}
        </ul>
        {true && (<div className="bg-gradient-to-b rounded-full from-blue/80 via-blue/80 to-blue/20 flex-shrink-0 w-px ml-4 mr-3 -mt-5 -mb-10"></div>)}
      </div>
    </div>
  )
}