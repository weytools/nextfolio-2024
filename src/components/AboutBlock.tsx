export default function AboutBlock() {
  return (
    <div className="relative before:block before:absolute before:-inset-px before:bg-fin-blue before:rounded-lg before:accent-background-rotating">

      <div className="border-gray border relative bg-fin-blue p-7 pt-6 rounded-lg flex flex-col gap-2 ">
        {/* <div className="absolute top-2 left-2 z-1 aspect-square w-6 rounded-tl-md border-t border-l border-white/20 " />
        <div className="absolute top-2 right-2 z-1 aspect-square w-6 rounded-tr-md border-t border-r border-white/20 " />
        <div className="absolute bottom-2 left-2 z-1 aspect-square w-6 rounded-bl-md border-b border-l border-white/20 " />
        <div className="absolute right-2 bottom-2 z-1 aspect-square w-6 rounded-br-md border-r border-b border-white/20 " /> */}
        <h2 className="text-4xl font-semibold relative mb-4">A developer who knows business</h2>
        <h3 className="text-white/80">With a business degree, I comfortably collaborate with any department. </h3>
        <p>Get me in your project kickoffs and I&rsquo;ll make sure code and campaign deliverables are absolutely <span className="text-white font-semibold tracking-wider">aligned.</span></p>
        <p className="text-white/80">I am a husband, father of 3, and a DIY zealot. I love to learn, there is no project I will not take on:
        </p>
        <ul className="relative list-disc list-image-[url(/checkmark.svg)] list-inside flex gap-x-16 gap-y-4 flex-wrap justify-center text-sm text-gray2">
          <li>HVAC</li>
          <li>electrical</li>
          <li>plumbing</li>
          <li>midwifery </li>
        </ul>
      </div>
    </div>
  );
}
