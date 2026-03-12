import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PracticeAreas from "@/components/PracticeAreas"

export default function PracticeAreasPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-10">Practice Areas</h1>

        <PracticeAreas />
      </section>

      <Footer />
    </main>
  )
}