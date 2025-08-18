import { PulsingBorderComponent } from "@/components/paper-design";
import { pulsingBorderPresets } from "@paper-design/shaders-react";
import Image from "next/image";
// import { Marquee } from "@/components/Marquee";
import Marquee from "react-fast-marquee";

export default function AboutBlock() {
  return (
    <div className="relative " id="about">

      <div className="relative bg-fin-blue rounded-lg flex flex-col gap-2 ">
        <div className="relative before:block before:absolute before:-inset-px before:bg-fin-blue before:rounded-lg before:accent-background-rotating" id="about">

          <div className="border-fin-yellow/10 relative bg-fin-blue p-7 pt-6 rounded-lg flex flex-col gap-2 ">
            {/* <div className="absolute top-2 left-2 z-1 aspect-square w-6 rounded-tl-md border-t border-l border-white/20 " />
        <div className="absolute top-2 right-2 z-1 aspect-square w-6 rounded-tr-md border-t border-r border-white/20 " />
        <div className="absolute bottom-2 left-2 z-1 aspect-square w-6 rounded-bl-md border-b border-l border-white/20 " />
        <div className="absolute right-2 bottom-2 z-1 aspect-square w-6 rounded-br-md border-r border-b border-white/20 " /> */}
            <h2 className="text-6xl text-balance font-extrabold relative mb-4">A developer who knows business</h2>
            <h3 className="text-white/80  text-xl mb-2">I create solutions that <span className="text-white italic font-semibold tracking-wider">fit with existing workflows</span>, not altering operations to fit the solution.</h3>
            <h3 className="text-white/80  text-xl mb-2">I collaborate with any department,  I&rsquo;ll make sure code and project deliverables are <span className="text-white font-semibold tracking-wider italic">absolutely aligned</span>.</h3>
            <h3 className="text-white/80  text-xl mb-2">I love to learn, and am a <span className="text-white font-semibold tracking-wider italic">DIY fanatic</span>; there is no project I will not take on. Aside from programming, I practice:</h3>

            <Marquee gradient={true} autoFill={true} speed={120} gradientColor="#013A63" gradientWidth={50} className="max-w-full text-center mx-auto">
              <Image src="/checkmark.svg" alt="" width={16} height={16} className="mr-2 ml-6" />electrical
              <Image src="/checkmark.svg" alt="" width={16} height={16} className="mr-2 ml-6" />plumbing
              <Image src="/checkmark.svg" alt="" width={16} height={16} className="mr-2 ml-6" />HVAC
              <Image src="/checkmark.svg" alt="" width={16} height={16} className="mr-2 ml-6" />carpentry
              <Image src="/checkmark.svg" alt="" width={16} height={16} className="mr-2 ml-6" />small engines
              <Image src="/checkmark.svg" alt="" width={16} height={16} className="mr-2 ml-6" />appliance repair
              <Image src="/checkmark.svg" alt="" width={16} height={16} className="mr-2 ml-6" />midwifery
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
