import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import PracticeAreas from "@/components/PracticeAreas"
import CaseStudies from "@/components/CaseStudies"
import BlogSection from "@/components/BlogSection"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <CaseStudies />
      <BlogSection />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}