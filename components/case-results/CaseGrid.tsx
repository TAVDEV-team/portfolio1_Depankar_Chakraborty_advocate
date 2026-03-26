"use client";

import { motion } from "framer-motion";
import { cases, Case } from "./caseData";
import CaseCard from "./CaseCard";

const CaseGrid: React.FC = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black serif-tight">
            Representative Case Results
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl text-gray-700">
            A selection of recent legal outcomes demonstrating successful advocacy across civil,
            criminal, and corporate matters.
          </p>
        </div>

        {/* Animated Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cases.map((caseItem: Case) => (
            <CaseCard key={caseItem.slug} caseItem={caseItem} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CaseGrid;