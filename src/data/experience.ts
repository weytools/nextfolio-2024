import { ChunkInfo } from "@/components/ResumeBlock";
export const experience: ChunkInfo[] = [
  {
    // dates: "Apr 2023 - Present",
    dates: "Jan 2021 - Present",
    role: "Senior Web Developer",
    company: 'Emburse',
    location: 'Portland, ME',
    techs: ['Vercel', 'Next.js', 'Sanity', 'Google Tag Manager', 'Google Analytics 4', 'Google Ads', 'Marketo'],
    responsibilities: [
      "Led initiative to replace outdated tech stack to resolve scalability and user experience challenges. Selected and migrated to Vercel, Next.js, and Sanity, reducing annual fixed costs by over 25% while aligning with broader, company-wide modernization strategies.",

      "Collaborated with agency Rangle.io to quickly develop a baseline repository that would serve as a direct replacement, while consistently iterating for UX improvements and page creation speed.",

      "Creating specialized CMS entry experiences, delivering on Emburse's unique business needs with custom components that communicate frontend designs with easy-to-digest options, while not overwhelming users, facilitating simple page creation with clear expectations.",

      "Continually optimizing the frontend for performance, and showcasing our commitment to consistent innovation through new section designs, interactive tools, and animations.",

      "Providing ongoing implementation, maintenance, and support for marketing platforms and APIs, including Google Tag Manager, Analytics 4, Ads, Marketo, and various other embeds and scripts.",
    ],
    continues: true,
    icon: '/emburse-icon.svg',
  },
  // {
  //   dates: "Jan 2021 - Apr 2023",
  //   role: "Web Developer",
  //   company: 'Emburse',
  //   location: 'Portland, ME',
  //   responsibilities: [
  //     "Architecting reusable and marketer accessible CMS components for use across 4 unique product marketing websites; allowing for distinctive product styles via CSS & backend logic, while maintaining umbrella company branding guidelines. Using Crownpeak CMS with C# and ASP for component & template building, on Apache Tomcat JSP servers for backend; jQuery, vanilla JS & Bootstrap centric frontend.",

  //     "Creating and updating digital marketing efforts including campaign support, interactive calculators, gates and forms supported with Google Tag Manager, Google Analytics, Search Console, Adobe Marketo, HubSpot, and Salesforce connectors via API's and embeds.",
  //   ],
  //   continued: true,
  // },
  {
    dates: "May 2019 - Apr 2020",
    role: "Software Engineer",
    company: 'Panolam Surface Systems',
    location: 'Auburn, ME',
    techs: ['C#', '.NET', 'ASP', 'SQL', 'WinForms', 'WPF'],
    responsibilities: [
      "Architect of a comprehensive audit system for a multi-line manufactured product. Sole full stack developer envisioning and executing a normalized database with a plant-wide, multi-user GUI using agile methodology.",
      "Authored numerous smaller scale, specific-case Windows utilities across all departments. Identified productivity bottlenecks across the manufacturing stream and created digital solutions to decongest the workflow. Using thoughtful UX design, I focus on operator ease of use and support with visual aids; software should do exactly what we expect."
    ],
    icon: '/panolam-icon.png',
  },
  {
    dates: "Oct 2015 - Oct 2018",
    role: "Web Stores Program Manager",
    company: 'Shads Advertising',
    location: 'Auburn, ME',
    techs: ['jQuery', 'PHP', 'Adobe Creative Suite', 'Packing tape'],
    responsibilities: [
      "Created, piloted, and managed the web store program. Designed client web stores using branding guidelines and custom requests. JavaScript, PHP & CSS based; graphics done in Photoshop. ",
      "rocessed orders, managed timelines, maintained vendor relations; purchaser position. Periodic graphic design making proofs, mock-ups, and other promotional material: Photoshop, Illustrator, InDesign."
    ],
    icon: '/shads-icon.png',
  }
]