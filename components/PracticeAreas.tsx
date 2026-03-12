import { FaBalanceScale, FaGavel, FaFileInvoiceDollar, FaBuilding } from "react-icons/fa";

export default function PracticeAreas() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Practice Areas
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Civil Law */}
          <div className="p-8 bg-gray-100 rounded-xl flex flex-col items-start gap-4 hover:shadow-lg transition">
            <FaBalanceScale className="text-blue-800 text-4xl" />
            <h4 className="text-xl font-bold text-black">Civil Law</h4>
            <p className="text-gray-600">
              Property disputes, contracts, and civil litigation.
            </p>
            <p className="text-blue-700 font-semibold cursor-pointer hover:underline">
              Learn More...
            </p>
          </div>

          {/* Criminal Law */}
          <div className="p-8 bg-gray-100 rounded-xl flex flex-col items-start gap-4 hover:shadow-lg transition">
            <FaGavel className="text-blue-800 text-4xl" />
            <h4 className="text-xl font-bold text-black">Criminal Defense</h4>
            <p className="text-gray-600">
              Strong defense for criminal cases.
            </p>
            <p className="text-blue-700 font-semibold cursor-pointer hover:underline">
              Learn More...
            </p>
          </div>

          {/* Income Tax */}
          <div className="p-8 bg-gray-100 rounded-xl flex flex-col items-start gap-4 hover:shadow-lg transition">
            <FaFileInvoiceDollar className="text-blue-800 text-4xl" />
            <h4 className="text-xl font-bold text-black">Income Tax</h4>
            <p className="text-gray-600">
              Tax planning, compliance, and dispute resolution.
            </p>
            <p className="text-blue-700 font-semibold cursor-pointer hover:underline">
              Learn More...
            </p>
          </div>

          {/* Company Matters */}
          <div className="p-8 bg-gray-100 rounded-xl flex flex-col items-start gap-4 hover:shadow-lg transition">
            <FaBuilding className="text-blue-800 text-4xl" />
            <h4 className="text-xl font-bold text-black">Company Matters</h4>
            <p className="text-gray-600">
              Corporate registration, compliance, and advisory.
            </p>
            <p className="text-blue-700 font-semibold cursor-pointer hover:underline">
              Learn More...
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}