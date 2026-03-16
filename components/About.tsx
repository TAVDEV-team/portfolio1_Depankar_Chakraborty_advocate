import Image from "next/image"

export default function About() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row gap-16 items-center">

          <div className="w-full md:w-1/3">

            <div className="aspect-square bg-gray-300 rounded-xl">
              <Image
                            src="/Rajib.jpg"
                            alt="Advocate Rajib"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                          />
            </div>

          </div>

          <div className="md:w-2/3 space-y-6">

            <h2 className="text-3xl font-bold text-black">
              Meet Adv. Depankar Chakraborty
            </h2>
            <h4 className="text-blue-800 font-bold">
              SENIOR ADVOCATE, JUDGE COURT
            </h4>

            <p className="text-gray-600 mt-4">
            With 6 years of dedicated practice in the Bangladesh legal system, 
            Advocate Depankar Chakraborty has established a reputation for integrity 
            and an uncompromising pursuit of justice. Specializing in Constitutional 
            and corporate law, he has successfully represented both high-profile 
            corporate entities and individuals in complex legal disputes.
          </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="p-4 bg-white shadow rounded">
                <div className="text-primary text-3xl font-bold text-blue-800">15+</div>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>

              <div className="p-4 bg-white shadow rounded">
                <div className="text-primary text-3xl font-bold text-blue-800">98%</div>
                <p className="text-sm text-gray-500">Success Rate</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}