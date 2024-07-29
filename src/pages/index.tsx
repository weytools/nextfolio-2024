import Image from "next/image";
import { Inter } from "next/font/google";
import ContactLinks from "@/components/ContactLinks";
import IntroBlock from "@/components/IntroBlock";
import NavBlock from "@/components/NavBlock";
import AboutBlock from "@/components/AboutBlock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-gradient-to-b from-purp-0 to-purp-1 text-white flex min-h-screen flex-col items-center justify-between py-4 px-2 lg:p-8 ${inter.className}`}>
      <div className="bg-dark accent-background flex-wrap flex lg:flex-nowrap lg:justify-between lg:gap-24 flex-auto container mx-auto p-8 rounded-2xl py-24">
        <div className="items-start lg:sticky lg:top-0 lg:flex lg:max-h-screen  lg:flex-col lg:justify-between flex-auto">
          <NavBlock />
          <ContactLinks />
        </div>
        <article className=" flex flex-col gap-8">
          <IntroBlock />
          <AboutBlock />
        </article>
      </div>
    </main>
  );
}
