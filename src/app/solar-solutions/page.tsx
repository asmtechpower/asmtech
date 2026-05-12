import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solar Solutions | ASMTECH Power & Infra Pvt Ltd",
  description:
    "Explore ASMTECH's range of sustainable solar solutions — residential systems, commercial installations, ground mount plants, porta cabins, solar street lights, water heaters, water pumps, and EV charging stations.",
    keywords: ['solar solution'],
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1
      },
    },
};

const solutions = [
  {
    id: "01",
    title: "Residential solar systems",
    description:
      "High-efficiency solar panel systems designed to power your home with clean energy. Reduce your electricity bills, earn from net metering, and contribute to a sustainable future — all while increasing your property value.",
    hasLearnMore: false,
    imageUrl: "https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405546/solar_solution_1_tybcff.png"
  },
  {
    id: "02",
    title: "Commercial solar solutions",
    description:
      "Scalable solar power solutions crafted for businesses, commercial complexes, factories, offices, and industrial facilities. Cut operational energy costs and boost your company's green credentials.",
    hasLearnMore: false,
    imageUrl: "https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405555/solar_solution_2_vjmltz.png"
  },
  {
    id: "03",
    title: "Ground mount plant",
    description:
      "Utility-scale ground-mounted solar installations for maximum energy generation. Ideal for commercial, industrial, and large-scale agricultural requirements with optimized panel orientation for peak performance.",
    hasLearnMore: false,
    imageUrl: "https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405551/solar_solution_3_vkpiwm.png"
  },
  {
    id: "04",
    title: "Porta cabin",
    description:
      "Pre-fabricated portable cabin solutions powered by solar energy. Perfect for construction sites, temporary offices, remote monitoring stations, EPC cabins, and temporary workspaces.",
    hasLearnMore: false,
    imageUrl: "https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405530/solar_solution_4_eud1bk.png"
  },
  {
    id: "05",
    title: "Solar street light",
    description:
      "Energy-efficient solar-powered lighting for public roads, highways, parks, campuses, residential colonies, and commercial areas. Features automatic dusk-to-dawn operation with weather-resistant construction for reliable performance.",
    hasLearnMore: false,
    imageUrl: "https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405550/solar_solution_5_gpstg6.png"
  },
  {
    id: "06",
    title: "Solar water heater",
    description:
      "Eco-friendly solar water heating systems designed to provide a continuous supply of hot water while reducing electricity bills. Ideal for residential and commercial use in every season.",
    hasLearnMore: false,
    imageUrl: "https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405530/solar_solution_6_ejpsap.png"
  },
  {
    id: "07",
    title: "Solar water pump",
    description:
      "Off-grid solar water pumping solutions for reliable water supply for agriculture, irrigation, and domestic use. Reduces dependency on diesel and electricity while providing consistent performance in remote areas.",
    hasLearnMore: false,
    imageUrl: "https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778516897/solar_water_pump_d5bpee.jpg"
  },
  {
    id: "08",
    title: "Solar EV charging station",
    description:
      "Sustainable solar-powered EV charging infrastructure to power electric vehicles with clean energy. Future-proof your parking facility with eco-friendly smart charging technology.",
    hasLearnMore: false,
    imageUrl: "https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405516/solar_solution_8_d5ue5t.png"
  },
];

export default function SolarSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      {/* Header */}
      <section className="pt-8 container mx-auto max-w-6xl">
        <Header />
      </section>

      {/* Hero section */}
      <section className="container mx-auto max-w-6xl px-4 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/75 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-950/85 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-sm">
            <span
              className="size-1.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]"
              aria-hidden
            />
            Solar solutions
          </span>
          <h1 className="max-w-[18ch] text-[2rem] font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-4xl sm:max-w-[20ch] md:text-5xl md:max-w-none lg:text-[3.35rem] lg:leading-[1.06]">
            Sustainable{" "}
            <span className="bg-linear-to-r from-emerald-800 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
              solar
            </span>{" "}
            solutions for all
          </h1>
          <p className="max-w-xl text-pretty text-base font-light leading-relaxed tracking-wide text-neutral-600 sm:text-lg">
            From rooftops to ground-mount plants — clean power tailored to how you live and work.
          </p>
        </div>

        {/* Hero image placeholder */}
        <div className="mt-10 w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl bg-black relative overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405075/solar_solution_hero_u6a36e.png"
            alt="Solar solutions"
            fill
            className="object-cover rounded-2xl"
            priority={false}
          />
        </div>
      </section>

      {/* Solutions listing */}
      <section className="container mx-auto max-w-6xl px-4 pb-20 md:pb-28">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <span className="inline-flex items-center rounded-full border border-neutral-400 px-5 py-2 text-[11px] font-semibold uppercase tracking-widest text-neutral-600 mb-5">
            Solar Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-neutral-900 max-w-[16ch]">
            Green energy,
            <br />
            customized for you
          </h2>
        </div>

        {/* Solutions list */}
        <div className="flex flex-col">
          {solutions.map((solution, index) => (
            <article
              key={solution.id}
              className={`group grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 lg:gap-16 py-12 md:py-20 px-4 sm:px-8 lg:px-12 -mx-4 sm:-mx-8 lg:-mx-12 items-center rounded-[2.5rem] transition-all duration-500 hover:bg-white/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 ${
                index !== solutions.length - 1
                  ? "border-b border-neutral-200 hover:border-transparent"
                  : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl bg-neutral-200 overflow-hidden shrink-0 transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-md">
                <Image
                  src={solution.imageUrl ?? ""}
                  alt="Solar solutions"
                  fill
                  className="object-cover rounded-2xl"
                  priority={false}
                />
                {/* Badge for first item */}
                {index === 0 && (
                  <div className="absolute bottom-4 right-4 bg-white text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider text-black shadow-sm">
                    3 KW SOLAR INSTALLATION
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col items-start gap-4 lg:gap-5">
                <div className="size-12 rounded-full border border-neutral-300 flex items-center justify-center text-sm text-neutral-600 mb-1 lg:mb-2 font-light">
                  {solution.id}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-black tracking-tight leading-tight">
                  {solution.title}
                </h3>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl font-light">
                  {solution.description}
                </p>
                {solution.hasLearnMore && (
                  <Link
                    href={`/solar-solutions/${solution.id}`}
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-green-400 px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-green-500 active:scale-[0.97]"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
