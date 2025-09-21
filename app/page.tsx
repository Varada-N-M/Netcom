import { AboutUs } from "@/components/about-us"
import { ClientList } from "@/components/client-list"
import { ContactSection } from "@/components/ContactSection"
import { CopyrightNote } from "@/components/CopyrightNote"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { Testimonials } from "@/components/testimonials"
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
