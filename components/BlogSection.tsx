import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-12 text-black">
          Legal Insights
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <Image
              src="/lawyer3.jpg"
              alt="Labor Law"
              width={500}
              height={300}
              className="rounded mb-4"
            />

            <h4 className="font-bold text-black">
              Labor Law Amendments
            </h4>
          </div>

          <div>
            <Image
              src="/lawyer4.jpeg"
              alt="Land Registration"
              width={500}
              height={300}
              className="rounded mb-4"
            />

            <h4 className="font-bold text-black">
              Land Registration Guide
            </h4>
          </div>

          <div>
            <Image
              src="/lawyer.webp"
              alt="Intellectual Property"
              width={500}
              height={300}
              className="rounded mb-4"
            />

            <h4 className="font-bold text-black">
              Intellectual Property
            </h4>
          </div>

        </div>

      </div>

    </section>
  );
}