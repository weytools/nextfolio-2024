import { PulsingBorderComponent } from "@/components/paper-design";
import { pulsingBorderPresets } from "@paper-design/shaders-react";
import Image from "next/image";
// import { Marquee } from "@/components/Marquee";
import Marquee from "react-fast-marquee";

export default function AboutBlock() {
  return (
    <div className="relative " id="about">

      <div className="relative bg-fin-blue/0 rounded-lg flex flex-col gap-2 glass-border ">
        <div className="relative before:block before:absolute before:-inset-px before:z-10 before:rounded-lg before:accent-background-rotating" id="about">

          <div className="border-fin-yellow/10 relative  bg-fin-blue/50 backdrop-blur-3xl p-12 pt-11 rounded-lg block gap-2  ">
            {/* <div className="absolute top-2 left-2 z-1 aspect-square w-6 rounded-tl-md border-t border-l border-white/20 " />
        <div className="absolute top-2 right-2 z-1 aspect-square w-6 rounded-tr-md border-t border-r border-white/20 " />
        <div className="absolute bottom-2 left-2 z-1 aspect-square w-6 rounded-bl-md border-b border-l border-white/20 " />
        <div className="absolute right-2 bottom-2 z-1 aspect-square w-6 rounded-br-md border-r border-b border-white/20 " /> */}
            <h2 className="text-6xl text-balance font-normal relative mb-6 font-interTight">A developer who knows business</h2>
            <h3 className="text-white/80  text-lg font-light mb-2">I create solutions that <span className="text-white italic font-semibold ">match company goals</span>, and fit within current workflows.</h3>
            <h3 className="text-white/80  text-lg font-light mb-2">I collaborate directly <span className="text-white font-semibold italic">with any department</span>, no engineering tranlations necessary.</h3>
            <h3 className="text-white/80  text-lg font-light mb-2">I am an autodidactic <span className="text-white font-semibold tracking-wider italic">DIY fanatic</span> &ndash; there is no project I will not take on. Aside from programming, I practice:</h3>

            <Marquee gradient={false} autoFill={true} speed={120} gradientColor="#013A6355" gradientWidth={50} className="lg:max-w-sm xl:max-w-lg 2xl:max-w-full text-center mx-auto">
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
