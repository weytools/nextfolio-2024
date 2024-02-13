import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <article className="prose">
        <h1>Isaac Weymouth</h1>
        <h2>Full stack developer with a business degree</h2>
      </article>
    </main>
  );
}
