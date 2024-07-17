export default function AboutBlock() {
  return (
    <div className="bg-gray p-8 rounded-lg flex flex-col gap-2">
      <h2 className="text-4xl font-semibold">A little about me</h2>
      <p className="">Educated in business, I comfortably collaborate with any department. Get me in your project kickoffs and I&rsquo;ll make sure code and campaign deliverables are absolutely <span className="text-blue font-semibold italic tracking-wider">ALIGNED.</span></p>
      <p className="">I am a husband, father of 3, and a DIY zealot. I love to learn, there is no project I will not take on:
      </p>
      <ul className="list-disc list-image-[url(/checkmark.svg)] list-inside flex gap-16 justify-center text-sm text-gray2">
          <li>HVAC</li>
          <li>electrical</li>
          <li>plumbing</li>
          <li>midwifery </li>
        </ul>
    </div>
  );
}
