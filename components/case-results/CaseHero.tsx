import React from "react";

const CaseHero: React.FC = () => {
  return (
    <section className="relative py-24 bg-[url('/case.jpg')] bg-cover bg-center">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <span className="text-gray-300 text-sm uppercase tracking-widest">
          Proven Legal Performance
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 serif-tight">
          Case Results
        </h1>

        <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
          Real outcomes from six years of legal practice in the Bangladeshi Judge Court —
          demonstrating strategic advocacy, precision, and consistent client success.
        </p>
      </div>

    </section>
  );
};

export default CaseHero;