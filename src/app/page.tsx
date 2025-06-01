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
        <section ref={heroRef} className="h-screen sm:h-[85vh] lg:h-[100vh] relative">
          <div className="sticky top-0 h-screen w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="bg-gradient-to-br from-brand-blue via-brand-blue to-blue-400 flex justify-center items-center relative order-1 lg:order-1">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative z-10">
                  <a href="/" className="group relative block w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
                    <Image src="/logo-white-full.svg" fill alt="Timeless Perfection Logo" className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                    <Image src="/logo-yellow-full.svg" fill alt="Timeless Perfection Logo Yellow" className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </a>
                </motion.div>
              </div>

              <div className="bg-gradient-to-b from-brand-yellow via-brand-yellow to-yellow-100 relative overflow-hidden order-2 lg:order-2">
                <motion.div style={{ y: heroTextY }} className="min-h-screen flex flex-col justify-start items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 pt-8 text-center">
                  <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-16 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full">
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 mt-12 leading-[1.1] text-brand-teal tracking-wide">
                        Compassionate Beauty & Wellness
                      </h1>
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl italic mb-4 text-brand-teal">
                        Tailored with dignity, delivered with care.
                      </h2>
                      <div className="w-12 sm:w-16 md:w-20 h-1 bg-brand-teal mx-auto mb-4 rounded-full"></div>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-teal leading-relaxed font-light tracking-wide">
                        Every senior deserves to feel radiant, confident, and cared for — all from the comfort of home. We bring beauty and wellness services that uplift, refresh, and restore dignity.
                      </p>
                    </motion.div>

                    <div className="text-left space-y-6 sm:space-y-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-xl">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-teal mb-3 tracking-wide">About Our Practice</h3>
                        <p className="text-sm sm:text-base md:text-lg text-brand-teal leading-relaxed">
                          We bring professional, gentle self-care to senior residents across Florida — with zero setup needed from your staff.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-teal mb-3 tracking-wide">Our Story</h3>
                        <p className="text-sm sm:text-base md:text-lg text-brand-teal leading-relaxed">
                          Inspired by my grandmother’s care, Timeless Perfection began as a personal act of love — and became a mission to uplift seniors across Florida.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-teal mb-3 tracking-wide">Our Philosophy</h3>
                        <p className="text-sm sm:text-base md:text-lg text-brand-teal leading-relaxed">
                          True wellness goes beyond appearance. Our goal is to uplift your residents — physically, emotionally, and socially.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-brand-teal font-medium">
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
        <section ref={servicesRef} className="h-screen sm:h-[100vh] lg:h-[200vh] relative">
          <div className="sticky top-0 h-[95vh] w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* LEFT: Text */}
              <div className="bg-gradient-to-b from-brand-white via-white to-gray-50 relative overflow-hidden">
                <motion.div
                  style={{ y: servicesTextY }}
                  className="min-h-[200vh] flex flex-col justify-start items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 pt-8 sm:pt-12 md:pt-16 text-center"
                >
                  <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full">
                    <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-teal font-semibold uppercase tracking-[0.2em] mb-2">
                        Our Services
                      </h2>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-teal font-light mb-4">
                        Hair, Nails & Massage
                      </h3>
                      <div className="w-12 h-1 bg-brand-teal mx-auto mb-4 rounded-full"></div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700">
                        Beauty and wellness care that helps seniors feel their best — comfortably, safely, and joyfully.
                      </p>
                    </motion.div>

                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                      {[{
                        title: "Hair Care",
                        desc: "Shampooing, trims, and light styling — all from the comfort of their room."
                      }, {
                        title: "Nail Care",
                        desc: "Non-toxic manicures and pedicures with optional massage for comfort and hygiene."
                      }, {
                        title: "Massage Therapy",
                        desc: "Restorative massage and facials to calm the body and lift the spirit."
                      }, {
                        title: "Makeup Application",
                        desc: "Light makeup for visits, photos, or just a boost in confidence."
                      }, {
                        title: "Facials/Skincare",
                        desc: "Gentle skincare with senior-safe products for a fresh, clean glow."
                      }].map(({ title, desc }, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-brand-teal"
                          whileHover={{ y: -4 }}
                        >
                          <h4 className="text-lg sm:text-xl font-semibold text-brand-teal mb-2 font-[Cormorant_Garamond]">
                            {title}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT: Image */}
              <div className="bg-gradient-to-br from-brand-blue via-brand-blue to-blue-400 justify-center items-center relative order-2 lg:order-1 hidden lg:flex">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 w-full max-w-[600px] px-4"
                >
                  <Image
                    src="/intake-interview.jpg"
                    alt="Wellness consultation"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section ref={studioRef} className="h-screen sm:h-[160vh] lg:h-[220vh] relative">
          <div className="sticky top-0 h-[92vh] w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image side */}
              <div className="bg-gradient-to-br from-brand-blue via-brand-blue to-blue-400 justify-center items-center relative order-2 lg:order-1 hidden lg:flex">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10 w-full max-w-[450px] xl:max-w-[500px]">
                  <Image src="/temples-older-woman.jpg" alt="Peaceful wellness studio environment" width={500} height={600} className="rounded-3xl shadow-2xl w-full h-auto" />
                </motion.div>
              </div>

              {/* Text side */}
              <div className="bg-gradient-to-b from-brand-yellow via-brand-yellow to-yellow-100 relative overflow-hidden order-1 lg:order-2">
                <motion.div style={{ y: studioTextY }} className="min-h-[200vh] flex flex-col justify-start items-center px-4 sm:px-6 md:px-10 lg:px-16 pt-8 text-center">
                  <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl w-full">
                    <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                      <h2 className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.2em] mb-2 text-brand-teal">
                        Our Approach
                      </h2>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl text-brand-teal font-light mb-3 leading-tight">
                        Comfort & Care Anywhere
                      </h3>
                      <div className="w-12 h-1 bg-brand-teal mx-auto mb-4 rounded-full"></div>
                      <p className="text-sm sm:text-base md:text-lg text-brand-teal leading-relaxed">
                        Spa-quality care in the comfort of your community — no setup needed.
                      </p>
                    </motion.div>

                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                      {[{
                        title: "Tailored for Wellness",
                        desc: "Relaxing techniques delivered by licensed senior-care professionals."
                      }, {
                        title: "Stress-Free Setup",
                        desc: "We bring everything — no space or prep required."
                      }, {
                        title: "Sanitary & Safe",
                        desc: "Strict hygiene with non-toxic, senior-friendly products."
                      }, {
                        title: "Compassionate Care",
                        desc: "Our pros are trained in senior communication and comfort."
                      }, {
                        title: "Flexible Scheduling",
                        desc: "Book individuals or full spa day rotations for your residents."
                      }].map(({ title, desc }, index) => (
                        <motion.div
                          key={index}
                          className="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-white border-opacity-50"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h4 className="font-semibold text-base sm:text-lg mb-2 text-brand-teal font-[Cormorant_Garamond]">
                            {title}
                          </h4>
                          <p className="text-sm sm:text-base text-brand-teal leading-relaxed">
                            {desc}
                          </p>
                        </motion.div>
                      ))}
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
