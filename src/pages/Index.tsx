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
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MouseTrailEffect from "@/components/MouseTrailEffect";


const Index = () => {
  return (
    <div className="min-h-screen relative">
      <MouseTrailEffect />
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
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
