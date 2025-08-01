export default function AboutBlock() {
  return (
    <div className="relative before:block before:absolute before:-inset-px before:bg-fin-blue before:rounded-lg before:accent-background-rotating" id="about">

      <div className="border-fin-yellow/10 border relative bg-fin-blue p-7 pt-6 rounded-lg flex flex-col gap-2 ">
        {/* <div className="absolute top-2 left-2 z-1 aspect-square w-6 rounded-tl-md border-t border-l border-white/20 " />
        <div className="absolute top-2 right-2 z-1 aspect-square w-6 rounded-tr-md border-t border-r border-white/20 " />
        <div className="absolute bottom-2 left-2 z-1 aspect-square w-6 rounded-bl-md border-b border-l border-white/20 " />
        <div className="absolute right-2 bottom-2 z-1 aspect-square w-6 rounded-br-md border-r border-b border-white/20 " /> */}
        <h2 className="text-4xl font-semibold relative mb-4">A developer who knows business</h2>
        <h3 className="text-white/80 lg:max-w-lg">I comfortably collaborate with any department,  I&rsquo;ll make sure code and campaign deliverables are <span className="text-white font-semibold tracking-wider">absolutely aligned.</span></h3>
        <p className="text-white/80  lg:max-w-lg mb-2">I am a husband, homesteader, father of 3, and a DIY fanatic. <br />I love to learn, there is no project I will not take on:
        </p>
        <ul className="relative lg:max-w-lg list-disc list-image-[url(/checkmark.svg)] list-inside flex gap-x-16 gap-y-4 flex-wrap justify-center text-sm text-gray2">
          <li>HVAC</li>
          <li>electrical</li>
          <li>plumbing</li>
          <li>midwifery </li>
        </ul>
      </div>
    </div>
  );
}
