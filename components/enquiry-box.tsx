"use client"

import type React from "react"
import { useState } from "react"

export function EnquiryBox() {
  const [isMinimized, setIsMinimized] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your enquiry! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isMinimized) {
    return (
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          style={{ background: "linear-gradient(to right, #0891b2, #2563eb)" }}
        >
          <span className="text-xl">💬</span>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-80">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 text-white relative" style={{ background: "linear-gradient(to right, #0891b2, #2563eb)" }}>
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute right-3 top-3 text-white/80 hover:text-white transition-colors"
          >
            ✕
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <span className="text-xl">💬</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Get Quote</h3>
              <p className="text-cyan-100 text-sm">Quick response guaranteed</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-slate-900"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-slate-900"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-slate-900"
            />
          </div>

          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-slate-900"
            >
              <option value="">Select Service *</option>
              <option value="it-infrastructure">IT Infrastructure & Solutions</option>
              <option value="elv-solutions">ELV Solutions</option>
              <option value="amc">Annual Maintenance Contract</option>
              <option value="rental-solutions">Rental Solutions</option>
              <option value="event-support">Event IT Support</option>
            </select>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Brief description of your requirements..."
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none text-slate-900"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
            style={{ background: "linear-gradient(to right, #0891b2, #2563eb)" }}
          >
            <span>📤</span>
            Send Enquiry
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-slate-50 p-4 border-t border-slate-200">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-cyan-600">📞</span>
              <span>+91 XXX XXX XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-600">✉️</span>
              <span>info@netcom.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
