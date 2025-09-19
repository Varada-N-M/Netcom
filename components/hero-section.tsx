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
            }, index * 150)
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
    <div className="bg-background">
      <section className="relative pt-16 pb-16 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 border border-blue-500/30 rounded-full text-blue-600 text-xs font-medium mb-4 bg-blue-50">
              <span className="w-3.5 h-3.5 mr-1.5 text-blue-500">✓</span>
              Trusted IT Solutions Provider
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 text-balance">
              <span className="block text-blue-400 font-bold">
                Simplifying Technology. Amplifying Success.
                <span className="ml-1 text-xs md:text-sm font-medium text-slate-500">since 2007</span>
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 mb-6 max-w-2xl mx-auto text-pretty leading-relaxed">
              Comprehensive IT infrastructure, ELV solutions, and professional training to unlock your organization's
              full technological potential with reliability and innovation.
            </p>
          </div>

          <div className="flex gap-8 mb-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
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
                className={`transform transition-all duration-700 ease-out flex-shrink-0 snap-center w-64 hover:w-96 group ${
                  visibleCards.includes(index)
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white cursor-pointer overflow-hidden">
                  <CardContent className="p-6 transition-all duration-500 relative h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex-1">
                      <div
                        className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${service.color} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl mx-auto`}
                      >
                        <span className="text-white font-bold text-xl transition-all duration-300">•</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-all duration-300 text-center group-hover:text-left">
                        {service.title}
                      </h3>

                      <p className="text-sm text-slate-600 mb-4 leading-relaxed group-hover:text-slate-700 transition-all duration-300 opacity-70 group-hover:opacity-100">
                        {service.description}
                      </p>

                      <ul className="space-y-2 transition-all duration-300">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-2 transform transition-all duration-300 opacity-80 group-hover:opacity-100"
                            style={{
                              transitionDelay: `${featureIndex * 50}ms`,
                            }}
                          >
                            <span className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0 group-hover:text-cyan-600 transition-all duration-300 text-xs">
                              ✓
                            </span>
                            <span className="text-slate-700 group-hover:text-slate-800 transition-colors duration-300 text-sm">
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
    </div>
  )
}
