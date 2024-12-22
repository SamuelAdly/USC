import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PageNav from "./components/pageNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/*Back Page and Header*/}
      <div className="font-sans font-bold mb-2">
          <Link href="/" className="mx-2 flex text-blue-700">
              <ChevronLeft className="max-h-6 max-w-6"/>
              <p className="hover:underline">Residencies and Fellowships</p>
          </Link>
          <h1 className="mx-4 text-5xl font-extrabold">Spine Surgery Fellowship (Minnesota)</h1>
      </div>
      
      {/*Page Nav Header Look at pageNav.js in components folder*/}
      <PageNav underlinedLink={"Overview"}></PageNav>
    </div>
  );
}
