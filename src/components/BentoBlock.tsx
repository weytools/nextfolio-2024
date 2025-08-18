import Image from "next/image";
export default function BentoBlock() {
  return (
    <div className="relative" id="about">

      <h2 className="text-4xl font-semibold relative mb-8">A developer who knows business</h2>
      <div className="grid gap-12 lg:grid-cols-2 lg:grid-rows-2 ">

        <div className="relative lg:row-span-2">
          <div className="bg-fin-blue-light rounded-md relative flex h-full flex-col overflow-hidden shadow-2xl border border-fin-blue-lighter2">
            <div className="px-8 pt-8 pb-3 sm:px-6 sm:pt-4 sm:pb-0">
              <p className="mt-2 max-w-lg text-bala text-white gap-2/80 max-lg:text-center">
                I comfortably collaborate with any department, making sure code and campaign deliverables are <span className=" italic  font-semibold tracking-wider text-white gap-2">absolutely aligned</span>.
              </p>
            </div>
            <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
              <div className="absolute inset-x-0 top-12 -bottom-4 overflow-hidden  rounded-t-lg  ">

                <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-fin-blue-light via-fin-blue-light/10 to-fin-blue-light/0" />
                <Image
                  alt=""
                  src="/projects/highlight-roi.png"
                  width="500"
                  height="300"
                  quality={100}
                  className="size-full rounded-t-3xl object-cover object-[50%_50%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:row-span-1 lg:col-span-1 h-72">
          <div className="bg-fin-blue-light rounded-md relative flex h-full flex-col overflow-hidden shadow-2xl border border-fin-blue-lighter2">
            <div className="px-8 pt-8 pb-3 sm:px-6 sm:pt-4 sm:pb-0">
              <p className="mt-2 max-w-lg text-bala text-white gap-2/80 max-lg:text-center">
                I create solutions that <span className=" italic text-white gap-2 font-semibold tracking-wider">fit with existing workflows</span>, not altering operations to fit the solution.
              </p>
            </div>
            <div className="@container relative w-full grow max-lg:mx-auto max-lg:max-w-sm">
              <div className="absolute inset-x-4 bottom-0 overflow-hidden h-28">

                <video
                  src="/projects/highlight-translations.mp4"
                  className="-mt-16 mb-4 w-full h-40 object-cover rounded-b-lg"
                  playsInline={true}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  controls={false}
                  preload="auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:row-span-1 lg:col-span-1">
          <div className="bg-fin-blue-light rounded-md relative flex h-full flex-col overflow-hidden shadow-2xl border border-fin-blue-lighter2">
            <div className="px-8 pt-8 pb-3 sm:px-6 sm:pt-4 sm:pb-0">
              <h3 className="text-white gap-2/80 lg:max-w-lg col-span-1">I love to learn, and am a DIY fanatic; there is no project I will not take on. Aside from programming, I&rsquo;ve practiced:</h3>
            </div>
            <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
              <div className="absolute inset-x-0 top-12 -bottom-4 overflow-hidden  rounded-t-lg ">

                <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-fin-blue-light via-fin-blue-light/50 to-fin-blue-light/0" />
                <div className="relative overflow-hidden py-3">

                  <div className="marquee whitespace-nowrap flex">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="flex gap-x-10 mx-4">
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />electrical
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />plumbing
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />HVAC
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />carpentry
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />small engines
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />appliance repair
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />midwifery
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />electrical
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />plumbing
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />HVAC
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />carpentry
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />small engines
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />appliance repair
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                          <Image src="/checkmark.svg" alt="" width={16} height={16} />midwifery
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


    </div>

  );
}
