import CaseHero from "@/components/case-results/CaseHero";
import CaseGrid from "@/components/case-results/CaseGrid";
import Testimonials from "@/components/case-results/Testimonials";
import CaseCTA from "@/components/case-results/CaseCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CaseResultsPage() {
  return (
    <main>
        <Navbar/>
      <CaseHero />
      <CaseGrid />
      <Testimonials />
      <CaseCTA />
      <Footer/>
    </main>
  );
}