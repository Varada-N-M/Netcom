"use client"

import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showServicesMenu, setShowServicesMenu] = useState(false)

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Academy", href: "#academy" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    {
      title: "IT Infrastructure & Solutions",
      description: "Comprehensive IT systems for business continuity and growth",
      features: [
        "Network design & implementation",
        "Server setup & integration",
        "System upgrades & lifecycle support",
      ],
    },
    {
      title: "ELV Solutions",
      description: "Extra Low Voltage systems for smarter communication and security",
      features: ["CCTV & Access Control", "EPABX & Intercom", "Video Door Phones & Visitor Management"],
    },
    {
      title: "Annual Maintenance Contract (AMC)",
      description: "Reliable IT support to ensure uptime and performance",
      features: [
        "Preventive & on-call support",
        "Desktop, laptop & server maintenance",
        "Expert teams & quick resolution",
      ],
    },
    {
      title: "Rental Solutions",
      description: "Flexible, cost-effective tech rentals for businesses and events",
      features: [
        "Laptops, desktops, printers & servers",
        "Short or long-term contracts",
        "Scalable for startups & training",
      ],
    },
    {
      title: "Event IT Support",
      description: "End-to-end IT infrastructure for seamless events",
      features: ["Temporary Wi-Fi & networking", "AV & LED displays", "On-site technical support"],
    },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "#0f172a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-cyan-500 rounded-lg">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-white">NetCom</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onMouseEnter={() => setShowServicesMenu(true)}
                      onMouseLeave={() => setShowServicesMenu(false)}
                      className="text-white hover:text-cyan-400 transition-colors duration-200 px-3 py-2 text-sm font-medium flex items-center space-x-1"
                    >
                      <span>{item.name}</span>
                      <span className="text-xs">▼</span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-white hover:text-cyan-400 transition-colors duration-200 px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              className="text-white hover:text-cyan-400 transition-colors duration-200 px-4 py-2 text-sm font-medium rounded-md"
              style={{ backgroundColor: "transparent" }}
            >
              Login
            </button>
            <button
              className="text-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
              style={{ backgroundColor: "#ea580c" }}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {showServicesMenu && (
          <div
            className="absolute left-0 right-0 top-16 bg-white shadow-2xl border-t border-slate-200 z-40"
            onMouseEnter={() => setShowServicesMenu(true)}
            onMouseLeave={() => setShowServicesMenu(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Services</h3>
                <p className="text-slate-600">Comprehensive IT solutions for your business needs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-cyan-100 group-hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                          <span className="text-cyan-600 group-hover:text-white font-bold">•</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-sm text-slate-700 mb-3 leading-relaxed">{service.description}</p>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-xs text-slate-600 flex items-center">
                              <div className="w-1 h-1 bg-cyan-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                <div className="text-sm text-slate-600">
                  Need a custom solution?{" "}
                  <a href="#contact" className="text-cyan-600 hover:text-cyan-700 font-medium">
                    Contact our experts
                  </a>
                </div>
                <button
                  className="text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  style={{ backgroundColor: "#0891b2" }}
                >
                  View All Services
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" style={{ backgroundColor: "#0f172a" }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                <button
                  className="w-full text-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                  style={{ backgroundColor: "transparent" }}
                >
                  Login
                </button>
                <button
                  className="w-full text-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                  style={{ backgroundColor: "#ea580c" }}
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
