import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EnquiryBox } from "@/components/enquiry-box"
import { Footer } from "@/components/Footer"
import { ClientList } from "@/components/client-list"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* <EnquiryBox /> */}
      <ClientList />
      <Testimonials />
      <Footer/>
    </main>
  )
}
