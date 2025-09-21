import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  // Contact details
  const address =
    "Door No: CC 70/1174 A2 First floor, Mampilly centre, Peradoor Road, Kaloor Junction 682017";
  const email = "info@netcomservices.com";
  const phone = "09447882299";

  // Encoded address for Google Maps embed
  const encodedAddress = encodeURIComponent(
    "Netcom service, Kaloor Junction, Ernakulam, Kerala 682017, India"
  );

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
            <a
              href={`tel:${phone}`}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              +91 {phone}
            </a>
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

        {/* Google Maps Embed (No API key needed) */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
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
      </div>
    </section>
  );
}
