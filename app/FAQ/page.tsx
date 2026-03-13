// "use client";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import { useState } from "react";

// export default function FAQ() {
//   return (
//     <>
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="hero-gradient text-white py-16 px-6 text-center bg-gray-800">
//         <h1 className="font-serif text-6xl mb-4 text-amber-400">How can we assist you?</h1>
//         <p className="text-slate-300 text-xl mb-8 max-w-md mx-auto text-sm leading-relaxed">
//           Search our knowledge base or browse categories below for immediate answers regarding your legal matters.
//         </p>
//         <div className="relative max-w-md mx-auto">
//           <input
//             type="text"
//             placeholder="Search for questions..."
//             className="w-full bg-white/10 border border-gold/30 rounded-full py-4 px-6 pl-12 focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
//           />
//           <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold">
//             <svg
//               className="h-5 w-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//               ></path>
//             </svg>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Categories */}
//       <nav className="bg-white border-b border-slate-200 sticky top-[68px] z-40 overflow-x-auto whitespace-nowrap scrollbar-hide px-4 py-3">
//         <div className="flex space-x-6 text-sm font-medium uppercase tracking-wider justify-center">
//           <a className="text-gold border-b-2 border-gold pb-1 px-1" href="#general">General</a>
//           <a className="text-slate-500 hover:text-navy pb-1 px-1" href="#practice">Practice Areas</a>
//           <a className="text-slate-500 hover:text-navy pb-1 px-1" href="#billing">Billing</a>
//           <a className="text-slate-500 hover:text-navy pb-1 px-1" href="#consultation">Consultation</a>
//         </div>
//       </nav>

//       {/* FAQ Content */}
//       <main className="max-w-4xl mx-auto p-6 space-y-12">
//         {/* General Inquiries */}
//         <section className="space-y-4" id="general">
//           <div className="flex items-center space-x-3 mb-6">
//             <div className="h-px bg-gold flex-grow"></div>
//             <h2 className="font-serif text-7xl text-gray-800 text-bold">General Inquiries</h2>
//             <div className="h-px bg-gold flex-grow"></div>
//           </div>

//           <FAQItem question="What sets Vanguard & Associates apart from other firms?">
//             We combine elite legal expertise with a boutique approach to client service. Our partners are personally involved in every case, ensuring high-stakes matters receive the precision and sophistication they demand.
//           </FAQItem>

//           <FAQItem question="Where are your offices located?">
//             Our primary headquarters is located in the Financial District of New York City, with satellite offices in London and Dubai to serve our international clientele.
//           </FAQItem>
//         </section>

//         {/* Practice Areas */}
//         <section className="space-y-4" id="practice">
//           <div className="flex items-center space-x-3 mb-6">
//             <div className="h-px bg-gold flex-grow"></div>
//             <h2 className="font-serif text-7xl text-gray-800 text-bold">Practice Areas</h2>
//             <div className="h-px bg-gold flex-grow"></div>
//           </div>

//           <FAQItem question="Do you handle international corporate litigation?">
//             Yes, we specialize in complex cross-border disputes, regulatory compliance, and international arbitration. Our team is fluent in multiple legal jurisdictions.
//           </FAQItem>

//           <FAQItem question="What industries does the firm primarily represent?">
//             We represent leading institutions in FinTech, Private Equity, Maritime Law, and Intellectual Property for Global Technology firms.
//           </FAQItem>
//         </section>

//         {/* Billing */}
//         <section className="space-y-4" id="billing">
//           <div className="flex items-center space-x-3 mb-6">
//             <div className="h-px bg-gold flex-grow"></div>
//             <h2 className="font-serif text-7xl text-gray-800 text-bold">Billing & Retainers</h2>
//             <div className="h-px bg-gold flex-grow"></div>
//           </div>

//           <FAQItem question="How are legal fees structured?">
//             Depending on the nature of the engagement, we offer hourly billing, flat-fee project rates, or tailored retainer agreements. Full transparency is provided via our monthly audited statements.
//           </FAQItem>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }

// /* Reusable Accordion Item Component */
// function FAQItem({ question, children }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className={`accordion-item bg-white border border-slate-100 rounded-lg shadow-sm ${open ? "active" : ""}`}>
//       <div
//         className="flex justify-between items-center p-5 cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         <h3 className="font-medium text-navy text-base leading-snug">{question}</h3>
//         <span className="gold-icon text-gold ml-4" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
//           <svg
//             className="h-5 w-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
//           </svg>
//         </span>
//       </div>
//       <div className="accordion-content px-5 text-sm text-slate-600 leading-relaxed" style={{ maxHeight: open ? "500px" : "0", paddingBottom: open ? "1.5rem" : "0" }}>
//         {children}
//       </div>
//     </div>
//   );
// }


import Navbar from "@/components/Navbar"

import FAQ from "@/components/FAQ"

import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
     
      <FAQ />
     
      <Footer />
    </>
  )
}