import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import MeetTilottam from "@/components/MeetTilottam";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import CodeOfHonor from "@/components/CodeOfHonor";
import TrainingSection from "@/components/TrainingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <MeetTilottam />
        <WhoIsThisFor />
        <ServicesSection />
        <PricingSection />
        <CodeOfHonor />
        <TrainingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
