"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Case } from "./caseData";

type CaseCardProps = {
  caseItem: Case;
};

const CaseCard: React.FC<CaseCardProps> = ({ caseItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 bg-gray-100"
    >
      <span className="text-xs uppercase tracking-widest text-on-tertiary-fixed-variant text-blue-800 font-bold">
        {caseItem.category}
      </span>

      <h3 className="text-xl font-bold text-primary mt-3 serif-tight text-black">
        {caseItem.title}
      </h3>

      <p className="text-on-surface-variant mt-3 text-gray-600">
        {caseItem.result}
      </p>

      {/* <Link
        href={`/case-results/${caseItem.slug}`}
        className="inline-block mt-6 text-primary font-semibold hover:underline text-blue-800"
      >
        View Details →
      </Link> */}
    </motion.div>
  );
};

export default CaseCard;