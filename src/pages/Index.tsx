import StickyHeader from "@/components/landing/StickyHeader";
import HeroSection from "@/components/landing/HeroSection";
import StatsBlock from "@/components/landing/StatsBlock";
import CapabilitiesSection from "@/components/landing/CapabilitiesSection";
import StepsSection from "@/components/landing/StepsSection";
import ModelsSection from "@/components/landing/ModelsSection";
import PipelineSection from "@/components/landing/PipelineSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <StickyHeader />
    <HeroSection />
    <StatsBlock />
    <CapabilitiesSection />
    <StepsSection />
    <ModelsSection />
    <PipelineSection />
    {/* Footer spacer */}
    <div className="h-16" />
  </div>
);

export default Index;
