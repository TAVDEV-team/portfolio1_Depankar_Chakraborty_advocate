import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Contact from "@/components/Contact"

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-10">Contact</h1>

        <Contact />
      </section>

      <Footer />
    </main>
  )
}