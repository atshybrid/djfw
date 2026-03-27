import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import BenefitsSection from "@/components/BenefitsSection";
import JournalistIssuesSection from "@/components/JournalistIssuesSection";
import InsuranceBenefitsSection from "@/components/InsuranceBenefitsSection";
import LegalCellSection from "@/components/LegalCellSection";
import TestimonialSection from "@/components/TestimonialSection";
import JoinCTASection from "@/components/JoinCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <BenefitsSection />
        <JournalistIssuesSection />
        <InsuranceBenefitsSection />
        <LegalCellSection />
        <TestimonialSection />
        <JoinCTASection />
      </main>
      <Footer />
    </>
  );
}


