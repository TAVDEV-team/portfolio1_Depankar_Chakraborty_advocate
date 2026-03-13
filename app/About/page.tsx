import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image"

export default function About() {
  return (
    <main className="bg-white text-legal-charcoal antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-legal-navy py-16 lg:py-24 overflow-hidden bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block text-legal-gold font-semibold tracking-widest uppercase text-sm mb-4 text-yellow-500">
                Establishing Justice Since 1998
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Advocating for Your Rights with Integrity
              </h1>
              <h4 className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto lg:mx-0">
                Providing sophisticated legal counsel and dedicated representation to protect what matters most to you.
              </h4>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 border-2 border-legal-gold rounded-sm translate-x-4 translate-y-4 -z-10 transition group-hover:translate-x-2 group-hover:translate-y-2"></div>
                 <Image
                                            src="/rajib2.jpg"
                                            alt="Advocate Rajib"
                                            width={500}
                                            height={500}
                                            className="object-cover w-full h-full"
                                          />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Bio Text */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-serif text-legal-navy text-blue-950 font-bold">Firm Profile & Philosophy</h2>
              <div className="heading-divider mb-8 text-amber-400 font-bold">________</div>
              <div className="space-y-6 text-legal-charcoal leading-relaxed text-xl text-black">
                <p>
                  Founded on the principles of transparency and relentless advocacy, our firm has spent over two decades navigating the complex landscape of civil and corporate law. We believe that every client deserves a voice that is both powerful and ethical.
                </p>
                <p>
                  Our lead partner, Alexander Vance, brings a wealth of experience from prestigious international courtrooms to our local practice. We don't just provide legal services; we build long-term partnerships based on mutual respect and unwavering commitment to your success.
                </p>
              </div>

              {/* Education & Admissions */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif text-legal-navy mb-4 text-blue-950 font-bold">Education</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-legal-gold mr-2 ">•</span> Juris Doctor, Yale Law School
                    </li>
                    <li className="flex items-start">
                      <span className="text-legal-gold mr-2">•</span> B.A. Political Science, Georgetown University
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-legal-navy mb-4 text-blue-950 font-bold">Admissions</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-legal-gold mr-2">•</span> State Bar Association
                    </li>
                    <li className="flex items-start">
                      <span className="text-legal-gold mr-2">•</span> U.S. District Court, Southern District
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expertise Sidebar */}
            <div className="lg:col-span-5 bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-legal-navy shadow-inner border-blue-950">
              <h3 className="text-2xl font-serif text-legal-navy mb-6 text-blue-950 font-bold">Expertise</h3>
              <ul className="space-y-4 text-black">
                {[
                  "Corporate Litigation",
                  "Intellectual Property",
                  "Civil Rights Advocacy",
                  "Family Law & Mediation",
                ].map((item) => (
                  <li key={item} className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold">{item}</span>
                    <svg className="w-5 h-5 text-legal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-legal-navy text-white text-center bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold">Our Core Values</h2>
          <div className="heading-divider mx-auto mb-16 text-yellow-500 font-bold">_______</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Trust",
                desc: "Honesty is the cornerstone of our practice. We maintain complete transparency in every case.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Excellence",
                desc: "We strive for the highest standards of legal precision and professional performance.",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              },
              {
                title: "Dedication",
                desc: "Your case is our priority. We are tirelessly committed to achieving the best outcome.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((value) => (
              <div key={value.title} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-legal-gold/20 flex items-center justify-center rounded-full mb-6 border border-legal-gold text-yellow-600">
                  <svg className="w-8 h-8 text-legal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3 font-bold">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-12 shadow-xl rounded-sm border border-gray-100">
          <h2 className="text-4xl font-serif text-legal-navy mb-4 text-blue-950 font-bold">Discuss Your Case Today</h2>
          <p className="text-legal-charcoal mb-8 max-w-lg mx-auto text-gray-700 text-lg">
            Confidential consultations available. Let us help you navigate your legal challenges with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              className="bg-legal-navy bg-blue-950 text-white px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-legal-gold transition duration-300"
              href="tel:#"
            >
              Schedule a Consultation
            </a>
            <a
              className="bg-transparent text-blue-950 border border-legal-navy border-gray-700 text-legal-navy px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-gray-50 transition duration-300"
              href="#"
            >
              Contact Form
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}