'use client'
import Image from 'next/image'

export default function Services() {
  return (
    <div className="min-h-screen bg-[#B2D6DD] text-[#227C9D]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Panel - Image Background */}
        <div className="relative h-[60vh] lg:h-auto">
          <Image
            src="/nail-filing.jpg"
            alt="Spa towel and lavender"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl text-white font-serif drop-shadow-lg text-center px-6">
              Our Services
            </h1>
          </div>
        </div>

        {/* Right Panel - Services List */}
        <div className="bg-[#F0F5F8] px-8 py-12 lg:py-20 lg:px-16 space-y-8">
          <div className="space-y-6 text-sm leading-relaxed text-gray-800">
            <div>
              <h3 className="font-bold text-lg">Haircut & Style</h3>
              <p className="text-[#227C9D] font-semibold">$35</p>
              <p>Trims, shaping, and blow-dry styling that leave your residents feeling fresh and confident — all with gentle, licensed care.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Shampoo & Blow-Dry</h3>
              <p className="text-[#227C9D] font-semibold">$30</p>
              <p>A soothing scalp cleanse and light dry styling, ideal between cuts or as a relaxing stand-alone service.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Manicure or Pedicure – Both</h3>
              <p className="text-[#227C9D] font-semibold">$30 / $35 / $60</p>
              <p>Includes nail grooming, shaping, polish, and optional hand or foot massage. Designed for safety, hygiene, and a touch of pampering.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Polish Removal Only</h3>
              <p className="text-[#227C9D] font-semibold">$10</p>
              <p>Gentle, non-toxic removal of old polish to keep nails healthy and fresh.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Massage Therapy – 30 or 60 Min</h3>
              <p className="text-[#227C9D] font-semibold">$40 / $70</p>
              <p>Relaxation-focused massages to ease tension, promote circulation, and support mobility. Always tailored for comfort and care.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Light Makeup Application</h3>
              <p className="text-[#227C9D] font-semibold">$25</p>
              <p>Subtle and flattering makeup for family visits, photos, or a little boost in confidence.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Facial/Skincare Session</h3>
              <p className="text-[#227C9D] font-semibold">$35</p>
              <p>A calming, non-invasive cleanse and moisturize routine using senior-safe products.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Group Spa Day Package</h3>
              <p className="text-[#227C9D] font-semibold">Custom</p>
              <p>Tailored bundles for rotating care days or resident wellness events. Ask us about monthly options!</p>
            </div>
          </div>

          {/* Button */}
          <div className="pt-6">
            <a href="/schedule">
              <button className="bg-[#227C9D] hover:bg-[#F3D891] hover:text-[#227C9D] text-white font-medium py-3 px-8 rounded-full shadow-md transition-colors duration-200">
                Schedule an Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
