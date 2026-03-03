import StickyHeader from "@/components/landing/StickyHeader";
import HeroSection from "@/components/landing/HeroSection";
import StatsBlock from "@/components/landing/StatsBlock";
import CapabilitiesSection from "@/components/landing/CapabilitiesSection";
import StepsSection from "@/components/landing/StepsSection";
import ModelsSection from "@/components/landing/ModelsSection";
import PipelineSection from "@/components/landing/PipelineSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background light-mode-gradient dark:dark-mode-gradient">
    <StickyHeader />
    <HeroSection />
    <StatsBlock />
    <CapabilitiesSection />
    <StepsSection />
    <ModelsSection />
    <PipelineSection />
    <Footer />
  </div>
);

export default Index;
