"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 150) // Staggered animation delay
          }
        },
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0f172a" }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className="inline-flex items-center px-4 py-2 border border-cyan-500/30 rounded-full text-white text-sm font-medium mb-6"
              style={{ backgroundColor: "#1e293b" }}
            >
              <span className="w-4 h-4 mr-2 text-cyan-400">✓</span>
              Trusted IT Solutions Provider
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
              Every business has
              <span className="block text-cyan-400 font-bold">IT potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto text-pretty leading-relaxed">
              Comprehensive IT infrastructure, ELV solutions, and professional training to unlock your organization's
              full technological potential with reliability and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="text-lg px-8 py-4 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center justify-center"
                style={{ background: "linear-gradient(to right, #06b6d4, #2563eb)" }}
              >
                Explore Solutions
                <span className="ml-2">→</span>
              </button>
              <button
                className="text-lg px-8 py-4 border-2 border-slate-400 text-slate-200 hover:text-white rounded-lg transition-all duration-300 font-medium"
                style={{ backgroundColor: "transparent" }}
              >
                Join Academy
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services designed to meet your business needs with cutting-edge technology and expert
              support
            </p>
          </div>

          <div className="flex gap-8 mb-16 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            <style jsx>{`
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {[
              {
                title: "IT Infrastructure & Solutions",
                description: "We build and manage reliable IT systems for business continuity and growth.",
                features: [
                  "Network design & implementation",
                  "Structured cabling & fiber optics",
                  "Server setup & integration",
                  "System upgrades & lifecycle support",
                ],
                color: "from-cyan-500 to-blue-600",
              },
              {
                title: "ELV Solutions",
                description: "Extra Low Voltage (ELV) for smarter communication, security, and automation",
                features: [
                  "CCTV & Access Control",
                  "EPABX & Intercom",
                  "Video Door Phones & Visitor Management",
                  "Structured Cabling & IT Integration",
                ],
                color: "from-blue-500 to-indigo-600",
              },
              {
                title: "Annual Maintenance Contract",
                description: "Reliable IT support to ensure uptime and performance",
                features: [
                  "Preventive & on-call support",
                  "Desktop, laptop & server maintenance",
                  "Chip-level repairs",
                  "Expert teams & quick resolution",
                ],
                color: "from-emerald-500 to-teal-600",
              },
              {
                title: "Rental Solutions",
                description: "Flexible, cost-effective tech rentals for businesses and events",
                features: [
                  "Laptops, desktops, printers & servers",
                  "Short or long-term contracts",
                  "CCTV & security systems",
                  "Scalable for startups & training",
                ],
                color: "from-orange-500 to-red-600",
              },
              {
                title: "Event IT Support",
                description: "End-to-end IT infrastructure for seamless events",
                features: [
                  "Temporary Wi-Fi & networking",
                  "Laptops, AV & LED displays",
                  "CCTV monitoring & security",
                  "Solutions for conferences & expos",
                ],
                color: "from-purple-500 to-pink-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transform transition-all duration-700 ease-out flex-shrink-0 snap-center w-48 hover:w-96 group ${
                  visibleCards.includes(index)
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white cursor-pointer overflow-hidden">
                  <CardContent className="p-4 hover:p-8 transition-all duration-500 relative h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex-1">
                      <div
                        className={`flex items-center justify-center w-12 h-12 hover:w-16 hover:h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-4 group-hover:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl mx-auto`}
                      >
                        <span className="text-white font-bold text-xl group-hover:text-2xl group-hover:scale-110 transition-all duration-300">
                          •
                        </span>
                      </div>

                      <h3 className="text-lg group-hover:text-2xl font-bold text-slate-900 mb-2 group-hover:mb-4 group-hover:text-cyan-600 transition-all duration-300 text-center group-hover:text-left line-clamp-2 group-hover:line-clamp-none">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 mb-2 group-hover:mb-6 leading-relaxed group-hover:text-slate-700 transition-all duration-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 overflow-hidden">
                        {service.description}
                      </p>

                      <ul className="space-y-1 group-hover:space-y-3 transition-all duration-300">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-2 group-hover:space-x-3 transform transition-all duration-300 opacity-60 group-hover:opacity-100"
                            style={{
                              transitionDelay: `${featureIndex * 50}ms`,
                            }}
                          >
                            <span className="w-4 h-4 group-hover:w-5 group-hover:h-5 text-cyan-500 mt-0.5 flex-shrink-0 group-hover:scale-110 group-hover:text-cyan-600 transition-all duration-300 text-xs group-hover:text-base">
                              ✓
                            </span>
                            <span className="text-slate-700 group-hover:text-slate-800 transition-colors duration-300 text-sm group-hover:text-base line-clamp-1 group-hover:line-clamp-none">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#0f172a" }}>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Get in touch with our experts for a customized solution that fits your business needs and unlocks your full
            potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="text-lg px-8 py-4 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center justify-center"
              style={{ background: "linear-gradient(to right, #06b6d4, #2563eb)" }}
            >
              Get Free Consultation
              <span className="ml-2">→</span>
            </button>
            <button
              className="text-lg px-8 py-4 border-2 border-slate-400 text-slate-200 hover:text-white rounded-lg transition-all duration-300 font-medium"
              style={{ backgroundColor: "transparent" }}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
