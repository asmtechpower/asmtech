import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&h=256&q=80",
      quote: "Switching to solar with ASMTECH was the best decision for our family. The entire process was seamless, and our electricity bill has virtually disappeared. Highly recommend their professional team!"
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      avatar:
        "https://images.unsplash.com/photo-1619895862022-09114c41aa16?auto=format&fit=crop&w=256&h=256&q=80",
      quote: "We installed a commercial solar setup for our factory. ASMTECH's engineering and execution were flawless. The return on investment has been incredible, significantly reducing our operational costs."
    },
    {
      name: "Vikram Singh",
      role: "Resident",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-02794bb61a42?auto=format&fit=crop&w=256&h=256&q=80",
      quote: "From the initial consultation to the final grid synchronization, everything was handled expertly. The team even helped us secure the government subsidy without any hassle. A truly 5-star experience."
    }
  ];

  return (
    <section className="bg-[#fdfaf6] px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-block mb-6 rounded-full border border-black/20 px-5 py-1.5 text-sm uppercase tracking-wide text-black bg-white/50">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-[3rem] font-medium leading-tight text-black">
            Voices of a greener<br />tomorrow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#e6e4dc] rounded-2xl p-6 md:p-8 flex flex-col min-h-[350px] shadow-sm relative"
            >
              <div className="flex justify-between items-start mb-6">
                {/* Quote Icon */}
                <div className="text-black/10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                {/* Avatar Image */}
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/50 shadow-sm"
                  loading="lazy"
                />
              </div>

              <div className="mt-auto">
                <p className="text-black/80 text-[1.1rem] leading-relaxed text-left mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="text-left border-t border-black/10 pt-4">
                  <p className="font-medium text-black text-lg">{testimonial.name}</p>
                  <p className="text-black/60 text-sm mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
