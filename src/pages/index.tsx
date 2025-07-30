import Image from "next/image";
import { Inter } from "next/font/google";
import ContactLinks from "@/components/ContactLinks";
import IntroBlock from "@/components/IntroBlock";
import NavBlock from "@/components/NavBlock";
import AboutBlock from "@/components/AboutBlock";
import ResumeBlock from "@/components/ResumeBlock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // bg-gradient-to-b from-purp-0 to-purp-1
    <main className={`bg-gradient-to-b from-dark to-purp-0 text-white flex min-h-screen flex-col items-center justify-between py-4 px-2 lg:p-8 ${inter.className}`}>
      <div className="bg-dark accent-background flex-wrap flex lg:flex-nowrap lg:justify-between lg:gap-16 flex-auto container mx-auto px-8 rounded-2xl pt-24">
        <div className="items-start lg:sticky lg:top-20 lg:flex lg:max-h-[calc(100vh-8rem)]  lg:flex-col lg:justify-between  lg:max-w-lg flex-auto">
          <NavBlock />
          <ContactLinks />
        </div>
        <article className=" flex flex-col gap-24 max-w-5xl mb-8">
          <IntroBlock />
          <AboutBlock />
          <ResumeBlock />
        </article>
      </div>
    </main>
  );
}
