import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2B4C8C] text-gray-200">
      <div className="w-full pl-16 pr-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">QUICK LINKS</h3>
            <ul className="space-y-3">
              {[
                "Terms of Use",
                "Privacy Policy", 
                "Return Policy",
                "Shipping Policy",
                "Rental Policy",
                "Refund Policy"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white text-gray-300 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches Section */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">BRANCHES</h3>
            <ul className="space-y-3">
              {[
                "Bengaluru",
                "Chennai", 
                "Trivandrum",
                "Cochin",
                "Thrissur",
                "Malappuram",
                "Calicut",
                "Kannur",
                "Palakkad"
              ].map((branch) => (
                <li key={branch}>
                  <a href="#" className="hover:text-white text-gray-300 transition-colors duration-200">
                    {branch}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">CONTACT</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-3">Netcom Services</h4>
                <div className="flex items-start gap-2 text-gray-300 mb-4">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div className="text-sm leading-relaxed">
                    <p>Door No: CC 70/1174 A2 First floor</p>
                    <p>Mampilly centre, Peradoor Road</p>
                    <p>Kaloor Junction 682017</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href="tel:09447882299" className="hover:text-white text-gray-300 transition-colors duration-200">
                    09447882299
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a href="mailto:info@netcomservices.com" className="hover:text-white text-gray-300 transition-colors duration-200">
                    info@netcomservices.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">FOLLOW US</h3>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" }
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-600 hover:bg-white text-gray-200 hover:text-[#2B4C8C] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}

      </div>
    </footer>
  )
}