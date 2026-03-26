"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CaseCTA = (): JSX.Element => {
  return (
    <section className="py-24 bg-primary text-black">
      <div className="max-w-4xl mx-auto px-8 text-center">
        
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold serif-tight"
        >
          Need Strong Legal Representation?
        </motion.h2>

        <p className="mt-6 text-lg opacity-80">
          Get professional legal guidance tailored to your case. Take the first step today.
        </p>

        <Link href="/Contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-10 bg-tertiary-fixed text-white px-8 py-4 rounded font-semibold bg-blue-950"
  >
    Request Consultation
  </motion.button>
</Link>
      </div>
    </section>
  );
};

export default CaseCTA;