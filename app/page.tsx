import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EnquiryBox } from "@/components/enquiry-box"
import { Footer } from "@/components/Footer"
import { ClientList } from "@/components/client-list"
import { Testimonials } from "@/components/testimonials"
import { AboutUs } from "@/components/about-us"
import { CopyrightNote } from "@/components/CopyrightNote"
import { ContactSection } from "@/components/ContactSection"
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* <EnquiryBox /> */}
      <AboutUs />
      <ClientList />
      <Testimonials />
      <ContactSection />
      <Footer />
        <CopyrightNote />
    </main>
  )
}
