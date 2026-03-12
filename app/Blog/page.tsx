import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BlogSection from "@/components/BlogSection"

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-10">Latest Blog</h1>

        <BlogSection />
      </section>

      <Footer />
    </main>
  )
}