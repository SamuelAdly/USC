import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/*Back Page and Header*/}
      <div className="font-sans font-bold mb-2">
          <Link href="/" className="mx-2 flex text-blue-700">
              <ChevronLeft className="max-h-6 max-w-6"/>
              <p className="hover:underline">Residencies and Fellowships</p>
          </Link>
          <h1 className="mx-4 text-3xl font-extrabold">Spine Surgery Fellowship (Minnesota)</h1>
      </div>

      {/*Mobile Page Nav Header*/}
      <div className="mx-4 font-sans text-sm" >
        <ul className="grid grid-cols-2 sticky top-0 bg-white z-10 py-4">
          <li className="py-2 underline-offset-8 underline">
            <Link href="/" className="hover:underline">Overview</Link>
          </li>
          <li className="py-2">
          <Link href="/" className="hover:underline">Meet Our Fellows</Link>
          </li>
          <li className="py-2">
          <Link href="/" className="hover:underline">Application Process</Link>
          </li>
          <li className="py-2">
          <Link href="/" className="hover:underline">Fellow Life</Link>
          </li>
          <li className="py-2">
          <Link href="/" className="hover:underline">Curriculum</Link>
          </li>
          <li className="py-2">
          <Link href="/" className="hover:underline">Alumni</Link>
          </li>
          <li className="py-2">
          <Link href="/" className="hover:underline">Meet The Faculty</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
