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
        <div className="flex items-center mb-1">
          <div className=" text-fin-cream py-1 rounded-md text-xs inline uppercase font-interTight min-w-max">
            {props.subtitle}
          </div>
          <div className="block bg-gradient-to-l from-white/20 via-white/50 to-white/80 flex-grow h-px w-auto ml-2" />
        </div>
        <h3 className="flex items-center gap-2 text-3xl  font-interTight text-white font-medium">
          {props.title}
        </h3>

        <div className="flex flex-row gap-8 flex-wrap lg:flex-nowrap">
          <div className="order-1 lg:order-0 ">
            <div className="prose prose-sm prose-invert mt-1 max-w-none text-white/90 mb-4">
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
                    className={`inline-flex items-center gap-2 rounded-lg border border-white bg-white/10 px-3 py-1 text-sm font-normal text-white shadow-sm backdrop-blur-md transition-all hover:bg-white/20  ${btn.isSource ? "ring-2 ring-fin-yellow/60 ring-offset-2" : ""}`}
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
