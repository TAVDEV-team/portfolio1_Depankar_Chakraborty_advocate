import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="bg-white text-gray-800 font-sans antialiased">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[#1a2a44] py-20 overflow-hidden">

        <div className="absolute inset-0">
          <Image
                                                      src="/library.png"
                                                      alt="Advocate Rajib"
                                                      width={500}
                                                      height={500}
                                                      className="object-cover w-full h-full"
                                                    />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-white">

          <span className="inline-block px-3 py-1 bg-[#c5a059] text-xs font-bold uppercase tracking-widest">
            Featured Insight
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mt-6 leading-tight">
            Navigating New Compliance Standards in Corporate Governance
          </h1>

          <p className="text-gray-300 text-lg mt-4 max-w-xl">
            An in-depth analysis of the 2024 regulatory shifts affecting
            multinational corporations and domestic enterprises alike.
          </p>

          <Link
            href="/blog/compliance-governance"
            className="inline-block mt-6 text-[#c5a059] font-bold uppercase tracking-widest text-sm underline underline-offset-8 hover:text-white"
          >
            Read Full Article →
          </Link>

        </div>
      </section>


      {/* BLOG CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col lg:flex-row gap-12">

          {/* BLOG POSTS */}
          <div className="lg:w-2/3 space-y-12">

            <h2 className="text-2xl font-serif font-bold border-b pb-4">
              Latest Legal Updates
            </h2>


            {/* ARTICLE 1 */}
            <article className="flex flex-col md:flex-row gap-8 group">

              <div className="md:w-1/3 relative h-48">

                <Image
                                                      src="/family.png"
                                                      alt="Advocate Rajib"
                                                      width={500}
                                                      height={500}
                                                      className="object-cover w-full h-full"
                                                    />

              </div>

              <div className="md:w-2/3 space-y-3">

                <div className="text-xs font-bold uppercase tracking-wider text-[#c5a059]">
                  Family Law • Oct 24, 2023
                </div>

                <h3 className="text-2xl font-serif font-bold group-hover:text-[#c5a059]">
                  Understanding Asset Division in High-Net-Worth Divorces
                </h3>

                <p className="text-gray-600">
                  Exploring the complexities of private equity valuation and
                  international property holdings during marital dissolution.
                </p>

                <p className="text-sm font-medium text-gray-700">
                  Elizabeth Montgomery
                </p>

              </div>

            </article>


            {/* ARTICLE 2 */}
            <article className="flex flex-col md:flex-row gap-8 group">

              <div className="md:w-1/3 relative h-48">

                <Image
                                                      src="/litigation.jpg"
                                                      alt="Advocate Rajib"
                                                      width={500}
                                                      height={500}
                                                      className="object-cover w-full h-full"
                                                    />

              </div>

              <div className="md:w-2/3 space-y-3">

                <div className="text-xs font-bold uppercase tracking-wider text-[#c5a059]">
                  Litigation • Oct 19, 2023
                </div>

                <h3 className="text-2xl font-serif font-bold group-hover:text-[#c5a059]">
                  The Impact of AI Evidence in Modern Civil Litigation
                </h3>

                <p className="text-gray-600">
                  How courts are adapting to AI-generated evidence and the
                  ethical implications for legal practitioners.
                </p>

                <p className="text-sm font-medium text-gray-700">
                  Marcus V. Thorne
                </p>

              </div>

            </article>
            {/* ARTICLE 3 */}
<article className="flex flex-col md:flex-row gap-8 group">
  <div className="md:w-1/3 shrink-0">
    <Image
                                                      src="/article3.png"
                                                      alt="Advocate Rajib"
                                                      width={500}
                                                      height={500}
                                                      className="object-cover w-full h-full"
                                                    />
  </div>

  <div className="md:w-2/3 space-y-3">
    <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-wider text-legal-gold">
      <span>Real Estate</span>
      <span className="text-gray-300">•</span>
      <span className="text-gray-500">Oct 12, 2023</span>
    </div>
    <h3 className="text-2xl font-serif font-bold group-hover:text-legal-gold transition-colors">
      Commercial Leasing: Protecting Interests in a Post-Pandemic Market
    </h3>
    <p className="text-gray-600 line-clamp-2">
      Key clauses to watch in modern commercial lease agreements to ensure flexibility and long-term viability for tenants.
    </p>
    <p className="text-sm font-medium text-legal-blue">Sarah L. Jenkins, Esq.</p>
  </div>
</article>

          </div>


          {/* SIDEBAR */}
          <aside className="lg:w-1/3 space-y-12">

            <div className="bg-[#1a2a44] p-8 text-white rounded shadow">

              <h3 className="text-xl font-serif mb-4 border-b border-[#c5a059] pb-2 inline-block">
                The Legal Brief
              </h3>

              <p className="text-gray-300 text-sm mb-6">
                Stay informed with our weekly digest of legal insights.
              </p>

              <form className="space-y-4">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded text-black"
                />

                <button className="w-full bg-[#c5a059] py-3 text-sm font-bold uppercase tracking-widest hover:opacity-90">
                  Subscribe
                </button>

              </form>

              {/* AFTER SIDEBAR: Popular Posts */}
<div className="space-y-6 mt-12">
  <h3 className="text-lg font-bold text-legal-blue uppercase tracking-wider border-l-4 border-legal-gold pl-4">
    Popular Posts
  </h3>
  <ul className="space-y-6">
    <li>
      <a className="block group" href="https://www.sciencedirect.com/science/article/abs/pii/S1544612316302392">
        <span className="text-xs text-legal-gold font-bold">1. Corporate Law</span>
        <p className="text-sm font-serif font-bold group-hover:underline mt-1">
          Shareholder Rights in Mergers &amp; Acquisitions
        </p>
      </a>
    </li>
    <li>
      <a className="block group" href="https://www.hrfabrika.com/posts/en/non-compete-clauses-in-employment-law-requirements-and-enforcement">
        <span className="text-xs text-legal-gold font-bold">2. Employment Law</span>
        <p className="text-sm font-serif font-bold group-hover:underline mt-1">
          Non-Compete Clauses: What You Need to Know
        </p>
      </a>
    </li>
    <li>
      <a className="block group" href="#">
        <span className="text-xs text-legal-gold font-bold">3. Intellectual Property</span>
        <p className="text-sm font-serif font-bold group-hover:underline mt-1">
          Protecting Digital Assets in Global Markets
        </p>
      </a>
    </li>
  </ul>
</div>

{/* Categories */}
<div className="space-y-4 mt-12">
  <h3 className="text-lg font-bold text-legal-blue uppercase tracking-wider border-l-4 border-legal-gold pl-4">
    Categories
  </h3>
  <div className="flex flex-wrap gap-2">
    <a className="bg-legal-gray px-3 py-1 text-xs font-medium text-legal-blue hover:bg-legal-blue hover:text-white transition" href="#">Corporate Law</a>
    <a className="bg-legal-gray px-3 py-1 text-xs font-medium text-legal-blue hover:bg-legal-blue hover:text-white transition" href="#">Family Law</a>
    <a className="bg-legal-gray px-3 py-1 text-xs font-medium text-legal-blue hover:bg-legal-blue hover:text-white transition" href="#">Litigation</a>
    <a className="bg-legal-gray px-3 py-1 text-xs font-medium text-legal-blue hover:bg-legal-blue hover:text-white transition" href="#">Intellectual Property</a>
    <a className="bg-legal-gray px-3 py-1 text-xs font-medium text-legal-blue hover:bg-legal-blue hover:text-white transition" href="#">Real Estate</a>
  </div>
</div>

            </div>
            
            
          </aside>
          

        </div>

      </section>

      <Footer />

    </main>
  )
}