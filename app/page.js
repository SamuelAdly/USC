import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PageNav from "./components/pageNav";
import VideoOverlay from "./components/videoOverlay";

export default function Home() {
  return (
    <div className="font-sans min-h-screen max-w-screen-2xl bg-white text-black mx-auto">

      {/*Back Page and Header*/}
      <div className="font-bold mb-2 sm:px-2 lg:px-4">
          <Link href="/" className="mx-2 flex text-blue-700 ">
              <ChevronLeft className="max-h-6 max-w-6"/>
              <p className="hover:underline">
                Residencies and Fellowships</p>
          </Link>
          <h1 className="mx-4 text-5xl font-extrabold">Spine Surgery Fellowship (Minnesota)</h1>
      </div>
      
      {/*Page Nav Header Look at pageNav.js in components folder*/}
      <PageNav underlinedLink={"Overview"}/>

      {/*First Image and Text Box*/}
      <div className="relative w-full h-fit">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
          <Image
            src={"/image.png"}
            width={1440}
            height={720}
            alt="Medical Surgery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-white text-left lg:text-4xl text-3xl font-bold leading-tight drop-shadow-lg shadow-black">
              Graduate Medical Education in Orthopedic Surgery at University Spine Center
            </h1>
          </div>
      </div>

      
      <div className="px-4 py-4">
        <h3 className="text-xl font-bold mb-4">Overview</h3>
        <p className="text-sm tracking-tight mb-4">The goal of the Spine Surgery Fellowship at Mayo Clinic&apos;s campus in Rochester, Minnesota, is to provide board-eligible graduates of orthopedic surgery training programs with a well-rounded experience involving all aspects of spinal surgery.</p>
        <p className="text-sm tracking-tight mb-4">The goal of the Spine Surgery Fellowship at Mayo Clinic&apos;s campus in Rochester, Minnesota, is to provide board-eligible graduates of orthopedic surgery training programs with a well-rounded experience involving all aspects of spinal surgery.</p>
        <p className="text-sm tracking-tight mb-4">The goal of the Spine Surgery Fellowship at Mayo Clinic&apos;s campus in Rochester, Minnesota, is to provide board-eligible graduates of orthopedic surgery training programs with a well-rounded experience involving all aspects of spinal surgery.</p>
        <VideoOverlay 
          videoLink="https://www.youtube.com/embed/dQw4w9WgXcQ"
          thumbnail="/image.png"
          title="Spine Surgery Fellowship" 
          duration="4:12"
        >
        </VideoOverlay>
      </div>
    </div>
  );
}
