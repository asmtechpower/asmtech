import React from "react";
import Image from "next/image";

export default function ProcessSection() {
  return (
    <section className="bg-[#f5f0e8] px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 rounded-4xl bg-[#374f6b] p-6 md:p-12">
          {/* Left Column */}
          <div className="flex-1 text-white md:pr-8">
            <div className="inline-block mb-10 rounded-full border border-white/30 px-5 py-1.5 text-base uppercase tracking-wider text-gray-200">
              Our Process
            </div>
            <h2 className="mb-12 text-4xl font-medium md:text-[3rem]">
              How It Works
            </h2>
            
            <div className="flex flex-col gap-10">
              {/* Step 01 */}
              <div className="flex gap-6">
                <span className="text-[2.35rem] leading-none font-medium text-white">01.</span>
                <div className="mt-1">
                  <h3 className="mb-2 text-2xl font-medium">Consultation & Energy Audit</h3>
                  <p className="text-[#a3b8cc] text-[1.2rem] leading-relaxed max-w-xs">
                    Detailed site assessment and energy analysis.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex gap-6">
                <span className="text-[2.35rem] leading-none font-medium text-white">02.</span>
                <div className="mt-1">
                  <h3 className="mb-2 text-2xl font-medium">Design & Engineering</h3>
                  <p className="text-[#a3b8cc] text-[1.2rem] leading-relaxed max-w-xs">
                    Custom PV layouts and structural optimization.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex gap-6">
                <span className="text-[2.35rem] leading-none font-medium text-white">03.</span>
                <div className="mt-1">
                  <h3 className="mb-2 text-2xl font-medium">Installation & Testing</h3>
                  <p className="text-[#a3b8cc] text-[1.2rem] leading-relaxed max-w-xs">
                    Professional installation and grid synchronization.
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="flex gap-6">
                <span className="text-[2.35rem] leading-none font-medium text-white">04.</span>
                <div className="mt-1">
                  <h3 className="mb-2 text-2xl font-medium">Commissioning & Handover</h3>
                  <p className="text-[#a3b8cc] text-[1.2rem] leading-relaxed max-w-xs">
                    System activation, inspection, and performance verification.
                  </p>
                </div>
              </div>

              {/* Step 05 */}
              <div className="flex gap-6">
                <span className="text-[2.35rem] leading-none font-medium text-white">05.</span>
                <div className="mt-1">
                  <h3 className="mb-2 text-2xl font-medium">Reliable After-Sales Service</h3>
                  <p className="text-[#a3b8cc] text-[1.2rem] leading-relaxed max-w-xs">
                    Ongoing maintenance, monitoring, and technical support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column (Blank Div instead of Image) */}
          <div className="flex-1 relative min-h-[300px] md:min-h-[500px]">
            <Image
              src="https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405009/our_process_image_xjyurz.png"
              alt="Our process illustration"
              fill
              className="rounded-2xl object-cover shadow-inner"
              priority
            />
            <div className="absolute inset-0 w-full h-full rounded-2xl bg-black/10 shadow-inner" />
          </div>
    
        </div>
      </div>
    </section>
  );
}
