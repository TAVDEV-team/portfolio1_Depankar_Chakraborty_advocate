import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="py-24 bg-slate-900 text-white">

      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold mb-16">
          Notable Success Stories
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-4">

            <Image
              src="/lawyer.webp"
              alt="Lawyer case"
              width={600}
              height={400}
              className="rounded"
            />

            <h4 className="text-2xl font-bold">
              Rahman vs State
            </h4>

            <p className="text-slate-300">
              Landmark constitutional law case.
            </p>

          </div>

          <div className="space-y-4">

            <Image
              src="/images.jpeg"
              alt="Corporate case"
              width={600}
              height={400}
              className="rounded"
            />

            <h4 className="text-2xl font-bold">
              TechCorp Dispute
            </h4>

            <p className="text-slate-300">
              Multi-million corporate case victory.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}