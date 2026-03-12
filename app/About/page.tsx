import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import About from "@/components/About"

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-10">About The Lawyer</h1>

        <About />
      </div>

      <Footer />
    </main>
  )
}