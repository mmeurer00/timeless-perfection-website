"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const studioRef = useRef(null);

  // Hero section sticky scroll
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Services section sticky scroll
  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start start", "end start"],
  });

  // Studio section sticky scroll
  const { scrollYProgress: studioProgress } = useScroll({
    target: studioRef,
    offset: ["start start", "end start"],
  });

  // Transform values for better text positioning
  const heroTextY = useTransform(heroProgress, [0, 1], ["0vh", "-120vh"]);
  const servicesTextY = useTransform(
    servicesProgress,
    [0, 1],
    ["20vh", "-100vh"],
  );
  const studioTextY = useTransform(studioProgress, [0, 1], ["20vh", "-100vh"]);

  return (
    <div className="w-full font-[Cormorant_Garamond] m-0 p-0">
      <main className="m-0 p-0">
        {/* Hero Section - Enhanced with better spacing and typography */}
        <section
          ref={heroRef}
          className="h-screen sm:h-[200vh] lg:h-[300vh] relative"
        >
          <div className="sticky top-0 h-screen w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image side - responsive logo sizing */}
              <div className="bg-gradient-to-br from-brand-blue via-brand-blue to-blue-400 flex justify-center items-center relative order-1 lg:order-1">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <a
                    href="/"
                    className="group relative block w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
                  >
                    <Image
                      src="/logo-white-full.svg"
                      fill
                      alt="Timeless Perfection Logo"
                      className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/logo-yellow-full.svg"
                      fill
                      alt="Timeless Perfection Logo Yellow"
                      className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </a>
                </motion.div>
              </div>

              {/* Text side - fully responsive typography and spacing */}
              <div className="bg-gradient-to-b from-brand-yellow via-brand-yellow to-yellow-100 relative overflow-hidden order-2 lg:order-2">
                <motion.div
                  style={{ y: heroTextY }}
                  className="min-h-screen sm:min-h-[80vh] md:min-h-[100vh] lg:min-h-[200vh] flex flex-col justify-start items-center px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-center"
                >
                  <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[Cormorant_Garamond] font-light mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 leading-[0.9] text-brand-teal tracking-wide">
                        Compassionate Beauty & Wellness
                        <br />
                      </h1>
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-[Cormorant_Garamond] font-light mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 leading-[0.9] text-brand-teal tracking-wide">
                        <span className="italic">
                          Tailored with dignity, delivered with care.
                        </span>
                      </h2>
                      <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-brand-teal mx-auto mb-3 sm:mb-4 md:mb-6 lg:mb-8 rounded-full"></div>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-brand-teal leading-relaxed font-light tracking-wide">
                        At Timeless Perfection, we believe every senior deserves
                        to feel radiant, confident, and refreshed — all from the
                        comfort of home. Our mobile beauty and wellness services
                        are designed to uplift spirits, enhance hygiene, and
                        restore dignity, without ever needing to leave your
                        facility.
                      </p>
                    </motion.div>

                    <div className="text-left space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 shadow-xl">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-[Cormorant_Garamond] text-brand-teal font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-6 tracking-wide">
                          About Our Practice
                        </h3>
                        <p className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-brand-teal leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                          We specialize in bringing professional, gentle
                          self-care services directly to senior residents in
                          Central and South Florida.
                        </p>
                        <p className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-brand-teal leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                          From haircuts to massages, every visit is thoughtfully
                          tailored to ensure comfort, relaxation, and joy —
                          without disrupting daily routines or requiring any
                          setup from your staff.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-[Cormorant_Garamond] text-brand-teal font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-6 tracking-wide">
                          Our Story
                        </h3>
                        <p className="mb-2 sm:mb-3 md:mb-4 text-brand-teal leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                          Timeless Perfection was born from a deeply personal
                          place — inspired by the love, dignity, and care I
                          wanted for my own grandmother. What began as a simple
                          act of compassion has grown into a mission to bring
                          that same level of thoughtful care to seniors across
                          Florida.
                        </p>
                        <p className="text-brand-teal leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                          We believe every elder deserves to feel seen, valued,
                          and pampered. Our mobile services are designed to
                          restore not just outer beauty, but inner peace and
                          connection — one gentle visit at a time.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-[Cormorant_Garamond] text-brand-teal font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-6 tracking-wide">
                          Our Philosophy
                        </h3>
                        <p className="mb-2 sm:mb-3 md:mb-4 text-brand-teal leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                          True wellness is more than skin deep. Our goal is to
                          enhance how your residents feel — physically,
                          emotionally, and socially — through intentional, kind,
                          and restorative experiences.
                        </p>
                        <p className="text-brand-teal leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                          We do the work. You see the smiles.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Enhanced mobile responsiveness */}
        <section
          ref={servicesRef}
          className="h-screen sm:h-[200vh] lg:h-[300vh] relative"
        >
          <div className="sticky top-0 h-screen w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Text side - responsive card layout */}
              <div className="bg-gradient-to-b from-brand-white via-white to-gray-50 relative overflow-hidden">
                <motion.div
                  style={{ y: servicesTextY }}
                  className="min-h-[200vh] flex flex-col justify-start items-center p-4 sm:p-6 md:p-8 lg:p-12 pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-center"
                >
                  <div className="space-y-6 sm:space-y-8 md:space-y-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-teal font-semibold uppercase tracking-[0.2em] mb-2 sm:mb-3 md:mb-4">
                        Our Services
                      </h2>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Cormorant_Garamond] font-light text-brand-teal mb-3 sm:mb-4 md:mb-6 leading-tight">
                        Hair, Nails &<br />
                        Massage
                      </h3>
                      <div className="w-12 sm:w-14 md:w-16 h-1 bg-brand-teal mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
                        Complete beauty and wellness services designed to help
                        you look and feel your absolute best.
                      </p>
                    </motion.div>

                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                      {/* Service Cards - Responsive */}
                      <motion.div
                        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-teal"
                        whileHover={{ y: -5 }}
                      >
                        <h4 className="font-bold text-brand-teal text-lg sm:text-xl font-[Cormorant_Garamond] mb-2 sm:mb-3">
                          Hair Care
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          Gentle shampooing, trimming, and light styling
                          designed to keep residents feeling fresh and
                          well-groomed — all without leaving their room.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-teal"
                        whileHover={{ y: -5 }}
                      >
                        <h4 className="font-bold text-brand-teal text-lg sm:text-xl font-[Cormorant_Garamond] mb-2 sm:mb-3">
                          Nail Care
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          Manicures and pedicures using non-toxic products,
                          complete with shaping, polish, and optional hand/foot
                          massage — boosting hygiene, comfort, and self-esteem.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-teal"
                        whileHover={{ y: -5 }}
                      >
                        <h4 className="font-bold text-brand-teal text-lg sm:text-xl font-[Cormorant_Garamond] mb-2 sm:mb-3">
                          Massage Therapy
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          Restorative massage and non-invasive facials that
                          reduce tension, improve circulation, and promote calm
                          — always tailored to the needs of seniors.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-teal"
                        whileHover={{ y: -5 }}
                      >
                        <h4 className="font-bold text-brand-teal text-lg sm:text-xl font-[Cormorant_Garamond] mb-2 sm:mb-3">
                          Makeup Application
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          Subtle and flattering makeup for family visits,
                          photos, or a little boost in confidence.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-teal"
                        whileHover={{ y: -5 }}
                      >
                        <h4 className="font-bold text-brand-teal text-lg sm:text-xl font-[Cormorant_Garamond] mb-2 sm:mb-3">
                          Facial/Skincare Session
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          A calming, non-invasive cleanse and moisturize routine
                          using senior-safe products.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image side - responsive image sizing */}
              <div className="bg-gradient-to-br from-brand-blue via-brand-blue to-blue-400 justify-center items-center relative order-2 lg:order-1 hidden lg:flex">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[750px] px-4 sm:px-6 lg:px-0"
                >
                  <Image
                    src="/intake-interview.jpg"
                    alt="Professional massage therapy services"
                    width={750}
                    height={850}
                    className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Showcase - Fixed mobile responsiveness */}
        <section
          ref={studioRef}
          className="h-screen sm:h-[200vh] lg:h-[300vh] relative"
        >
          <div className="sticky top-0 h-screen w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image side - hidden when stacked, visible when side by side */}
              <div className="bg-gradient-to-br from-brand-blue via-brand-blue to-blue-400 justify-center items-center relative order-2 lg:order-1 hidden lg:flex">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 w-full max-w-[450px] xl:max-w-[500px]"
                >
                  <Image
                    src="/temples-older-woman.jpg"
                    alt="Peaceful wellness studio environment"
                    width={500}
                    height={600}
                    className="rounded-3xl shadow-2xl w-full h-auto"
                  />
                </motion.div>
              </div>

              {/* Text side - fully responsive layout */}
              <div className="bg-gradient-to-b from-brand-yellow via-brand-yellow to-yellow-100 relative overflow-hidden order-1 lg:order-2">
                <motion.div
                  style={{ y: studioTextY }}
                  className="min-h-[200vh] flex flex-col justify-start items-center p-4 sm:p-6 md:p-8 lg:p-12 pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-center"
                >
                  <div className="space-y-6 sm:space-y-8 md:space-y-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-[0.2em] mb-2 sm:mb-3 md:mb-4 text-brand-teal">
                        Our Approach
                      </h2>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Cormorant_Garamond] font-light mb-3 sm:mb-4 md:mb-6 text-brand-teal leading-tight">
                        Comfort & Care
                        <br />
                        Wherever You Are
                      </h3>
                      <div className="w-12 sm:w-14 md:w-16 h-1 bg-brand-teal mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-brand-teal">
                        Bringing the spa experience to you — every detail of our
                        mobile service is designed to provide your residents
                        with exceptional care in the comfort of their own
                        community.
                      </p>
                    </motion.div>

                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                      {/* Feature Cards - Responsive */}
                      <motion.div
                        className="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white border-opacity-50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-brand-teal font-[Cormorant_Garamond]">
                          Tailored for Wellness
                        </h4>
                        <p className="text-brand-teal leading-relaxed text-sm sm:text-base">
                          We specialize in gentle, senior-friendly techniques
                          that promote relaxation, circulation, and well-being —
                          all delivered by licensed professionals with
                          experience in elder care.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white border-opacity-50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-brand-teal font-[Cormorant_Garamond]">
                          Stress-Free Setup
                        </h4>
                        <p className="text-brand-teal leading-relaxed text-sm sm:text-base">
                          No special equipment or space required. We bring
                          everything we need and adapt seamlessly to your
                          facility's layout.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white border-opacity-50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-brand-teal font-[Cormorant_Garamond]">
                          Sanitary & Safe
                        </h4>
                        <p className="text-brand-teal leading-relaxed text-sm sm:text-base">
                          We follow strict hygiene protocols and use non-toxic
                          products, maintaining the highest standards of
                          cleanliness during every visit.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white border-opacity-50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-brand-teal font-[Cormorant_Garamond]">
                          Consistent, Compassionate Care
                        </h4>
                        <p className="text-brand-teal leading-relaxed text-sm sm:text-base">
                          Our licensed professionals are trained not just in
                          beauty and wellness, but also in compassionate
                          communication and senior sensitivity.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white border-opacity-50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-brand-teal font-[Cormorant_Garamond]">
                          Flexible Group Scheduling
                        </h4>
                        <p className="text-brand-teal leading-relaxed text-sm sm:text-base">
                          We make it easy to book individual sessions or full
                          "spa day" rotations — perfect for recurring wellness
                          events or family visitation weekends.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section - Fully responsive */}
        <section className="bg-brand-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Cormorant_Garamond] text-center text-brand-teal mb-8 sm:mb-12 md:mb-16 leading-tight">
            What Our Partners Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "The massage therapist was gentle and calming — our residents felt pampered and cared for.",
                author: "— Director, Palm Haven Care Center",
              },
              {
                quote:
                  "I haven't seen our residents smile like that in weeks. Thank you for bringing the spa to them!",
                author: "— Activity Coordinator, Jupiter Senior Living",
              },
              {
                quote:
                  "Professional, reliable, and always kind. Our community is thrilled with the services.",
                author: "— Executive Director, St. Lucie Village",
              },
            ].map(({ quote, author }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="italic text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  "{quote}"
                </p>
                <p className="text-xs sm:text-sm font-medium text-brand-teal">
                  {author}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24 px-6">
          <h2 className="text-4xl md:text-5xl font-[Cormorant_Garamond] text-center text-brand-teal mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "What licenses do your practitioners have?",
                a: "All practitioners are fully licensed in Florida for their specialty — including cosmetology, massage therapy, and esthetics.",
              },
              {
                q: "Do you bring your own equipment?",
                a: "Yes, we provide all the necessary spa equipment, sanitized before each session.",
              },
              {
                q: "Is it safe for seniors with health conditions?",
                a: "Absolutely. Our services are gentle, and each session is tailored to the comfort and health needs of the individual.",
              },
              {
                q: "What areas do you serve?",
                a: "We currently serve West Palm Beach, Jupiter, Port St. Lucie, Fort Pierce, and Martin County.",
              },
              {
                q: "How do I book?",
                a: "You can schedule services directly through our website by clicking 'Book Now', give us a call, or email us at info@timelessperfection.com.",
              },
            ].map(({ q, a }, idx) => (
              <details
                key={idx}
                className="group border border-brand-teal rounded-xl p-6 hover:shadow-md transition"
              >
                <summary className="font-medium text-lg cursor-pointer text-brand-teal group-open:mb-4">
                  {q}
                </summary>
                <p className="text-gray-700">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Call to Action with Image Background */}
        <section
          className="relative py-32 bg-cover bg-center"
          style={{ backgroundImage: "url('/lavender.jpg')" }}
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>{" "}
          {/* Soft white overlay for readability */}
          <div className="relative z-10 max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-[Cormorant_Garamond] text-brand-teal font-light mb-6 leading-tight">
                  Let’s Help Your Residents
                  <br />
                  <span className="italic">Feel Their Best</span>
                </h2>
                <div className="w-24 h-1 bg-brand-teal mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-brand-teal mb-12 leading-relaxed max-w-3xl mx-auto">
                  Book a service day with us and discover how a simple haircut,
                  nail session, or massage can brighten someone’s day, improve
                  hygiene, and show families you go the extra mile.
                </p>
              </motion.div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {[
                {
                  title: "Hair Care",
                  desc: "Professional styling, cutting & personalized treatments for your unique hair needs",
                  duration: "1–2 hours",
                  href: "https://book.squareup.com/appointments/y8n5jyfz46vqjw/location/LJ12CBF1HQJYB/services/3CVYSN6G4JNBTWNOMGUVOOGL",
                  color: "teal",
                },
                {
                  title: "Nail Care",
                  desc: "Complete manicure & pedicure services in our peaceful, relaxing environment",
                  duration: "1 hour",
                  href: "https://book.squareup.com/appointments/y8n5jyfz46vqjw/location/LJ12CBF1HQJYB/services/BTJYVLUIN7T3X35LDNVYTJG2",
                  color: "yellow",
                },
                {
                  title: "Massage Therapy",
                  desc: "Therapeutic wellness massage to reduce stress and promote deep relaxation",
                  duration: "1 hour",
                  href: "https://book.squareup.com/appointments/y8n5jyfz46vqjw/location/LJ12CBF1HQJYB/services/VNH3CHTGGBT3BE3RJKKPEAVR",
                  color: "blue",
                },
              ].map(({ title, desc, duration, href, color }, i) => (
                <motion.div
                  key={title}
                  className={`rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-brand-${color} group bg-white/80 backdrop-blur-md`}
                  whileHover={{ y: -10 }}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-[Cormorant_Garamond] font-semibold text-brand-teal mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{duration}</p>
                    <p className="text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <button
                      className={`w-full py-4 px-6 rounded-2xl text-lg font-medium hover:bg-opacity-90 transition-all duration-300 group-hover:scale-105
              ${
                color === "teal"
                  ? "bg-brand-teal text-white"
                  : color === "yellow"
                    ? "bg-brand-yellow text-brand-teal border-2 border-brand-teal"
                    : "bg-brand-blue text-white"
              }`}
                    >
                      Book {title}
                    </button>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-gray-800 mb-4">
                Have questions about our services?
              </p>
              <p className="text-brand-teal font-medium">
                Feel free to reach out before booking your appointment
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
