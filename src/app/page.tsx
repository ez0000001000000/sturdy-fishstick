import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import EnterpriseSection from "@/components/sections/enterprise";
import AIDevsSection from "@/components/sections/ai-devs";
import TeamSection from "@/components/sections/team";
import FeaturesSection from "@/components/sections/features";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AIDevsSection />
        <FeaturesSection />
        <TeamSection />
        <EnterpriseSection />
        
        {/* FAQ Section */}
        <AccordionDemo />
      </main>
    </div>
  );
}
