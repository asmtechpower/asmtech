import Link from "next/link";

export default function TeamSection() {
  const team = [
    {
      name: "Mustafa Zaman Choudhury",
      role: "Founder & CEO",
      image: "https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778524785/WhatsApp_Image_2026-05-11_at_10.54.36_PM_iqi9xl.jpg",
      description: "Engineer and entrepreneur driven by a vision to accelerate the transition toward a sustainable future.",
    },
  ];

  return (
    <section className="bg-[#f5f0e8] px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-14 md:mb-18">
          <span className="inline-flex w-fit items-center rounded-full border border-neutral-400 px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-neutral-600 mb-6">
            Our Team
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-neutral-900">
            Skilled professionals powering<br />your clean energy future
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <Link
              key={index}
              href="/team/mustafa-zaman-choudhury"
              className="group bg-white/60 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:shadow-lg"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden mb-5 bg-neutral-200 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">{member.name}</h3>
              <p className="text-sm font-medium text-green-700 uppercase tracking-wider mt-1 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {member.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
