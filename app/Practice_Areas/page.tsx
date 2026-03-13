import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PracticeAreas() {

  const areas = [
    {
      title: "Civil Litigation",
      desc: "Comprehensive representation for property disputes, contract enforcement, family law, and tort claims. We focus on protecting your rights and securing equitable resolutions through mediation or court proceedings.",
      points: [
        "Property & Real Estate",
        "Contractual Disputes",
        "Inheritance & Succession",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Criminal Defense",
      desc: "Robust defense strategies for white-collar crimes, financial fraud, and complex criminal litigation. Our team ensures due process and provides vigorous advocacy at every stage of the legal system.",
      points: ["White Collar Crimes", "Bail & Trial Advocacy", "Appellate Practice"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="2" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Income Tax",
      desc: "Expert tax planning and litigation services for individuals and corporations. We handle assessment proceedings, appeals before tribunals, and advisory on complex tax matters.",
      points: [
        "Tax Planning & Advisory",
        "Search & Seizure Cases",
        "Tax Appeals",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Company Matters",
      desc: "Specialized legal guidance in corporate law including company formation, mergers, shareholder disputes, and regulatory compliance.",
      points: [
        "Mergers & Acquisitions",
        "Shareholder Disputes",
        "Corporate Compliance",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <main>

      <Navbar />

      {/* Hero Section */}
      <section
        className="py-24 text-center text-white"
        style={{
          background:
            "linear-gradient(rgba(15,23,42,0.9), rgba(15,23,42,0.85)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Our Practice Areas
          </h1>

          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>

          <p className="text-slate-300 text-lg leading-relaxed">
            Providing strategic legal counsel and dedicated representation
            across diverse legal matters with professionalism and integrity.
          </p>

        </div>
      </section>


      {/* Practice Areas Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition duration-300"
            >

              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full text-slate-700">
                {area.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-900 font-serif">
                {area.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {area.desc}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-500">
                {area.points.map((point) => (
                  <li key={point} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                    {point}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Need Legal Assistance?
          </h2>

          <p className="text-slate-400 mb-10 text-lg">
            Our experienced legal professionals are ready to assist you.
            Schedule a confidential consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:01715353165"
              className="px-8 py-3 border border-amber-500 text-amber-500 font-medium rounded-sm hover:bg-amber-500 hover:text-slate-900 transition"
            >
              Call Now
            </a>

            <a
              href="/contact"
              className="px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-sm hover:bg-amber-400 transition uppercase tracking-wider text-sm"
            >
              Book Appointment
            </a>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}