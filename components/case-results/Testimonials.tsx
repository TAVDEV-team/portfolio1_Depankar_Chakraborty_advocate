"use client";

import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rahman Ahmed",
    text: "Highly professional and strategic. My land dispute was resolved faster than expected.",
  },
  {
    name: "Nusrat Jahan",
    text: "Exceptional legal support. I felt confident throughout the entire process.",
  },
  {
    name: "Imran Hossain",
    text: "Handled my corporate case with precision. Strongly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-surface-container-low bg-gray-800">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-primary serif-tight mb-12">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t: Testimonial, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <p className="text-on-surface-variant text-gray-600 italic">
                “{t.text}”
              </p>

              <h4 className="mt-4 font-semibold text-blue-800">
                — {t.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;