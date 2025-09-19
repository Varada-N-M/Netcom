import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

  
export function Footer() {
  return (
    <footer className="bg-[#1D3D91] text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {["Terms of Use","Privacy Policy","Return Policy","Shipping Policy","Rental Policy","Refund Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches Section */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Branches</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {[
                "Bengaluru","Chennai","Trivandrum","Cochin","Thrissur",
                "Malappuram","Calicut","Kannur","Palakkad"
              ].map((branch) => (
                <a key={branch} href="#" className="hover:text-white">
                  {branch}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contact</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">Netcom Services</h4>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-300" />
                  <div>
                    <p>Door No: CC 70/1174 A2 First floor</p>
                    <p>Mampilly centre, Peradoor Road</p>
                    <p>Kaloor Junction 682017</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-300" />
                  <a href="tel:09447882299" className="hover:text-white">09447882299</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-300" />
                  <a href="tel:08068884849" className="hover:text-white">08068884849</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-300" />
                  <a href="mailto:info@netcomservices.com" className="hover:text-white">Email us</a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4">
                <h4 className="font-medium text-white mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Instagram, label: "Instagram" }
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="w-8 h-8 border border-gray-300 text-gray-200 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1D3D91] transition-colors"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-500 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Netcom Services. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-400">
              Serving customers across India with quality technology solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}