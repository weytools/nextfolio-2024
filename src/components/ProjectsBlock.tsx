/* eslint-disable @next/next/no-img-element */
import { projects, ProjectInfo } from "@/data/projects";
import { FileText, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ResumeBlock() {
  return (
    // <div className="bg-gray p-8 rounded-lg flex flex-col gap-2">
    // <div className="relative before:block before:absolute before:-inset-px before:bg-lilac before:rounded-lg before:accent-background-rotating">
    <section id="projects" className="relative w-full ">
      <div className="space-y-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-5xl font-normal font-interTight">Projects</h2>
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
    <div className="group relative flex flex-col gap-6 glass-border rounded-2xl bg-fin-blue-light/50 backdrop-blur-3xl md:flex-row">
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
        <h3 className="flex items-center gap-2 text-3xl  font-interTight text-white font-medium">
          {props.title}
          <span className="ml-3 h-0.5 flex-1 bg-gradient-to-l from-fin-yellow/20 via-fin-yellow/50 to-fin-yellow/80" />
        </h3>

        <div className="flex flex-row gap-8 flex-wrap lg:flex-nowrap">
          <div className="order-1 lg:order-0 ">
            <div className="prose prose-sm prose-invert mb-2 mt-1 max-w-none text-white/90 mb-4">
              {props.description}
            </div>
            <div className="flex flex-wrap gap-2">
              {props.buttons.map((btn, i) =>
                btn.ref ? (
                  <a
                    key={i}
                    href={btn.ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-lg border border-fin-yellow bg-fin-yellow/10 px-3 py-1 text-sm font-normal text-fin-yellow shadow-sm backdrop-blur-md transition-all hover:bg-fin-yellow/20  ${btn.isSource ? "ring-2 ring-fin-yellow/60 ring-offset-2" : ""}`}
                    dangerouslySetInnerHTML={{ __html: btn.label }}
                  />
                ) : null,
              )}
            </div>
          </div>
          {props.video ? (
            <VideoPlayer
              video={props.video}
              image={props.image}
              alt={props.imageAlt}
            />
          ) : (
            <img
              src={props.image}
              alt={props.imageAlt}
              className="order-0 lg:order-1 h-full w-full object-contain md:w-80 "
              loading="lazy"
            />
          )}
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {props.footer.map((tech, i) => (
            <li
              key={i}
              className="rounded-2xl  bg-fin-blue-lighter2/40 px-3 py-1 text-xs font-normal tracking-wide text-white/80"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function VideoPlayer({ video, image, alt }: { video: string; image: string; alt: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const startVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="order-0 lg:order-1 relative h-full w-full flex-basis-[320px]">
      {isPlaying ? (
        <video
          src={video}
          className="h-full w-full object-contain  md:w-96 "
          autoPlay
          loop
          muted
          controls
          playsInline
        />
      ) : (
        <div className="relative cursor-pointer md:w-80 " onClick={startVideo}>
          <img
            src={image}
            alt={alt}
            className="h-full w-full object-contain"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40">
            <div className="rounded-full bg-fin-yellow p-3 text-fin-dark-blue shadow-lg transition-transform hover:scale-105">
              <Play size={24} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
