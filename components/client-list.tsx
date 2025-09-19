import Image from "next/image"

const clients = [
  { name: "Indian Navy", logo: "/indian-navy-logo.jpg" },
  { name: "Indian Air Force", logo: "/indian-air-force-logo.jpg" },
  { name: "VIVEL", logo: "/vivel-logo.jpg" },
  { name: "Government Organization", logo: "/government-seal-logo.jpg" },
  { name: "Keltron", logo: "/keltron-electronics-logo.jpg" },
  { name: "KSITC", logo: "/ksitc-transport-logo.jpg" },
  { name: "LuLu", logo: "/lulu-hypermarket-logo.jpg" },
  { name: "Medical Organization", logo: "/medical-organization-logo.jpg" },
  { name: "Lakshya", logo: "/lakshya-education-logo.jpg" },
  { name: "Muthoot Finance", logo: "/muthoot-finance-logo.jpg" },
  { name: "Aakash", logo: "/aakash-institute-logo.jpg" },
  { name: "KIMS Health", logo: "/kims-health-hospital-logo.jpg" },
  { name: "Railway Department", logo: "/indian-railway-logo.jpg" },
  { name: "Southern Railway", logo: "/southern-railway-logo.jpg" },
  { name: "Muthoot", logo: "/muthoot-group-logo.jpg" },
  { name: "NIC", logo: "/nic-government-logo.jpg" },
  { name: "V-Star", logo: "/v-star-company-logo.jpg" },
  { name: "Olive Builders", logo: "/olive-builders-construction-logo.jpg" },
  { name: "AIMA", logo: "/aima-management-logo.jpg" },
  { name: "FabIndia", logo: "/fabindia-retail-logo.jpg" },
  { name: "Zauba Corp", logo: "/zauba-corp-business-logo.jpg" },
  { name: "SAPINS", logo: "/sapins-company-logo.jpg" },
  { name: "CTS", logo: "/cts-technology-logo.jpg" },
  { name: "Riya", logo: "/riya-travel-logo.jpg" },
  { name: "Watermark", logo: "/watermark-company-logo.jpg" },
  { name: "TCS", logo: "/tcs-tata-consultancy-services-logo.jpg" },
  { name: "Bank of India", logo: "/bank-of-india-banking-logo.jpg" },
  { name: "Allianz", logo: "/generic-globe-protection-logo.png" },
]

export function ClientList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR CLIENTS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to serve a diverse range of clients across various industries, from government organizations to
            private enterprises, delivering excellence in every project.
          </p>
        </div>

        <div className="overflow-hidden bg-white rounded-lg shadow-sm py-8">
          <div className="relative">
            <div className="flex animate-scroll-icons whitespace-nowrap">
              {/* First set of client icons */}
              <div className="flex items-center space-x-12">
                {clients.map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      width={80}
                      height={50}
                      className="object-contain hover:scale-105 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless scrolling */}
              <div className="flex items-center space-x-12 ml-12">
                {clients.map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      width={80}
                      height={50}
                      className="object-contain hover:scale-105 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">And many more trusted partners across India</p>
        </div>
      </div>
    </section>
  )
}
