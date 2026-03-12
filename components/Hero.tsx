import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="lg:w-1/2 space-y-8">

            <div className="inline-block text-blue-900 text-sm font-semibold bg-sky-100/60 px-4 py-1 rounded-full">
              Expert Legal Counsel in Bangladesh
            </div>

            <h1 className="text-6xl font-extrabold leading-tight text-black">
            Justice for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500">
              Common Man
            </span>{" "}
            &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
              Corporation
            </span>
          </h1>

            <p className="text-slate-600">
            Professional legal services across the High Court and Supreme Court
            of Bangladesh.
          </p>

          <p className="text-slate-600 mt-2">
            Providing trustworthy and authoritative legal services for over 10+ years 
            in civil, criminal, income tax, and company matters across the Judge Court 
            and High Court in Bangladesh.
          </p>

            <div className="flex gap-4">

            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-950 transition">
              Request Consultation -
            </button>

            <button className="bg-white text-blue-900 border border-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
              View Success Stories
            </button>

          </div>

          </div>

          <div className="lg:w-1/2">

            <div className="rounded-2xl h-[500px] overflow-hidden">
            <Image
              src="/rajib1.jpg"
              alt="Advocate Rajib"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          </div>

        </div>

      </div>

    </section>
  );
}