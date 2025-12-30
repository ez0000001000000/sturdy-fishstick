import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import EnterpriseSection from "@/components/sections/enterprise";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EnterpriseSection />
      </main>
    </div>
  );
}
