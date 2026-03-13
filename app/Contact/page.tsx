import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <main>

      <Navbar />

      {/* HERO */}
      <section className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Our Legal Experts
          </h1>

          <p className="text-blue-100 text-lg">
            Providing authoritative legal counsel for Bangladesh
            Judge Court and High Court jurisdictions.
          </p>

        </div>
      </section>


      {/* MAIN GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <aside className="space-y-8">

          {/* Chamber Locations */}
          <div className="bg-white p-6 rounded-lg shadow border">

            <h2 className="text-xl font-bold text-blue-900 mb-6">
              Chamber Locations
            </h2>

            <div className="space-y-6">

              <div className="border-l-4 border-blue-900 pl-4">
                <h3 className="font-bold text-gray-900">
                  Bangladesh High Court
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Room 402, Supreme Court Bar Association Building <br />
                  Ramna, Dhaka-1000
                </p>
              </div>


              <div className="border-l-4 border-blue-900 pl-4">
                <h3 className="font-bold text-gray-900">
                  Bangladesh Judge Court
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Ajimunnessa Bhavan 5/1 <br />
                  Kailash Ghosh Lane <br />
                  Kotwali, Dhaka-1100
                </p>
              </div>

            </div>

          </div>


          {/* Business Hours */}
          <div className="bg-blue-50 p-6 rounded-lg border">

            <h2 className="text-xl font-bold text-blue-900 mb-4">
              Business Hours
            </h2>

            <ul className="space-y-2 text-sm text-gray-700">

              <li className="flex justify-between">
                <span>Sat - Wednesday</span>
                <span className="font-semibold">09:00 AM - 08:00 PM</span>
              </li>

              <li className="flex justify-between">
                <span>Thursday</span>
                <span className="font-semibold">09:00 AM - 04:00 PM</span>
              </li>

              <li className="flex justify-between text-red-600">
                <span>Friday</span>
                <span className="italic font-semibold">
                  Closed (Emergency Only)
                </span>
              </li>

            </ul>

          </div>


          {/* Direct Contact */}
          <div className="bg-white p-6 rounded-lg shadow border">

            <h2 className="text-xl font-bold text-blue-900 mb-6">
              Direct Contact
            </h2>

            <div className="space-y-4">

              <div>
                <p className="text-xs text-black uppercase font-semibold">
                  Phone
                </p>

                <p className="text-sm font-medium text-gray-500">
                  01715353165
                </p>
              </div>


              <div>
                <p className="text-xs text-black uppercase font-semibold">
                  Email
                </p>

                <p className="text-sm font-medium text-gray-500">
                  crajib8844@gmail.com
                </p>
              </div>

            </div>

          </div>

        </aside>


        {/* RIGHT SIDE FORM */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow border">

          <div className="bg-gray-50 border-b p-6">

            <h2 className="text-2xl font-bold text-blue-900">
              Request a Consultation
            </h2>

            <p className="text-gray-600 mt-2">
              Briefly describe your case and we will contact you shortly.
            </p>

          </div>


          <form className="p-6 space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-500">
                  Full Name
                </label>

                <input
                  className="w-full border rounded-md p-3 text-gray-500"
                  placeholder="Your name"
                />
              </div>


              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-600">
                  Email
                </label>

                <input
                  className="w-full border rounded-md p-3 text-gray-500"
                  placeholder="017xxxxxxxx"
                />
              </div>

            </div>


            <div>

              <label className="block text-sm font-semibold mb-1 text-gray-600">
                Legal Matter Type
              </label>

              <select className="w-full border rounded-md p-3 text-gray-500">

                <option>Select Case Type</option>
                <option>Civil</option>
                <option>Criminal</option>
                <option>Income Tax</option>
                <option>Company Matters</option>

              </select>

            </div>


            <div>

              <label className="block text-sm font-semibold mb-1 text-gray-600">
                Case Description
              </label>

              <textarea
                rows={5}
                className="w-full border rounded-md p-3 text-gray-500"
                placeholder="Briefly describe your case..."
              />

            </div>


            <button className="bg-blue-900 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Submit Request
            </button>

          </form>

        </div>

      </section>


      {/* MAP */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6 text-black">
            Judge Court Chamber Location
          </h2>

          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps?q=Ajimunnessa+Bhavan+5/1+Kailash+Ghosh+Lane+Dhaka&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
            />

          </div>

        </div>

      </section>


      <Footer />

    </main>
  )
}