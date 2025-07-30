import { experience } from "@/data/experience";
import { FileText } from "lucide-react";
import Link from "next/link";
export default function ResumeBlock() {

  return (
    // <div className="bg-gray p-8 rounded-lg flex flex-col gap-2">
    // <div className="relative before:block before:absolute before:-inset-px before:bg-lilac before:rounded-lg before:accent-background-rotating">
    <section className="w-full p-8 relative rounded-lg border-gray border bg-gray/40">

      <div className="space-y-8">
        <div className="flex justify-between items-baseline">
          <h2 className="mb-4 text-3xl font-bold">Experience</h2>
        </div>
        <div className="gap-y-12 flex flex-col">
          {experience.map(e => <ResumeChunk key={e.dates} {...e} />)}
        </div>
      </div>
      <div className="mt-16 text-center">
      <Link href="/Resume-Isaac-Weymouth.pdf" target="_blank" className="text-dark bg-green hover:brightness-125 transition-all border-4 inline-block py-2 px-4 rounded-2xl text-lg font-semibold">
      <FileText className="inline align-top mr-1" /> Full Resume</Link>

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
  techs: string[]
  responsibilities: string[]
  continues?: boolean
  continued?: boolean
}
function ResumeChunk({ dates, role, company, location,techs, responsibilities, continues, continued }: ChunkInfo) {
  return (
<>
    <div className="flex flex-row gap-6 items-baseline">
      <div className="bg-blue  text-dark px-3 py-1 rounded-md text-sm font-semibold inline uppercase tracking-tight min-w-max">{dates}</div>
      <div className="flex flex-col grow">
        <h3 className=" text-xl font-bold flex">{role}<div className="block bg-gradient-to-l from-green/20 via-green/80 to-green/80 flex-grow h-px w-auto mt-4 ml-8"/></h3>
        <p className={`inline-block text-gray2`}>{company} <span className="mx-1">|</span> {location}</p>
        <ul className='flex flex-wrap flex-row gap-4 mt-4'>
          {techs.map((r, i) => <li key={i} className="bg-blue/10 text-blue text-xs font-medium tracking-wide rounded-2xl py-1 px-3">{r}</li>)}
        </ul>
      </div>
    </div>

    </>
  )
}
function ResumeChunkOld({ dates, role, company, location, responsibilities, continues, continued }: ChunkInfo) {
  return (
    <div className="relative">
      {/* <div className="bg-green text-dark px-3 py-1 rounded-md text-sm font-medium inline-block">
        {company}
      </div> */}
      <div className="flex items-baseline gap-6 mb-4">
        <div className="flex flex-col">
          <h3 className="mb-1 text-xl font-bold ">{role}</h3>
          {!continued && (<p className={`inline-block text-gray2`}>{company} <span className="mx-1">|</span> {location}</p>)}
        </div>
        {!continued && (<div className="bg-gradient-to-r from-blue/20 via-blue/80 to-blue/80 flex-grow h-px rounded-full self-center"></div>)}
        {/* <div className="ml-auto bg-muted px-3 py-1 rounded-md text-sm font-medium">{company}</div> */}
        {/* after:h-[calc(100%+2rem)] after:bg-green after:w-1 after:absolute after:block after:top-4 after:right-0 */}
        <div className="bg-blue ml-auto text-dark px-3 py-1 rounded-md text-sm font-medium inline-block uppercase tracking-tight self-center">{dates}</div>
      </div>
      <div className="flex flex-row">
        <ul className={`list-disc space-y-3 text-muted-foreground ml-6 marker:text-green`}>
          {responsibilities.map((r, i) => <li key={i} className="">{r}</li>)}
        </ul>
        {true && (<div className="bg-gradient-to-b rounded-full from-blue/80 via-blue/80 to-blue/20 flex-shrink-0 w-px ml-4 mr-3 -mt-5 -mb-10"></div>)}
      </div>
    </div>
  )
}