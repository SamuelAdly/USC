import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PageNav from "./components/pageNav";
import VideoOverlay from "./components/videoOverlay";
import ScrollToTop from "./components/scrolltotop";

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
            <h1 className="text-white text-left md:text-4xl text-2xl font-bold leading-tight drop-shadow-lg shadow-black">
              Graduate Medical Education in Orthopedic Surgery at University Spine Center
            </h1>
          </div>
      </div>

      
      <div className="px-4 py-4">
        <h3 className="text-xl font-bold mb-4">Overview</h3>
        <p className="text-sm tracking-tight mb-4">The goal of the Spine Surgery Fellowship at Mayo Clinic&apos;s campus in Rochester, Minnesota, is to provide board-eligible graduates of orthopedic surgery training programs with a well-rounded experience involving all aspects of spinal surgery.</p>
        <p className="text-sm tracking-tight mb-4">The goal of the Spine Surgery Fellowship at Mayo Clinic&apos;s campus in Rochester, Minnesota, is to provide board-eligible graduates of orthopedic surgery training programs with a well-rounded experience involving all aspects of spinal surgery.</p>
        <p className="text-sm tracking-tight mb-6">The goal of the Spine Surgery Fellowship at Mayo Clinic&apos;s campus in Rochester, Minnesota, is to provide board-eligible graduates of orthopedic surgery training programs with a well-rounded experience involving all aspects of spinal surgery.</p>
        
        <VideoOverlay
          videoLink="https://www.youtube.com/embed/dQw4w9WgXcQ"
          thumbnail="/image.png"
          title="Spine Surgery Fellowship" 
          duration="4:12"
        />

        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">

          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold text-black">7</h1>
            <span className="text-lg font-medium text-gray-600 mt-2">
              Full-time Faculty
            </span>
          </div>

          <div className="flex flex-col items-center group transition-all duration-300">
            <h1 className="text-6xl font-bold text-blue-700 transform group-hover:scale-110 transition-transform duration-300">#1</h1>            
            <span className="text-lg font-medium text-blue-700 mt-4">Hospital in the Nation
            </span>
            <div class="w-16 h-1 bg-blue-700 mt-4 transition-all duration-300 group-hover:w-48"></div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold text-black">2</h1>
            <span className="text-lg font-medium text-gray-600 mt-2">ACGME approved positions
            </span>
          </div>

        </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

        <div>
          <Image
            src="/image.png"
            width={1280}
            height={720}
            alt="Surgery Experience Image"
            class="w-full rounded-lg object-cover"
          />
        </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Your training experience</h2>
            <p className="text-gray-700 mb-6">
              As a fellow at Mayo Clinic, you’ll have access to robust clinical,
              educational, and research resources. You’ll find support both inside and
              outside of the campus to promote physical and mental wellness and ensure
              your work/life balance.
            </p>
            <Link
              href="/"
              className="text-blue-600 underline underline-offset-2 relative group mb-2"
            >
              <span className="hover:bg-yellow-200 hover:text-black transition-colors duration-300">
                More about the curriculum
              </span>
            </Link>
            <Link
              href="/"
              className="text-blue-600 underline underline-offset-2 relative group"
            >
              <span className="hover:bg-yellow-200 hover:text-black transition-colors duration-300">
                More about life as a fellow
              </span>
            </Link>
        </div>

        <div>
        <Image
            src="/image.png"
            width={1280}
            height={720}
            alt="Directors Welcome Image"
            class="w-full rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Director’s welcome</h2>
            <p className="text-gray-700 mb-6">
              Our program provides you with one-on-one mentorship as well as the
              flexibility to work with other staff members on interesting cases. Time
              for research is built into the schedule, and our exceptional facilities
              support your growth.
            </p>
        </div>

      </section>
      </div>
      <ScrollToTop/>
    </div>
  );
}
