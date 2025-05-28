'use client'
import Image from 'next/image'

export default function Services() {
  return (
    <div className="min-h-screen bg-[#B2D6DD] text-[#227C9D]">
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel - Image */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:w-1/2 lg:h-auto">
          <Image
            src="/nail-filing.jpg"
            alt="Spa towel and lavender"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-serif drop-shadow-lg text-center px-4 sm:px-6">
              Our Services
            </h1>
          </div>
        </div>

        {/* Right Panel - Services List */}
        <div className="w-full lg:w-1/2 bg-[#F0F5F8] px-4 sm:px-6 py-8 sm:py-10 space-y-8">
          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-gray-800">
            {[
              { title: "Haircut & Style", price: "$35", desc: "Trims, shaping, and blow-dry styling that leave your residents feeling fresh and confident — all with gentle, licensed care." },
              { title: "Shampoo & Blow-Dry", price: "$30", desc: "A soothing scalp cleanse and light dry styling, ideal between cuts or as a relaxing stand-alone service." },
              { title: "Manicure or Pedicure – Both", price: "$30 / $35 / $60", desc: "Includes nail grooming, shaping, polish, and optional massage. Designed for hygiene and a touch of pampering." },
              { title: "Polish Removal Only", price: "$10", desc: "Gentle, non-toxic removal of old polish to keep nails healthy and fresh." },
              { title: "Massage Therapy – 30 or 60 Min", price: "$40 / $70", desc: "Relaxation-focused massages to ease tension, promote circulation, and support mobility." },
              { title: "Light Makeup Application", price: "$25", desc: "Subtle and flattering makeup for family visits or a confidence boost." },
              { title: "Facial/Skincare Session", price: "$35", desc: "A calming, non-invasive cleanse and moisturize routine using senior-safe products." },
              { title: "Group Spa Day Package", price: "Custom", desc: "Tailored bundles for rotating care days or events. Ask us about monthly options!" },
            ].map(({ title, price, desc }) => (
              <div key={title}>
                <h3 className="font-bold text-base sm:text-lg">{title}</h3>
                <p className="text-[#227C9D] font-semibold">{price}</p>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 sm:pt-6 flex justify-center lg:justify-start">
            <a href="/schedule">
              <button className="bg-[#227C9D] hover:bg-[#F3D891] hover:text-[#227C9D] text-white font-medium py-3 px-6 sm:px-8 rounded-full shadow-md transition-colors duration-200 w-full sm:w-auto">
                Schedule an Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
