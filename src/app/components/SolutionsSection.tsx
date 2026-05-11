import Link from "next/link";
import Image from "next/image";

export default function SolutionsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Left side - Image placeholder */}
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-slate-200">
          {/* Blank div for image, acting as background */}
          <div className="absolute inset-0 bg-slate-800">
            <Image
              src="https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778404965/solar_solution_image_gbftih.png"
              width={500}
              height={500}
              alt="Solar solutions"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
      
          </div>
          
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-14">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] max-w-[14ch]">
              Solar solutions for a greener tomorrow
            </h2>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="bg-[#EAF7EC] rounded-3xl p-8 lg:p-14 flex flex-col items-start">
          <div className="inline-block border border-black/20 rounded-full px-6 py-2 mb-12">
            <span className="uppercase text-sm tracking-wide font-medium">Solar Solutions</span>
          </div>
          
          <ul className="flex flex-col gap-8 lg:gap-12 mb-16 flex-grow">
            <li className="text-3xl md:text-4xl font-medium text-slate-900 w-fit group cursor-pointer">
              <span className="relative inline-block">
                Residential solar systems
                <span className="absolute -bottom-2 left-0 w-full h-[2px] lg:h-[3px] bg-slate-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </span>
            </li>
            <li className="text-3xl md:text-4xl font-medium text-slate-900 w-fit group cursor-pointer">
              <span className="relative inline-block">
                Commercial solar solutions
                <span className="absolute -bottom-2 left-0 w-full h-[2px] lg:h-[3px] bg-slate-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </span>
            </li>
            <li className="text-3xl md:text-4xl font-medium text-slate-900 w-fit group cursor-pointer">
              <span className="relative inline-block">
                Ground mount plants
                <span className="absolute -bottom-2 left-0 w-full h-[2px] lg:h-[3px] bg-slate-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </span>
            </li>
            <li className="text-3xl md:text-4xl font-medium text-slate-900 w-fit group cursor-pointer">
              <span className="relative inline-block">
                Solar street light
                <span className="absolute -bottom-2 left-0 w-full h-[2px] lg:h-[3px] bg-slate-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </span>
            </li>
          </ul>

          <Link
            href="/solar-solutions"
            className="inline-block bg-black text-white rounded-full px-8 py-4 text-sm font-medium uppercase tracking-wide hover:bg-black/90 transition-colors mt-auto"
          >
            Explore more solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
