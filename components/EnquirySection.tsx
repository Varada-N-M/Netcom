"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import emailjs from "emailjs-com"
import { useRef } from "react"

export function ContactSection() {
  // Contact details
  const address =
    "Netcom Service,CC 70/1174 A2 First floor, Mampilly centre, Peradoor Road, Kaloor Junction 682017"
  const email = "info@netcomservices.com"
  const phone = "9447882299, 8068848499, 0484 4042359"

  // Encoded address for Google Maps embed
  const encodedAddress = encodeURIComponent(
    "Netcom Service, Kaloor Junction, Ernakulam, Kerala 682017, India"
  )

  // Form ref for EmailJS
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    emailjs
      .sendForm(
        "your_service_id", // 🔑 replace with EmailJS Service ID
        "your_template_id", // 🔑 replace with EmailJS Template ID
        form.current,
        "your_public_key" // 🔑 replace with EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Enquiry sent successfully!")
          form.current?.reset()
        },
        (error) => {
          alert("❌ Failed to send: " + error.text)
        }
      )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-2">
            CONTACT
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            You May <span className="text-red-600">Contact Us</span>
          </h2>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <a
              href={`mailto:${email}`}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              {email}
            </a>
          </div>

          {/* Call */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call</h3>
            <div className="flex flex-col items-center space-y-1">
              {phone.split(",").map((num, idx) => (
                <a
                  key={idx}
                  href={`tel:${num.trim()}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  +91 {num.trim()}
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{address}</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg mb-16">
          <iframe
            src={`https://www.google.com/maps?q=${encodedAddress}&output=embed&z=15`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>

        {/* Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Send Us an <span className="text-red-600">Enquiry</span>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
